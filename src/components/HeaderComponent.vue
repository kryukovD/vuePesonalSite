<script>
export default {
  data() {
    return {
      headerMenu: [
        { text: "Главная", href: "/" },
        { text: "Портфолио", href: "/portfolio" },
        { text: "Контакты", href: "/contatcs" },
      ],
      isActiveMenu: false,
    };
  },

  mounted: function () {
    const div = document.querySelector(".header-menu-toggle");

    document.addEventListener("click", (e) => {
      const withinBoundaries = e.composedPath().includes(div);
      if (!withinBoundaries) {
        this.isActiveMenu = false;
      }
    });
  },
};
console.log(import.meta.env.VITE_API_SERVER)
</script>
<template>
  <header class="bg-blue-600 py-4">
    <div class="container mx-auto px-4">
      <div class="header__inner grid-cols-2 grid items-center">
        <div class="text-cyan-50">
          <div class="header__logo inline  font-sfiu font-bold text-2xl">DmitriyKryukov</div>
        </div>
        <div class="header__menu justify-self-end">
          <svg
            @click.stop="isActiveMenu = !isActiveMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-cyan-50 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          <div
            class="header-menu-toggle z-50 shadow-sm invisible py-6 fixed w-[calc(100vw-142px)]  h-[100vh] translate-x-[100%] top-0 right-0 bg-white text-black transition ease-in delay-250 max-[380px]:w-[100vw]"
            :class="{ 'header-menu-toggle_active': isActiveMenu }"
            @click="isActiveMenu != isActiveMenu"
          >
            <ul class="header__list  text-sm px-4 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute right-2 top-2 hover:stroke-blue-700 cursor-pointer"
                @click="isActiveMenu = false"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <li class="mb-3" v-for="item in headerMenu" :key="item">
                <a :href="item.href">{{ item.text }}</a>
              </li>
              <ul class="header__contacts font-normal text-sm ">
                <li class="mb-3"> 
                  <a class="d-flex" href="tel:+7(900)4628615">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 mr-1 stroke-blue-500 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                    <span>+79004628615</span></a>
                </li>
                <li class="">
                 

                  <a href="mailto:dimjson5430@gmail.com" >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 mr-1 stroke-blue-500  inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                    dimjson5430@gmail.com</a
                  >
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
