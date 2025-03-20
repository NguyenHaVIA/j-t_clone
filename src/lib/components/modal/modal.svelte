<script>
  export let isOpen = false;
  export let onClose;
</script>

{#if isOpen}
  <div
    class="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 z-50"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div
        class="relative bg-white text-black rounded-lg shadow-md border border-gray-300"
      >
        <slot name="success">
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b border-gray-300"
          >
            <slot name="header"></slot>
            <button
              type="button"
              onclick={onClose}
              class="text-gray-600 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <slot name="body"></slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
{/if}
