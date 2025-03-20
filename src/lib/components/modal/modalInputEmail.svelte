<script>
  import Modal from "./modal.svelte";
  import { emailStore } from "$lib/constan/store";
  import { checkUser } from "$lib/services/auth";
  export let isOpen;
  export let onNextStep;
  export let onClose;
  let emailOrPhone = "";
  let errorMessage = "";
  let isLoading = false;
  function isValidEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    return emailRegex.test(value) || phoneRegex.test(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    emailStore.set(emailOrPhone);

    if (!isValidEmailOrPhone(emailOrPhone)) {
      errorMessage = "Email hoặc Số điện thoại không hợp lệ!";
      return;
    }
    errorMessage = "";
    isLoading = true;
    const response = await checkUser(emailOrPhone);
    const responseData = JSON.parse(response.data);
    // console.log(responseData);
    
    if (responseData.errorCode === 400) {
     errorMessage = "Email hoặc số điện thoại không tồn tại!";
      isLoading = false;
      return;
    }
    errorMessage="";
    isLoading = false;
    onNextStep();
  }
  $: if (!isOpen) {
    emailOrPhone = "";
    errorMessage = "";
  }
</script>

<Modal {isOpen} {onClose}>
  {#if isLoading}
    <div
      class="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
    >
      <div
        class="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  {/if}
  <h3 slot="header" class="text-xl font-semibold">Yêu cầu thay đổi mật khẩu</h3>

  <!-- Modal body -->
  <div slot="body" class="p-4 md:p-5">
    <form onsubmit={handleSubmit} class="flex flex-col items-center space-y-4">
      <div class="w-full">
        <label for="email_phoneNumber" class="block mb-2 text-sm font-medium"
          >Email/Số điện thoại</label
        >
        <input
          type="text"
          name="email_phoneNumber"
          id="email_phoneNumber"
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
          bind:value={emailOrPhone}
        />
        {#if errorMessage}
          <p class="text-red-500 text-sm mt-1">{errorMessage}</p>
        {/if}
      </div>
      <div class="text-center text-sm text-gray-700">
        <p>
          Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện thoại để
          lấy mã OTP
        </p>
      </div>
      <button
        type="submit"
        class="px-4 py-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm"
      >
        Gửi yêu cầu
      </button>
    </form>
  </div>
</Modal>
