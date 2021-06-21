<template>
  <header>
      <ul class="nav">
          <li><i class="far fa-sticky-note"></i><a href="">AYUDA</a></li>
          <li><i class="far fa-user"></i><a href="">SIGN IN</a></li>
          <li><a href="">ES</a><i class="fas fa-caret-down"></i></li>
      </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
a{
    text-decoration: none;
    color: $black-color;
    margin: 0 5px;
    font-weight: bold;
}
header{
    display: flex;
    justify-content: flex-end;
    max-width: 75%;
    margin: 0 auto;
    padding: 5px 0;
    ul.nav{
        list-style: none;
        display: flex;
        li{
            margin-left: 50px;
            i{
                margin: 0 5px;
            }
        }
    }
}
@media(max-width: 768px){
    header{
        max-width: 100%;
        justify-content: center;
        ul.nav{
          li{
            margin: 0 10px;
            font-size: 14px;
            i{
                margin: 0;
            }
          }
        }
    }
    
}
</style>