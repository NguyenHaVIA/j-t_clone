<script>
    import { emailStore, newPassStore } from "$lib/constan/store";
    import { lognInUser } from "$lib/services/auth";
    import { onMount, tick } from "svelte";
    import Modal from "./modal.svelte";

    export let isOpen;
    export let onClose;
    export let check = false;
    let userName = "";
    let password = "";
    let countdown = 5;
    let interval;

    emailStore.subscribe((value) => {
        userName = value;
    });
    newPassStore.subscribe((value) => {
        password = value;
    });
    
    $: if (isOpen) {
        console.log("test");
        
       startCountDown();
    }
  
function startCountDown(){
    countdown = 5;
       if(interval) clearInterval(interval);
        
        interval = setInterval( () => {
            if (countdown > 0) {
                countdown--;
            } 
            if (countdown === 0) {
                clearInterval(interval); 
                onClose(); 
                lognInUser(userName,password);
            }
        }, 1000);
}
</script>

<Modal {isOpen} {onClose}>
    <!-- Modal body -->
    <div slot="success" class="p-6 text-center">
        <div class="flex justify-center mb-4">
            <svg
                class="w-12 h-12 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </div>
        <h3 class="text-lg font-semibold text-green-600">
            MẬT KHẨU ĐÃ ĐƯỢC THIẾT LẬP LẠI
        </h3>
        <p class="mt-2 text-gray-700">Vui lòng ghi nhớ mật khẩu!!!!</p>
        <p class="text-red-500 mt-2">Tự động đăng nhập sau {countdown} giây</p>
    </div>
</Modal>
