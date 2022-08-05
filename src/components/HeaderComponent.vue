<template>
  <header>
    <div class="container flex-row">
      <div class="logo flex-row">
        <a href="" class="flex-row" @click="toggleMenu = false">
          <img src="../assets/my-logo.svg" alt="logo" class="w-100">
        </a>
      </div>
      <nav>
        <div class="menu">
          <i @click="toggleMenu = !toggleMenu" :class="toggleMenu ? 'rotate-45' : ''" class="fa-solid fa-bars"></i>
        </div>
        <div v-if="windowWidth > 620" class="links">
          <ul>

            <li>
              <a href="https://github.com/stefano472" target="_blank">GITHUB</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/stefano-piotti-950322237/" target="_blank">LINKEDIN</a>
            </li>
            <li>
              <a href="mailto:stefanopiotti472@gmail.com" >EMAIL</a>
            </li>
            
          </ul>
        </div>
        <div v-else :class="toggleMenu? 'opacity-1' : '' " class="links opacity-0">
          <ul>

            <li>
              <a href="https://github.com/stefano472" target="_blank">GITHUB</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/stefano-piotti-950322237/" target="_blank">LINKEDIN</a>
            </li>
            <li>
              <a href="mailto:stefanopiotti472@gmail.com" >EMAIL</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    <div class="menu-extended" :class="toggleMenu ? 'top-0' : ''" >
      <div class="container">
        <a href="#about" @click="toggleMenu = false">&lt; About me /&gt;</a>
        <a href="#project" @click="toggleMenu = false">&lt; Projects /&gt;</a>
      </div>
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
    html.no-touch &:hover{
      opacity: 0.6;
      transform: rotate(45deg);
    }
    // &:focus,
    // &:active{
    //   opacity: 1;
    //   transform: rotate(0);
    // }
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
      padding-left: 3rem;
      width: min((100% - 3rem), 1270px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    a{
      // font-size: 7rem;
      font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
      &:first-child{
        margin-bottom: 2rem;
      }
      &:hover{
        opacity: 0.6;
      }
    }
  }
  .links{
    transition: all 0.4s ease;
    // width: 100%;
    position: fixed;
    bottom: 0;
    // left: 0;
    margin-left: 9px;
    ul{
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      &::after{
        content: "";
        display: block;
        width: 2px;
        height: 90px;
        margin: 0px auto;
        background-color: #2c3e50;
      }
      a{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 0.9rem;
        font-weight: 700;
        transition: all .3s ease;
        html.no-touch &:hover{
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
  .opacity-0{
    opacity: 0;
    transform: translateY(-100px);
  }
  .opacity-1{
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width:700px ) {
  header{
    .container{
      .links{
        ul::after{
          height: 40px;
        }
      }
    }
    .menu-extended{
      a{
        font-size: 4rem;
      }
    }
  }
}

@media screen and (max-width:620px ) {
  header{
    background: #cfffe5;
    box-shadow: 0 1px 6px 0px #9ac1ac;
    .container{
      padding: 1rem 0;
    }
    .menu-extended{
      font-size: 3.5rem;
      .container{
        padding-left: 0;
      }
    }
  }
}

@media screen and (max-width:472px ) {
  header{
    .menu-extended{
      a{
        font-size: 3rem;
      }
    }
  }
}

@media screen and (max-width:400px ) {
  header{
    .menu-extended{
      a{
        font-size: 2.8rem;
      }
    }
  }
}
</style>