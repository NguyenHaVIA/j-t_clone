<script>
    export let isOpenLogin = false;
    export let onClose = () => {};
    export let check = false;
</script>

{#if isOpenLogin && check===true}
<div class="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 z-50">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white text-black rounded-lg shadow-md border border-gray-300">
            <!-- Modal body -->
            <div class="p-6 text-center">
                <div class="flex justify-center mb-4">
                    <svg class="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-green-600">ĐĂNG KÝ THÀNH CÔNG</h3>
                <p class="mt-2 text-gray-700">Để sử dụng dịch vụ thu hộ, bạn có muốn Ký kết hợp đồng điện tử ngay?</p>
                <div class="mt-4 flex justify-center gap-3">
                    <button onclick={onClose}  class="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm">Đăng nhập</button>
                    <button onclick={onSignContract} class="px-4 py-2 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm">Ký kết hợp đồng</button>
                </div>
            </div>
        </div>
    </div>
</div>
{:else if isOpenLogin && check===false}
<div class="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 z-50">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white text-black rounded-lg shadow-md border border-gray-300">
            <!-- Modal body -->
            <div class="p-6 text-center">
                <div class="flex justify-center mb-4">
                    <svg class="w-12 h-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-red-600">ĐĂNG KÝ KHÔNG THÀNH CÔNG</h3>
                <p class="mt-2 text-gray-700">Thông tin bạn đăng ký có thể đã trùng với một tài khoản khác trong hệ thống</p>
                <div class="mt-4 flex justify-center gap-3">
                    <button onclick={onClose} class="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm">Bỏ qua đăng ký</button>
                    <button onclick={onClose} class="px-4 py-2 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm">Thử lại</button>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}