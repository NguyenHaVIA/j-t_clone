<script>
    import { onMount } from "svelte";
    import Modal from "./modal.svelte";
    import { emailStore, otpStore } from "$lib/constan/store";
    import { checkOTP } from "$lib/services/auth";
    export let isOpen;
    export let onClose;
    export let onBack;
    export let emailOrPhone = "";

    export let onNextStep;

    let otp = ["", "", "", "", "", ""];
    let timeLeft = 180;
    let interval;
    let errorMessage = "";
    onMount(() => {
        interval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(interval);
            }
        }, 1000);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${minutes}:${sec < 10 ? "0" + sec : sec}`;
    }

    function handleInput(index, event) {
        const value = event.target.value;
        const key = event.key;
        if (value.match(/[0-9]/) && value.length === 1) {
            otp[index] = value;
            if (index < otp.length - 1) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        } else if (key === "Backspace") {
            otp[index] = "";  
            if (index > 0) {
                document.getElementById(`otp-${index - 1}`).focus(); 
            }
        } else {
            otp[index] = "";
        }
    }

    function resendOTP() {
        timeLeft = 180;
        otp = ["", "", "", "", "", ""];
    }
    async function submitOTP() {
        const otpCode = otp.join("");
        otpStore.set(otpCode);
        emailStore.subscribe((value) => {
            emailOrPhone = value;
        });
        const response = await checkOTP(emailOrPhone, otpCode);
        const responseData = JSON.parse(response.data);
        console.log(responseData);

        if (responseData.errorCode === 400) {
            errorMessage = "Mã OTP không hợp lệ";
            otp = ["", "", "", "", "", ""];
            return;
        }
        errorMessage = "";
        onNextStep();
    }
</script>

<Modal {isOpen} {onClose}>
    <h3 slot="header" class="text-xl font-semibold">NHẬP MÃ OTP</h3>

    <div slot="body" class="p-4 md:p-5 text-center">
        <p class="text-green-600 font-semibold">
            MÃ OTP ĐÃ ĐƯỢC GỬI TỚI SỐ ĐIỆN THOẠI/EMAIL
        </p>
        <p class="text-orange-600 text-sm">
            Thời gian còn lại: {formatTime(timeLeft)} phút
        </p>

        <div class="flex justify-center space-x-2 my-4">
            {#each otp as num, index}
                <input
                    id={"otp-" + index}
                    type="text"
                    maxlength="1"
                    bind:value={otp[index]}
                    class="w-12 h-12 text-xl font-semibold text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onkeydown={(e) => handleInput(index, e)}
                />
            {/each}
        </div>
        <div>
            {#if errorMessage}
                <p class="text-red-500 text-sm mt-1">{errorMessage}</p>
            {/if}
        </div>
        <p class="text-sm text-gray-700">
            Không nhận được mã OTP? <a
                href="#"
                class="text-blue-600 font-medium"
                onclick={resendOTP}>Gửi lại mã</a
            >
        </p>
        <div class="flex justify-between mt-4">
            <button
                onclick={onBack}
                class="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm"
            >
                ◀ Trở về
            </button>
            <button
                onclick={submitOTP}
                class="px-4 py-2 text-white bg-red-500 hover:bg-yellow-600 font-medium rounded-lg text-sm"
            >
                🔑 Xác nhận
            </button>
        </div>
    </div>
</Modal>
