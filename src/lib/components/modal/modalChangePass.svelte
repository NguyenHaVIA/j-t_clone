<script>
  import Modal from "./modal.svelte";
  import { emailStore, newPassStore, otpStore } from "$lib/constan/store";
  import { changePassword } from "$lib/services/auth";
  import ModalCheckChangePass from "./modalCheckChangePass.svelte";
  let password = "";
  let confirmPassword = "";
  let userName = "";
  let otpCode = "";
  export let onConfirm;
  export let isOpen;
  export let onClose;
  export let onNextStep;
  let showModal = true;
  let checkChangePass=null;
  async function handleSubmit() {
    emailStore.subscribe((value) => {
      userName = value;
    });
    otpStore.subscribe((value) => {
      otpCode = value;
    });
    console.log(userName);
    
    const data = {
      userName,
      otpCode,
      password,
      confirmPassword
    };
    if (password.length < 9) {
      isLoading = false;
      checkSignUp = false;
      passwordError = "Mật khẩu phải có ít nhất 9 kí tự";
      password = "";
      confirmPassword = "";
      return;
    }
    const response = await changePassword(data);
    if(response){
      checkChangePass = true;
      newPassStore.set(password);
      onNextStep();
    }else{
      checkChangePass=false;
    }
  }
  function togglePassword() {
    showPassword = !showPassword;
    passwordInput.type = showPassword ? "text" : "password";
  }
</script>

<Modal {isOpen} {onClose}>
  <h3 slot="header" class="text-xl font-semibold">Yêu cầu thay đổi mật khẩu</h3>

  <!-- Modal body -->
  <div slot="body" class="p-4 md:p-5">
    <form class="flex flex-col items-center space-y-4">
      <div class="w-full">
        <label for="password" class="block mb-2 text-sm font-medium"
          >Nhập mật khẩu mới</label
        >
        <input
          type="text"
          name="password"
          id="password"
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
          bind:value={password}
        />
        <span
            onclick={togglePassword}
            class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
          >
          {#if showPassword}
          <!-- hidden -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="m15 18-.722-3.25"></path><path
              d="M2 8a10.645 10.645 0 0 0 20 0"
            ></path><path d="m20 15-1.726-2.05"></path><path
              d="m4 15 1.726-2.05"
            ></path><path d="m9 18 .722-3.25"></path></svg
          >
        {:else}
          <!-- show -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            ></path><circle cx="12" cy="12" r="3"></circle></svg
          >
        {/if}
          </span>
      </div>
      <div class="w-full">
        <label for="confirmPassword" class="block mb-2 text-sm font-medium"
          >Nhập lại mật khẩu mới</label
        >
        <input
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
          bind:value={confirmPassword}
        />
        <span
            onclick={togglePassword}
            class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
          >
          {#if showPassword}
          <!-- hidden -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="m15 18-.722-3.25"></path><path
              d="M2 8a10.645 10.645 0 0 0 20 0"
            ></path><path d="m20 15-1.726-2.05"></path><path
              d="m4 15 1.726-2.05"
            ></path><path d="m9 18 .722-3.25"></path></svg
          >
        {:else}
          <!-- show -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            ></path><circle cx="12" cy="12" r="3"></circle></svg
          >
        {/if}
          </span>
      </div>
      <button
        type="submit"
        onclick={handleSubmit}
        class="px-4 py-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm"
      >
        Đăng nhập
      </button>
    </form>
  </div>
</Modal>
