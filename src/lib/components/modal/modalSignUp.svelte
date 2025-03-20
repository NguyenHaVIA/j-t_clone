<script>
    export let isOpenSignUp = false;
    export let onClose = () => {};
    let otp = Array(6).fill("");
    function onBack() {
        console.log("Quay lại bước trước");
    }
</script>

{#if isOpenSignUp}
<div class="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 z-50">
  <div class="relative p-4 w-full max-w-md">
    <!-- Modal content -->
    <div class="relative bg-white text-black rounded-lg shadow-md border border-gray-300">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b border-gray-300">
        <h3 class="text-xl font-semibold">NHẬP MÃ OTP</h3>
        <button type="button" 
          onclick={onClose} 
          class="text-gray-600 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>

      <!-- Modal body -->
      <div class="p-4 md:p-5 flex flex-col items-center space-y-4">
        <p class="text-red-600 font-medium">Thời gian còn lại: <span class="font-bold">3:00 phút</span></p>

        <!-- OTP Inputs -->
        <div class="flex space-x-2">
          {#each Array(6) as _, i}
            <input 
              type="text" maxlength="1" 
              class="w-10 h-12 text-2xl text-center border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              bind:value={otp[i]} />
          {/each}
        </div>

        <p class="text-sm text-gray-700">
          Không nhận được mã OTP? <a href="#" class="text-red-500 font-medium">Gửi lại mã</a>
        </p>

        <!-- Action buttons -->
        <div class="flex space-x-4">
          <button 
            class="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
            onclick={onBack}>
            ⬅ Trở về
          </button>
          <button 
            class="px-6 py-2 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm">
            ✅ Hoàn tất đăng ký tài khoản
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/if}
