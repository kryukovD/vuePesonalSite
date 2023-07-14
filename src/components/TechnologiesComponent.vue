<script>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { apiUrl, getStack, getTechnologies } from "../api";
import "swiper/css";
export default {
  data() {
    return {
      apiUrl: apiUrl,
      technologies: [],
      stack: [],
      filterLabel: "Js фреймворки",
      filterItems: [],
      active: 2,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    filterTech(category) {
      this.filterItems = this.technologies.filter((item) => {
        if (item.category == category) {
          return true;
        }
      });
    },
  },
  mounted() {
    this.technologies = getTechnologies().then((technologies) => {
      this.technologies = technologies;
      this.filterTech(this.filterLabel);
    });
    this.stack = getStack().then((stack) => {
      this.stack = stack;
    });
  },
};
</script>
<template>
  <section class="section-technologies">
    <div class="container mx-auto">
    <div
      class="slider-technologies_filter grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] grid-flow-row gap-4 px-4 pb-2"
    >
      <span
        v-for="(item, i) of stack"
        :key="i"
        @click="filterTech(item.name), (active = i + 1)"
        :class="{ 'bg-orange-300': active == i + 1 }"
        class="inline-flex cursor-pointer justify-center items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-700/10"
        >{{ item.name }}</span
      >
    </div>
  </div>
    <div class="bg-blue-700">
      <div class="container mx-auto text-white">
        <div class="p-4">
          <span class="block font-sfui text-xl font-bold mb-0.5"
            >Мой стек</span
          >
          <p>Или на чем я умею писать сайты.</p>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="slider-technologies">
        <swiper
          :slides-per-view="1"
          :breakpoints="{ 320: { slidesPerView: 1 } }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(technology, key) of filterItems" :key="key">
            <div
              class="slilder-technologies__item w-[250px] aspect-[1/1] overflow-hidden mx-auto"
            >
              <img
                class="w-[100%] h-[100%] object-contain"
                :src="apiUrl + technology.srcImage"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
