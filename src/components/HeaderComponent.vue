<template>
  <header>
    <div class="container flex-row">
      <div class="logo flex-row">
        <a href="#" class="flex-row" @click="toggleMenu = false">
          <img src="../assets/my-logo.svg" alt="logo" class="w-100">
        </a>
      </div>
      <nav>
        <div class="menu">
          <i @click="toggleMenu = !toggleMenu" :class="toggleMenu ? 'rotate-45' : ''" class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
    <div class="menu-extended" :class="toggleMenu ? 'top-0' : ''" >
      <div class="container">
        <a href="">&lt; About me /&gt;</a>
        <a href="">&lt; Projects /&gt;</a>
      </div>
    </div>
    <div class="mail-me">
      <ul class="container">
        <li>
          <a href="https://github.com/stefano472" target="_blank">GITHUB</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stefano-piotti-950322237/" target="_blank">LINKEDIN</a>
        </li>
        <li>
          <a href="mailto:stefanopiotti472@gmail.com" >EMAIL</a>
        </li>   
        <!-- <li>
          <a href="mailto:stefanopiotti472@gmail.com" >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>    -->
      </ul>
    </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return {
        toggleMenu: false,
      }
    }
}
</script>

<style  scoped lang="scss">
header{
  .container{
    width: min((100% - 3rem), 1570px);
    margin-inline: auto;
    padding: 3rem 0;
  }
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  &>div{
    justify-content: space-between;
  }
  .logo{
    width: 1.5rem;
    cursor: pointer;
    &:hover{
      opacity: 0.6;
    }
  }
  i{
    font-size: 1.75rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
      opacity: 0.6;
      transform: rotate(45deg);
    }
  }
  .menu-extended{
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    // padding: 60px;
    // padding-left: 120px;
    background: #EECF8A;
    display: flex;
    // flex-flow: column;
    // align-items: flex-start;
    // justify-content: center;
    z-index: -1;
    transition: all .3s ease;
    .container{
      width: min((100% - 3rem), 1270px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    a{
      font-size: 7rem;
      &:first-child{
        margin-bottom: 2rem;
      }
      &:hover{
        opacity: 0.6;
      }
    }
  }
  .mail-me{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .container{
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      a{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 0.9rem;
        font-weight: 700;
        transition: all .3s ease;
        &:hover{
          opacity: 0.6;
          transform: rotate(225deg);
        }
      }
    }
  }
  .top-0 {
    top: 0;
  }
  .rotate-45{
    transform: rotate(45deg);
  }
}

</style>