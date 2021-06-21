<template>
  <div class="home">
      <div class="layout">
         <div v-if="step === 1" class="layout-content">
           <ProcessOne/>
           <InputForm @fetch="fetchData"/>
         </div>
         <div v-if="step === 2" class="layout-content">
           <ProcessTwo/>
           <Payment @previous="previousPage" @next="nextPage"/>
         </div>
         <div v-if="step === 3" class="layout-content">
           <ProcessThree/>
           <Success :title="title" :text="text" :image="image"/>
         </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import InputForm from '../components/InputForm.vue';
import Payment from '../components/Payment.vue';
import Success from '../components/Success.vue';
import ProcessOne from '../components/ProcessOne.vue';
import ProcessTwo from '../components/ProcessTwo.vue';
import ProcessThree from '../components/ProcessThree.vue';

export default {
  name: 'Checkout',
  components: {InputForm,Payment,Success,ProcessOne,ProcessTwo,ProcessThree},
  setup(){
     //set ref step to 1 in default
     const step = ref(1);
     const title = ref('');
     const text = ref('');
     const image = ref('');
     

     //To fetch data from api after you submitted the form
     const fetchData = async () => {
         try{
              let data = await fetch('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09')
              if(!data.ok){
                  throw Error('Order failed');
              }
              let result = await data.json();

              title.value = result.title;
              text.value = result.text;
              image.value = result.img;
              
           }catch(err){
                console.log(err.message);
           }
           //switch to second step
           step.value = 2;
     }

     //switch to first step
     const previousPage = () => {
        step.value = 1;
     }
     //switch to third step
     const nextPage = () => {
        step.value = 3;
     }

     

     return {title,text,image,step,fetchData,previousPage,nextPage}
  }
}
</script>

<style lang="scss">
.layout{
  background-color: #f5f5f5;
  padding: 65px 0;
  .layout-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
   

</style>
