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
      console.log(withinBoundaries)

      if (!withinBoundaries) {
        this.isActiveMenu=false
      }
    });
 
  },
  created:function(){
     
  }
 
};
</script>
<template>
  <header class="bg-blue-600 py-4">
    <div class="container px-4">
      <div class="header__inner grid-cols-2 grid items-center">
        <div class="text-cyan-50">
          <div class="header__logo font-oswald text-sm">DmitriyKryukov2</div>
        </div>
        <div class="header__menu justify-self-end">
          <svg
            @click.stop="isActiveMenu = !isActiveMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-cyan-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          <div
            class="header-menu-toggle shadow-sm invisible py-4 fixed w-[50vw] h-[100vh] translate-x-[100%] top-0 right-0 bg-white text-black transition ease-in delay-250"
            :class="{ 'header-menu-toggle_active': isActiveMenu }"
            @click="isActiveMenu != isActiveMenu"
          >
            <ul class="header__list font-raleway text-sm px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute right-0.5 top-0.5 hover:stroke-blue-700"
                @click="isActiveMenu = false"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <li class="mb-1" v-for="item in headerMenu" :key="item">
                <a :href="item.href">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
