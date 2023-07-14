<script>
</script>
<template>
  <section class="section-form text-white">
    <div class="bg-blue-700">
      <div class="container mx-auto">
        <div class="p-4">
          <span class="block font-fair font-bold text-xl mb-0.5"
            >Напиши мне
          </span>
          <p>Отвечу вам в ближайшее время!</p>
        </div>
      </div>
    </div>
    <div class="section-form-wrapper ">
        <div class="container mx-auto">
        <form class="form grid grid-rows-[repeat(3,auto)]  p-4 gap-y-4 " method="post" action="/">
            <div class="section-form-input-wrap bg-white h-[38px] "><input class="w-full h-full rounded text-sm text-black bg-[transparent]" type="text" name="name" placeholder="Имя"></div>
            <div class="section-form-input-wrap bg-white h-[38px] "> <input class="w-full h-full rounded text-sm text-black bg-[transparent]" type="text" name="email" placeholder="Email"></div>
            <div class="section-form-textarea  bg-white"> <textarea  rows="5" class="w-full  rounded text-sm text-black bg-[transparent]" name="message" placeholder="Сообщение"></textarea>  </div>
            <button class="bg-blue-700 p-2 text-sm rounded-sm uppercase font-semibold w-[max-content] hover:bg-blue-500 ease-in duration-150">Написать</button>
        </form>
    </div>
    </div>
  </section>
</template>
<style scoped>
</style>
