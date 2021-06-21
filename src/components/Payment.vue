<template>
  <div class="payment-layout">
      <div class="payment-content">
          <div class="payment-title">
              <h1>Pago del producto</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus exercitationem</p>
          </div>
          <div class="payment-method">
              <i class="fas fa-credit-card fa-4x"></i>
              <h2>Tarjeta de credito</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit unde! Quaerat, labore qui. Fugiat quasi et expedita, vero sint earum sed dolor magnam eum.</p>
              <div class="credit-img">
                  <img src="../assets/visa.png" alt="visa">
                  <img src="../assets/master.png" alt="master-card">
              </div>
          </div>
          <div class="btn">
              <button @click="handleAnterior"><i class="far fa-arrow-alt-circle-left fa-lg"></i>Anterior</button>
              <button @click="handlePagar">Pagar<i class="far fa-arrow-alt-circle-right fa-lg"></i></button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
   setup(props,{emit}){
       //pass method of switching component
       const handleAnterior = () => {
          emit('previous');
       }
       
       const handlePagar = () => {
           emit('next')
       }
       return{handleAnterior,handlePagar}
   }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.payment-layout{
    @include layoutStyle;
    padding: 40px 200px 60px 200px;
    .payment-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 700px;
        .payment-title{
            width: 100%;
            h1{
              margin: 0;
              text-align: center;
            }
            p{
                text-align: center;
                margin: 10px 0 15px 0;
            }
        }
        .payment-method{
            border: 2px solid #e9e8e9;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 500px;
            padding: 20px 40px;
            .fa-credit-card{
                color: $red-color;
            }
            h2{
                margin-bottom: 0px;
            }
            p{
                text-align: center;
            }
            .credit-img{
               display: flex;
               align-items: center;
               img{
                   width: 60px;
                   margin: 0 10px;
               }
            }
        }
        .btn{
            display: flex;
            margin-top: 30px;
            width: 500px;
            justify-content: space-between;
            button:first-of-type{
              background-color: $white-color;
              color: $blue-color;
              @include buttonStyle;
            }
            button:last-of-type{
              background-color: $blue-color;
              color: $white-color;
              @include buttonStyle;
            }
        }
    }
}

@media(max-width: 768px){
    .payment-layout{
        padding: 65px 140px;
        .payment-content{
            .payment-title{
              width: 85%;
              h1{
                font-size: 25px;
              }
              p{
                font-size: 14px;
              }
            }
            .payment-method{
              width: 85%;
              padding: 5px 0;
              h2{
                font-size: 25px;
              }
              p{
                font-size: 14px;
              }
            }
            .btn{
               width: 85%;
               button:first-of-type,button:last-of-type{
                   font-size: 14px;
                   width: 140px;
               }
            }
        }
    }
}
</style>