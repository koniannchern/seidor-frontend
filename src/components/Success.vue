<template>
  <div class="success-layout">
      <div class="success-content">
          <img :src="imageUrl" alt="">
          <h1>{{title}}</h1>
          <p>{{text}}</p>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   //receive props from parent component and put them to the template
   props: ['title','text','image'],
   setup(props){
       
       const imageUrl = ref(require('../assets/' + props.image))

       return{imageUrl}
   }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
.success-layout{
    @include layoutStyle;
    padding: 170px 200px 170px 200px;
    .success-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 650px;
        h1{
            margin: 0;
        }
        p{
            text-align: center;
        }
        img{
            width: 80px;
            margin-bottom: 20px;
        }
    }
}
@media(max-width: 768px){
    .success-layout{
        padding: 65px 50px;
        .success-content{
            h1{
               font-size: 25px;
            }
            p{
               font-size: 14px;
            }
        }
    }
}
</style>