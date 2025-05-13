<script>
    import "../app.css";
    import group51470 from "../assets/img/group-51470.svg";
    import maskGroup0 from "../assets/img/mask-group0.svg";
    import vector0 from "../assets/img/vector0.svg";
    import vector1 from "../assets/img/vector1.svg";
    import vector2 from "../assets/img/vector2.svg";
    import logoJT0 from "../assets/img/logo-j-t0.svg";
    import logoJT1 from "../assets/img/logo-j-t1.svg";
    import group0 from "../assets/img/group0.svg";
    import group1 from "../assets/img/group1.svg";
    import group2 from "../assets/img/group2.svg";
    import group3 from "../assets/img/group3.svg";
    import group4 from "../assets/img/group4.svg";
    import icons7 from "../assets/img/icons7.svg";
    import icons8 from "../assets/img/icons8.svg";
    import icons9 from "../assets/img/icons9.svg";
    import icons10 from "../assets/img/icons10.svg";
    import icons11 from "../assets/img/icons11.svg";
    import iconFacebook from "../assets/img/facebook-svgrepo-com0.svg";
    import iconSpaceUser1 from "../assets/img/iconspace-user-1-25-px1.svg";
    import group5 from "../assets/img/group5.svg";
    import iconBCT10 from "../assets/img/icon-bct-10.png";
    import qrCode from "../assets/img/tao-ma-qr-code-san-pham-1-1620927223-10.png";
    import appStore from "../assets/img/download-on-the-app-store-apple-40.svg";
    import googlePlay from "../assets/img/google-play-badge-20.svg";
    import group50800 from "../assets/img/group-50800.svg";
    import shape0 from "../assets/img/shape0.svg";
    import png10 from "../assets/img/_10.png";
    import png20 from "../assets/img/_20.png";
    import png30 from "../assets/img/_30.png";
    import png40 from "../assets/img/_40.png";
    import png60 from "../assets/img/_60.png";
    import png520 from "../assets/img/_5-20.png";
    import Login from "../lib/components/login/login.svelte";
    import SignUp from "../lib/components/signUp/signUp.svelte";
    import avt from "../assets/img/avt.jpg";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getSession, logOut, getUserFromSession } from "../lib/services/auth";
    import { goto } from "$app/navigation";
    let pathName = $page.url.pathname;
    let showMenu = false;
    let checkedSession = false;
    let user = null;
    onMount(() => {
        user = getUserFromSession();
        if (!user) {
            goto("/");
        }else if(pathName!= "/home"){
            goto("/home").then(() => {
                location.reload();
            });
        }
    });
</script>

<div class="bg-[#ffffff] h-[1617px] relative overflow-hidden">
    <div class="w-[2202px] h-[500px] absolute left-[-0.02px] overflow-hidden">
        <!-- svelte-ignore a11y_missing_attribute -->
        <img
            class="w-[115.07%] h-[113.01%] absolute right-[-8.86%] left-[-6.21%] bottom-[0%] top-[-40.01%] overflow-visible"
            src={group51470}
        />
        <img
            class="w-[103.22%] h-[100%] absolute right-[-3.22%] left-[0%] bottom-[0%] top-[-10%] overflow-visible"
            src={maskGroup0}
        />
        <img
            class="w-[28.21%] h-[21.89%] absolute right-[11.34%] left-[60.46%] bottom-[81.36%] top-[-3.26%] overflow-visible"
            style="
          opacity: 0.3;
          transform: translate(-0.24px, 14px);
          mix-blend-mode: overlay;
        "
            src={vector0}
        />
        <img
            class="w-[27.55%] h-[38.02%] absolute right-[20.01%] left-[52.44%] bottom-[18.47%] top-[43.5%] overflow-visible"
            style="opacity: 0.3; transform: translate(-0.05px, -2.77px)"
            src={vector1}
        />
        <img
            class="w-[19.54%] h-[42.04%] absolute right-[54.8%] left-[25.66%] bottom-[63.25%] top-[-5.3%] overflow-visible"
            style="opacity: 0.3; transform: translate(27.98px, 22.77px)"
            src={vector2}
        />

        {#if pathName === "/home" && user}
            <div
                class="flex items-center space-x-3 cursor-pointer gap-2 items-start justify-end absolute left-[1500px] top-[20px]"
                style="
      box-shadow: var(
        --shadow-xl-box-shadow,
        0px 12px 24px 0px rgba(0, 0, 0, 0.1)
      );
      background-color: white;
         border-radius: 8px;
        border: 1px solid transparent;
    "
                onclick={() => (showMenu = !showMenu)}
            >
                <img
                    alt="User Avatar"
                    class="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
                    src={avt}
                />
                {#if user}
                    <!-- Text info -->
                    <div class="flex flex-col text-right">
                        <span class="text-red-600 font-semibold font-medium"
                            >{user.shopName}</span
                        >
                    </div>
                {/if}

                <!-- Avatar -->

                <!-- Dropdown Icon -->
                <svg
                    class="w-4 h-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
                {#if showMenu}
                    <div
                        class="absolute right-0 right-0 mt-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                        <button
                            class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onclick={logOut}
                        >
                            Đăng xuất
                        </button>
                    </div>
                {/if}
            </div>
        {:else}
            <div
                class="flex flex-col gap-4 items-start justify-end absolute left-[1014px] top-[20px]"
            >
                <div
                    class="text-[#ffffff] text-left font-paragraph-p3-semi-bold-font-family text-paragraph-p3-semi-bold-font-size leading-paragraph-p3-semi-bold-line-height font-paragraph-p3-semi-bold-font-weight relative"
                >
                    ĐĂNG NHẬP NGAY!
                </div>
                <div
                    class="flex flex-col gap-4 items-end justify-end shrink-0 relative"
                >
                    <div
                        class="rounded p-7 flex flex-row gap-4 items-end justify-start shrink-0 relative"
                        style="
      box-shadow: var(
        --shadow-xl-box-shadow,
        0px 12px 24px 0px rgba(0, 0, 0, 0.1)
      );
      background-color: white;
    
    "
                    >
                        <Login />
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
<div class="bg-[#d9d9d9] w-px h-[1021px] absolute left-[1918.98px] top-0"></div>
<img
    class="w-[131px] h-[27px] absolute left-[31px] top-[35px] overflow-visible"
    src={logoJT0}
/>
<div
    class="flex flex-row gap-[89px] items-end justify-center w-[1840px] absolute left-[79.98px] top-[480px]"
>
    <div
        class="flex flex-row gap-[300px] items-end justify-center shrink-0 w-[1760px] h-[494px] relative"
    >
        <div
            class="flex flex-col gap-[27px] items-center justify-end shrink-0 relative"
        >
            <!-- form sign up -->
            {#if pathName === "/home" && user}
                <div class="mb-40 items-center">
                    <h1 class="text-black font-medium text-red-500">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG</h1>
                    <h2 class="text-black font-medium">Chào mừng <span class="text-red-500 font-bold">{user.shopName}</span> quay trở lại</h2>
                </div>
            {:else}
                <SignUp />
            {/if}
        </div>
        <div
            class="rounded p-6 flex flex-col gap-6 items-center justify-end shrink-0 relative"
            style="    background-color: #F7F8F9;"
        >
            <div
                class="text-neutral-900 text-left font-heading-h6-bold-font-family text-heading-h6-bold-font-size leading-heading-h6-bold-line-height font-heading-h6-bold-font-weight relative"
                style="letter-spacing: var(--heading-h6-bold-letter-spacing, -0.02em)"
            >
                DỊCH VỤ CỦA CHÚNG TÔI
            </div>
            <div
                class="flex flex-row gap-6 items-center justify-center shrink-0 relative"
            >
                <div
                    class="bg-shades-white rounded pt-4 pr-2 pb-4 pl-2 flex flex-col gap-2 items-center justify-center shrink-0 w-[140px] relative"
                >
                    <!-- svelte-ignore a11y_missing_attribute -->
                    <img
                        class="shrink-0 w-[36.68px] h-10 relative overflow-visible"
                        src={group0}
                    />
                    <div
                        class="text-neutral-900 text-left font-paragraph-p2-semi-bold-font-family text-paragraph-p2-semi-bold-font-size leading-paragraph-p2-semi-bold-line-height font-paragraph-p2-semi-bold-font-weight relative"
                    >
                        J&amp;T EXPRESS
                    </div>
                </div>
                <div
                    class="bg-shades-white rounded pt-4 pr-2 pb-4 pl-2 flex flex-col gap-2 items-center justify-center shrink-0 w-[140px] relative"
                >
                    <img
                        class="shrink-0 w-[40.14px] h-10 relative overflow-visible"
                        src={group1}
                    />
                    <div
                        class="text-neutral-900 text-left font-paragraph-p2-semi-bold-font-family text-paragraph-p2-semi-bold-font-size leading-paragraph-p2-semi-bold-line-height font-paragraph-p2-semi-bold-font-weight relative"
                    >
                        J&amp;T FAST
                    </div>
                </div>
            </div>
            <div
                class="flex flex-row gap-6 items-center justify-center shrink-0 relative"
            >
                <div
                    class="bg-shades-white rounded pt-4 pr-2 pb-4 pl-2 flex flex-col gap-2 items-center justify-center shrink-0 w-[140px] relative"
                >
                    <img
                        class="shrink-0 w-[57.83px] h-10 relative overflow-visible"
                        src={group2}
                    />
                    <div
                        class="text-neutral-900 text-left font-paragraph-p2-semi-bold-font-family text-paragraph-p2-semi-bold-font-size leading-paragraph-p2-semi-bold-line-height font-paragraph-p2-semi-bold-font-weight relative"
                    >
                        J&amp;T SUPER
                    </div>
                </div>
                <div
                    class="bg-shades-white rounded pt-4 pr-2 pb-4 pl-2 flex flex-col gap-2 items-center justify-center shrink-0 w-[140px] relative"
                >
                    <img
                        class="shrink-0 w-[56.05px] h-10 relative overflow-visible"
                        src={group3}
                    />
                    <div
                        class="text-neutral-900 text-left font-paragraph-p2-semi-bold-font-family text-paragraph-p2-semi-bold-font-size leading-paragraph-p2-semi-bold-line-height font-paragraph-p2-semi-bold-font-weight relative"
                    >
                        J&amp;T FRESH
                    </div>
                </div>
            </div>
            <div
                class="bg-shades-white flex flex-row gap-2 items-center justify-center shrink-0 w-[304px] relative"
            >
                <div
                    class="bg-shades-white rounded pt-4 pr-2 pb-4 pl-2 flex flex-col gap-2 items-center justify-center shrink-0 w-[304px] relative"
                >
                    <img
                        class="shrink-0 w-[45.15px] h-[45px] relative overflow-visible"
                        src={group4}
                    />
                    <div
                        class="text-neutral-900 text-left font-paragraph-p2-semi-bold-font-family text-paragraph-p2-semi-bold-font-size leading-paragraph-p2-semi-bold-line-height font-paragraph-p2-semi-bold-font-weight relative"
                    >
                        J&amp;T INTERNATIONAL
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div
    class=" pr-[78px] pb-12 pl-[78px] flex flex-col gap-2.5 items-start justify-start w-[1920px] h-[234px] absolute left-[-0.02px] top-[1024px]"
    style="
    background-color: #F7F8F9"
>
    <div
        class="flex flex-col gap-6 items-center justify-center shrink-0 w-[1814px] h-[173px] relative"
    >
        <div
            class="text-primary-700 text-left font-heading-h4-semi-bold-font-family text-heading-h4-semi-bold-font-size leading-heading-h4-semi-bold-line-height font-heading-h4-semi-bold-font-weight relative"
            style="
            letter-spacing: var(--heading-h4-semi-bold-letter-spacing, -0.02em);
          "
        >
            KHÁCH HÀNG TIÊU BIỂU
        </div>
        <div
            class="flex flex-row gap-[54px] items-center justify-center self-stretch shrink-0 relative"
        >
            <img
                class="shrink-0 w-8 h-8 relative overflow-visible"
                src={icons7}
            />
            <img
                class="shrink-0 w-[149.34px] h-[45px] relative"
                style="object-fit: cover"
                src={png10}
            />
            <img
                class="shrink-0 w-[131.97px] h-[45px] relative"
                style="object-fit: cover"
                src={png20}
            />
            <img
                class="shrink-0 w-[152px] h-[70px] relative"
                style="object-fit: cover"
                src={png520}
            />
            <img
                class="shrink-0 w-[152.24px] h-[39px] relative"
                style="object-fit: cover"
                src={png60}
            />
            <img
                class="shrink-0 w-[111.34px] h-[45px] relative"
                style="object-fit: cover"
                src={png30}
            />
            <img
                class="shrink-0 w-[134.64px] h-20 relative"
                style="object-fit: cover"
                src={png40}
            />
            <img
                class="shrink-0 w-8 h-8 relative overflow-visible"
                src={icons8}
            />
        </div>
    </div>
</div>
<div
    class=" border-solid border-primary-700 border-b pt-12 pr-20 pb-12 pl-20 flex flex-col gap-2.5 items-start justify-start w-[1919.98px] absolute left-0 top-[1240px]"
    style="background-color: #A60000;  border: 1px solid #ccc;"
>
    <div
        class="flex flex-row gap-[100px] items-end justify-center shrink-0 w-[1760px] relative"
    >
        <div
            class="flex flex-col gap-4 items-start justify-start shrink-0 w-[482px] relative"
        >
            <img
                class="shrink-0 w-[153px] h-[31px] relative overflow-visible"
                src={logoJT1}
            />
            <div
                class="flex flex-col gap-1 items-start justify-start shrink-0 relative"
            >
                <div
                    class="text-[#ffffff] text-left font-footer-cap-font-family text-footer-cap-font-size leading-footer-cap-line-height font-footer-cap-font-weight uppercase relative"
                    style="letter-spacing: var(--footer-cap-letter-spacing, 0.08em)"
                >
                    CÔNG TY TNHH MỘT THÀNH VIÊN
                    <br />
                    CHUYỂN PHÁT NHANH THUẬN PHONG
                </div>
                <div
                    class="text-[#ffffff] text-left font-footer-regular-font-family text-footer-regular-font-size leading-footer-regular-line-height font-footer-regular-font-weight relative"
                    style="letter-spacing: var(--footer-regular-letter-spacing, 0.02em)"
                >
                    Giấy CNĐKKD: 0313617136
                    <br />
                    Ngày cấp: 13/01/2016, đăng ký thay đổi lần 06 ngày 25/09/2018
                    <br />
                    Cơ Quan Cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư
                    TP Hồ Chí Minh
                </div>
            </div>
            <div
                class="flex flex-row gap-4 items-start justify-start shrink-0 relative overflow-hidden"
            >
                <div class="shrink-0 w-[30px] h-[30px] relative">
                    <div
                        class="rounded-[50%] border-solid border-shades-white border w-[84%] h-[84%] absolute right-[8%] left-[8%] bottom-[8%] top-[8%]"
                        style="box-shadow: 0px 0px 10.43px 0px rgba(160, 160, 160, 0.15)"
                    ></div>
                    <div
                        class="w-[40%] h-[40%] absolute right-[30%] left-[30%] bottom-[30%] top-[30%]"
                    >
                        <img
                            class="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                            src={iconFacebook}
                        />
                    </div>
                </div>
                <div class="shrink-0 w-[30px] h-[30px] relative">
                    <img
                        class="w-[44%] h-[44%] absolute right-[28%] left-[28%] bottom-[28%] top-[28%] overflow-visible"
                        src={iconSpaceUser1}
                    />
                    <div
                        class="rounded-[50%] border-solid border-shades-white border w-[84%] h-[84%] absolute right-[8%] left-[8%] bottom-[8%] top-[8%]"
                        style="box-shadow: 0px 0px 10.43px 0px rgba(160, 160, 160, 0.15)"
                    ></div>
                </div>
                <div class="shrink-0 w-[30px] h-[30px] relative">
                    <div
                        class="w-[44%] h-[44%] absolute right-[28%] left-[28%] bottom-[28%] top-[28%] overflow-hidden"
                    >
                        <img
                            class="w-[79.64%] h-[98.48%] absolute right-[12.03%] left-[8.33%] bottom-[4.15%] top-[-2.64%] overflow-visible"
                            src={group5}
                        />
                    </div>
                    <div
                        class="rounded-[50%] border-solid border-shades-white border w-[84%] h-[84%] absolute right-[8%] left-[8%] bottom-[8%] top-[8%]"
                        style="box-shadow: 0px 0px 10.43px 0px rgba(160, 160, 160, 0.15)"
                    ></div>
                </div>
                <div class="shrink-0 w-[30px] h-[30px] relative">
                    <img
                        class="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                        src={iconSpaceUser1}
                    />
                    <img
                        class="w-[11.76px] h-[8.4px] absolute left-[9.12px] top-[10.8px] overflow-visible"
                        src={shape0}
                    />
                    <div
                        class="rounded-[50%] border-solid border-shades-white border w-[84%] h-[84%] absolute right-[8%] left-[8%] bottom-[8%] top-[8%]"
                        style="box-shadow: 0px 0px 10.43px 0px rgba(160, 160, 160, 0.15)"
                    ></div>
                </div>
                <div class="shrink-0 w-[30px] h-[30px] relative">
                    <div
                        class="w-[46.67%] h-[50%] absolute right-[28.33%] left-[25%] bottom-[23.16%] top-[26.84%] overflow-hidden"
                    >
                        <img
                            class="h-[auto] absolute left-[1.17px] top-[-0.4px] overflow-visible"
                            src={group50800}
                        />
                    </div>
                    <div
                        class="rounded-[50%] border-solid border-shades-white border w-[84%] h-[84%] absolute right-[8%] left-[8%] bottom-[8%] top-[8%]"
                        style="box-shadow: 0px 0px 10.43px 0px rgba(160, 160, 160, 0.15)"
                    ></div>
                </div>
            </div>
        </div>
        <div
            class="flex flex-row gap-[100px] items-start justify-center shrink-0 relative"
        >
            <div
                class="flex flex-col gap-4 items-start justify-start shrink-0 relative"
            >
                <div
                    class="text-[#ffffff] text-left font-footer-cap-font-family text-footer-cap-font-size leading-footer-cap-line-height font-footer-cap-font-weight uppercase relative"
                    style="letter-spacing: var(--footer-cap-letter-spacing, 0.08em)"
                >
                    LIÊN HỆ
                </div>
                <div
                    class="flex flex-col gap-2 items-start justify-start shrink-0 relative"
                >
                    <div
                        class="flex flex-row gap-2 items-center justify-center shrink-0 relative"
                    >
                        <img
                            class="shrink-0 w-4 h-4 relative overflow-visible"
                            src={icons9}
                        />
                        <div
                            class="text-shades-white text-left font-footer-semi-bold-font-family text-footer-semi-bold-font-size leading-footer-semi-bold-line-height font-footer-semi-bold-font-weight relative"
                            style="
                    letter-spacing: var(
                      --footer-semi-bold-letter-spacing,
                      0.02em
                    );
                  "
                        >
                            cskh@jtexpress.vn
                        </div>
                    </div>
                    <div
                        class="flex flex-row gap-2 items-center justify-center shrink-0 relative"
                    >
                        <img
                            class="shrink-0 w-4 h-4 relative overflow-visible"
                            src={icons10}
                        />
                        <div
                            class="text-shades-white text-left font-footer-semi-bold-font-family text-footer-semi-bold-font-size leading-footer-semi-bold-line-height font-footer-semi-bold-font-weight relative"
                            style="
                    letter-spacing: var(
                      --footer-semi-bold-letter-spacing,
                      0.02em
                    );
                  "
                        >
                            1900 1088
                        </div>
                    </div>
                    <div
                        class="flex flex-row gap-2 items-center justify-center shrink-0 relative"
                    >
                        <img
                            class="shrink-0 w-4 h-4 relative overflow-visible"
                            src={icons11}
                        />
                        <div
                            class="text-shades-white text-left font-footer-semi-bold-font-family text-footer-semi-bold-font-size leading-footer-semi-bold-line-height font-footer-semi-bold-font-weight relative"
                            style="
                    letter-spacing: var(
                      --footer-semi-bold-letter-spacing,
                      0.02em
                    );
                  "
                        >
                            10 Mai Chí Thọ, Thủ thiêm, Tp. Thủ Đức, Tp. Hồ Chí
                            Minh
                        </div>
                    </div>
                </div>
                <img
                    class="shrink-0 w-[91px] h-[34px] relative"
                    style="object-fit: cover"
                    src={iconBCT10}
                />
            </div>
            <div
                class="flex flex-col gap-4 items-start justify-start shrink-0 relative"
            >
                <div
                    class="text-[#ffffff] text-left font-footer-cap-font-family text-footer-cap-font-size leading-footer-cap-line-height font-footer-cap-font-weight uppercase relative"
                    style="letter-spacing: var(--footer-cap-letter-spacing, 0.08em)"
                >
                    TẢI ỨNG DỤNG
                </div>
                <div
                    class="flex flex-row gap-5 items-start justify-start shrink-0 relative"
                >
                    <img
                        class="shrink-0 w-20 h-20 relative"
                        style="object-fit: cover"
                        src={qrCode}
                    />
                    <div
                        class="flex flex-col gap-2 items-start justify-start shrink-0 h-[89px] relative"
                    >
                        <div class="shrink-0 w-[110px] h-[32.13px] relative">
                            <img
                                class="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                src={appStore}
                            />
                        </div>
                        <div class="shrink-0 w-[110px] h-[33.37px] relative">
                            <img
                                class="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                src={googlePlay}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div
    class=" pt-4 pr-[444px] pb-4 pl-[444px] flex flex-col gap-2 items-center justify-center w-[1920px] absolute left-[-0.02px] top-[1541px]"
    style=" background-color: darkred;"
>
    <div
        class="flex flex-col gap-2 items-center justify-start shrink-0 relative"
    >
        <div
            class="text-[#ffffff] text-left font-footer-cap-font-family text-footer-cap-font-size leading-footer-cap-line-height font-footer-cap-font-weight uppercase relative"
            style="letter-spacing: var(--footer-cap-letter-spacing, 0.08em)"
        >
            Chính sách bảo mật
        </div>
        <div
            class="text-shades-white text-left font-footer-regular-font-family text-footer-regular-font-size leading-footer-regular-line-height font-footer-regular-font-weight relative"
            style="letter-spacing: var(--footer-regular-letter-spacing, 0.02em)"
        >
            Copyright © 2021 J&amp;T Express. All rights reserved.
        </div>
    </div>
</div>
