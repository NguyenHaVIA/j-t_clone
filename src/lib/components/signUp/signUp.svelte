<script>
  import { registerUser } from "../../../lib/services/auth";
  import ModalSignUp from "../modal/modalSignUp.svelte";
  import ModalSuccess from "../modal/modalSuccessSignUp.svelte";
  let showModal = true;

  let shopName = "";
  let phoneNumber = "";
  let password = "";
  let confirmPassword = "";
  let emailSignUp = "";
  let address = "";
  let wards = "";
  let district = "";
  let province = "";
  let userName = "";
  let acceptTerm = false;
  let message = "";
  let isLoading = false;
  let passwordError = "";
  let passwordInput;
  let showPassword = false;
  let provinces = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng"];
  let districts = [];
  let wardsList = [];
  let notificationText="";
  let checkSignUp=null;

  const districtData = {
    "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
    "TP Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
    "Đà Nẵng": ["Hải Châu", "Thanh Khê", "Liên Chiểu"],
  };

  const wardData = {
    "Ba Đình": ["Phúc Xá", "Trúc Bạch", "Quán Thánh"],
    "Hoàn Kiếm": ["Hàng Bài", "Hàng Gai", "Tràng Tiền"],
    "Hai Bà Trưng": ["Bạch Mai", "Đồng Nhân", "Đồng Tâm"],
    "Quận 1": ["Bến Nghé", "Bến Thành", "Nguyễn Cư Trinh"],
    "Quận 2": ["An Phú", "Bình Trưng Đông", "Bình Trưng Tây"],
    "Quận 3": ["Võ Thị Sáu", "Phường 7", "Phường 8"],
  };
  function handleProvinceChange() {
    district = "";
    wards = "";
    districts = districtData[province] || [];
    wardsList = [];
  }

  function handleDistrictChange() {
    wards = "";
    wardsList = wardData[district] || [];
  }
  $: userName = emailSignUp;
  async function handleRegister() {
    isLoading = true;
    const data = {
      userName,
      shopName,
      phoneNumber,
      password,
      confirmPassword,
      emailSignUp,
      address,
      wards,
      district,
      province,
      acceptTerm,
    };
    if (password.length < 9) {
      isLoading = false;
      checkSignUp=false;
      passwordError = "Mật khẩu phải có ít nhất 9 kí tự";
      password = "";
      confirmPassword = "";
      passwordInput.focus();
    } else {
      passwordError = "";
      const result = await registerUser(data);
      if(result){
        checkSignUp=true;
      }else{
        checkSignUp=false;
      }
    }
    isLoading = false;
    console.log(check);
    
  }
  function togglePassword() {
    showPassword = !showPassword;
    passwordInput.type = showPassword ? "text" : "password";
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
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 signUp">
  <div class="shrink-0 w-[339px] h-8 relative">
    <div
      class="text-red-700 font-heading-4-font-family text-heading-4-font-size leading-heading-4-line-height font-heading-4-font-weight absolute bottom-[57.69%] top-[42.31%] h-[0%]"
    >
      <p class="signUp_text">ĐĂNG KÝ TÀI KHOẢN</p>
    </div>
  </div>
  <form
    onsubmit={handleRegister}
    class="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Tên cửa hàng *</label
        >
        <input
          bind:value={shopName}
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
          placeholder="Nhập tên cửa hàng..."
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Số điện thoại *</label
        >
        <input
          bind:value={phoneNumber}
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
          placeholder="Nhập số điện thoại..."
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 text-black">Email</label>
        <input
          bind:value={emailSignUp}
          type="email"
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
          placeholder="Nhập email..."
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Mật khẩu *</label
        >
        <div class="relative">
          <input
            bind:value={password}
            type="password"
            class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
            placeholder="Nhập mật khẩu..."
            required
            bind:this={passwordInput}
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
        {#if passwordError}
          <div class="text-red-500 text-sm mt-1">{passwordError}</div>
        {/if}
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Xác nhận mật khẩu *</label
        >
        <div class="relative">
          <input
            bind:value={confirmPassword}
            type="password"
            class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
            placeholder="Xác nhận mật khẩu..."
            required
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
      </div>
    </div>
    <div class="mt-4">
      <label class="block text-sm font-medium mb-1 text-black">Địa chỉ</label>
      <input
        bind:value={address}
        type="text"
        class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
        placeholder="Nhập số nhà, toà nhà, tên đường..."
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Thành phố</label
        >
        <select
          bind:value={province}
          onchange={handleProvinceChange}
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
        >
          <option value="">Chọn Thành phố</option>
          {#each provinces as p}
            <option value={p}>{p}</option>
          {/each}
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Quận/Huyện</label
        >
        <select
          onchange={handleDistrictChange}
          bind:value={district}
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
        >
          <option value="">Chọn Quận/Huyện</option>
          {#each districts as d}
            <option value={d}>{d}</option>
          {/each}
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 text-black"
          >Phường/Xã</label
        >
        <select
          bind:value={wards}
          class="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:text-black"
        >
          <option value="">Chọn Phường/Xã</option>
          {#each wardsList as w}
            <option value={w}>{w}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="flex items-center mt-4">
      <input
        type="checkbox"
        id="agree"
        bind:checked={acceptTerm}
        required
        class="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
      />
      <label for="agree" class="ml-2 text-sm text-black"
        >Tôi đã đọc và đồng ý với <a href="#" class="text-red-500"
          >Chính sách bảo mật thông tin</a
        ></label
      >
    </div>
    {#if checkSignUp===false}
    <div class="text-red-500 text-sm mt-1">{notificationText}</div>
    {:else}
    <div class="text-blue-500 text-sm mt-1">{notificationText}</div>
    {/if}
    <div class="mt-6 text-right">
      <button
        type="submit"
        class="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Đăng ký ngay
      </button>
    </div>
  </form>
</div>
{#if checkSignUp!==null} 
<ModalSuccess isOpenLogin={showModal} check={checkSignUp} onClose={() => (showModal = false)} />
{/if}
