<template>
  <div class="form-layout">
      <div class="form-content">
          <h1>Mis Datos</h1>
          <p>Revisa los datos completa oquellos perdinentes antes de continour con el proceso</p>
          <form @submit.prevent="handleSubmit">
            <label for="first-name">Nambre</label>
            <input type="text" id="first-name" v-model="firstName" required>
            <label for="last-name">Apelldos</label>
            <input type="text" id="last-name" v-model="lastName" required>
            <button type="submit">Continuar<i class="far fa-arrow-alt-circle-right fa-lg"></i></button>
          </form>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   setup(props,{emit}){

       const firstName = ref('');
       const lastName = ref('');
             
       const handleSubmit = () => {
          //pass method to parent component after we submitted the form
          emit('fetch'); 
          firstName.value = '';
          lastName.value = '';
       }
       return{firstName,lastName,handleSubmit}
   }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
.form-layout{
    @include layoutStyle;
    padding: 65px 200px;
    .form-content{
        width: 500px;
        h1{
            text-align: center;
        }
        p{
            text-align: center;
            margin-bottom: 60px;
        }
        form{
            display: flex;
            flex-direction: column;
            input{
                height: 45px;
                margin-top: 5px;
                margin-bottom: 15px;
                outline: none;
                border: 2px solid rgb(231, 231, 231);
                font-size: 20px;
                text-indent: 15px;
                &:focus{
                   border: 2px solid $blue-color;
                }
            }
            button{
                background-color: $blue-color;
                color: $white-color;
                margin-top: 20px;
                margin-left: auto;
                @include buttonStyle;
            }
        }
    }
}
@media(max-width: 768px){
    .form-layout{
        padding: 65px 75px;
        .form-content{
            
            h1{
               font-size: 25px;
            }
            p{
               font-size: 14px;
            }
            form{
               label{
                   font-size: 16px;
               }
               input{
                   font-size: 16px;
               }
               button{
                   margin: 20px auto;
                   font-size: 14px;
                   width: 120px;
               } 
            }
        }
    }
}
</style>