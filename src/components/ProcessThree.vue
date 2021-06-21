<template>
  <div class="process">
    <div class="process-step-1">
        <span><i class="fas fa-check"></i></span>
        <p>MIS DATOS</p>
    </div>
    <span class="grey-line"></span>
    <div class="process-step-2">
        <span><i class="fas fa-check"></i></span>
        <p>PAGO</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
.process{
    display: flex;
    margin-bottom: 15px;
    .process-step-1{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
        background-color: $green-color;
        color: $white-color;
        padding: 10px 12px;
        border-radius: 50%;
        }
    }
    .grey-line{
        display: block;
        width: 120px;
        height: 1px;
        background-color: rgb(216, 215, 215);
        transform: translateX(-11px) translateY(19px);
    }
    .process-step-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
        background-color: $green-color;
        color: $white-color;
        padding: 10px 12px;
        border-radius: 50%;
        }
    }
}
@media(max-width: 768px){
    .process{
        font-size: 14px;
    }
}
</style>