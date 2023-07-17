<script>
import { email, required,helpers} from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { sendRequestForm } from '../api'
export default {
  setup: () => ({ v$: useVuelidate() }),
  data(){
    return{
      form: {
      name: null,
      email: null,
      message:null
    }
    }
  },
 
  validations() {
    return{
      form: {
      name:{ required:helpers.withMessage('*Обязательное поле*', required)},
      email:{required:helpers.withMessage('*Обязательное поле*', required),email:helpers.withMessage('*Некорректный email*', email)},
      message:{required:helpers.withMessage('*Обязательное поле*', required)}
    }
  }
  },
  methods:{
   async submitForm(){
      const result = await this.v$.$validate()
      if (result) {
       await sendRequestForm(this.form.name,this.form.email,this.form.message).data;
      }
    }
  }
}
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
        <form @submit.prevent="submitForm()" class="form grid grid-rows-[repeat(3,auto)]  p-4 gap-y-4 " method="post" action="/">
            <div class="section-form-input-wrap bg-white h-[48px] relative">
              <div class="input-errors absolute text-[12px] left-[12px] top-[0px]" >
                <div v-for="error of v$.form.name.$errors" :key="error.$uid" class="error-msg text-red-500">{{ error.$message }}</div>
              </div>
              <input class="w-full h-full  rounded text-sm text-black bg-[transparent] " v-model="form.name" type="text" name="name" placeholder="Имя">   
            </div>

            <div class="section-form-input-wrap bg-white h-[48px] relative">
              <div class="input-errors absolute text-[12px] left-[12px] top-[0px] flex gap-3" >
                <div v-for="error of v$.form.email.$errors" :key="error.$uid" class="error-msg text-red-500">{{ error.$message }}</div>
              </div>
               <input class="w-full h-full rounded text-sm text-black bg-[transparent]" v-model="form.email" type="text" name="email" placeholder="Email">
             </div>

            <div class="section-form-textarea  bg-white relative"> 
              <div  class="input-errors  absolute text-[12px] left-[12px] top-[0px]" >
                <div v-for="error of v$.form.message.$errors" :key="error.$uid" class="error-msg text-red-500">{{ error.$message }}</div>
              </div>
              <textarea  rows="5" class="w-full  pt-[17px] rounded text-sm text-black bg-[transparent]" v-model="form.message" name="message" placeholder="Сообщение"></textarea> 
             </div>
            <button class="bg-blue-700 p-2 text-sm rounded-sm uppercase font-semibold w-[max-content] hover:bg-blue-500 ease-in duration-150">Написать</button>
        </form>
    </div>
    </div>
  
   
  </section>
  
</template>
<style scoped>
</style>
