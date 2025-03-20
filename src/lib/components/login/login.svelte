<script>
  import Modal from "../modal/modalInputEmail.svelte";
  import ModalOtp from "../modal/modalOTP.svelte";
  import { lognInUser } from "../../../lib/services/auth";
  import ModalChangePass from "../modal/modalChangePass.svelte";
  import ModalInputEmail from "../modal/modalInputEmail.svelte";
  import ModalCheckChangePass from "../modal/modalCheckChangePass.svelte";
  let showModal = false;

  let userName = "";
  let password = "";
  let isLoading = false;
  let isLognIn = false;
  let showPassword = false;
  let step = 1;
  let isOpen = true;
  async function handleLogin() {
    isLoading = true;

    const result = await lognInUser(userName, password);
    // window.location.href = "/home";
    isLoading = false;
  }
  function togglePassword() {
    showPassword = !showPassword;
  }
  function nextStep() {
    step += 1;
  }

  function goBack() {
    step--;
  }
  function handleClose() {
    step = 1;
    showModal = false;
  }
</script>

{#if isLoading}
  <div
    class="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
  >
    <div
      class="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"
    ></div>
  </div>
{/if}
<form class="flex items-center space-x-4" onsubmit={handleLogin}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class=" md:w-1/2 px-3 mb-6 md:mb-0 w-80">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Email
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="abc@gmail.com"
        bind:value={userName}
      />
    </div>
    <div class="w-full md:w-1/2 px-3 relative">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-last-name"
      >
        Mật khẩu
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type={showPassword ? "text" : "password"}
        bind:value={password}
        placeholder="Nhập mật khẩu"
      />
      <span
        onclick={togglePassword}
        class="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
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
      <div class="text-sm">
        <a
          href="#"
          onclick={() => (showModal = true)}
          class="font-semibold text-indigo-600 hover:text-indigo-500"
          type="button">Forgot password?</a
        >
      </div>
    </div>

    <div class=" ml-auto">
      <button
        class="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
        type="submit"
      >
        Đăng nhập
      </button>
    </div>
  </div>
</form>
{#if step === 1}
  <ModalInputEmail
    isOpen={showModal}
    onNextStep={nextStep}
    onClose={handleClose}
  />
{:else if step === 2}
  <ModalOtp
    isOpen={showModal}
    onBack={goBack}
    onNextStep={nextStep}
    onClose={handleClose}
  />
{:else if step == 3}
  <ModalChangePass
    isOpen={showModal}
    onNextStep={nextStep}
    onClose={handleClose}
  />
{:else if step == 4 }
  <ModalCheckChangePass isOpen={showModal} onClose={handleClose} />
{/if}
