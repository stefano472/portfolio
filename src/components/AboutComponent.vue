<template>
  <section id="about">
    <img src="../assets/divider.svg" alt="new-page" class="arrow-up">

    <div class="container flex-row">
      <div v-scrollanimation class="left-side">

        <h1>Stefano.</h1>
        <div class="profile">
          <h3>ABOUT ME</h3>
          <p>
            <i class="quote fa-solid fa-quote-left"></i>
            I'm a full-stack Web Developer, based in Brescia, Italy. 
            Mainly focused on giving to the customer the best FrontEnd experience.
            I've always been a curious person who tries to improve himself.
            I would call myself a dreamer 💭💭 a passionate globetrotter 🌍 who loves good Food, Sports, Computer Science, Finance and Blockchain.
          </p>
        </div>
        <div class="skill">
          <h3>SKILLS</h3>
          <ul>
            <li>
              <img src="../assets/skills/html.png" alt="html_logo" class="w-100">
              <div class="skill-overlay">
                Html
              </div>
            </li>
            <li>
              <img src="../assets/skills/css.png" alt="css_logo" class="w-100">
              <div class="skill-overlay">
                Css
              </div>
            </li>
            <li>
              <img src="../assets/skills/bootstrap.png" alt="bootstrap_logo" class="w-100">
              <div class="skill-overlay boot">
                Bootstrap
              </div>
            </li>
            <li>
              <img src="../assets/skills/sass.png" alt="sass_logo" class="w-100">
              <div class="skill-overlay">
                Sass
              </div>
            </li>
            <li>
              <img src="../assets/skills/javascript.png" alt="javascript_logo" class="w-100">
              <div class="skill-overlay">
                Js
              </div>
            </li>
            <li>
              <img src="../assets/skills/vuejs.png" alt="vuejs_logo" class="w-100">
              <div class="skill-overlay">
                VueJs
              </div>
            </li>
            <li>
              <img src="../assets/skills/php.png" alt="php_logo" class="w-100">
              <div class="skill-overlay">
                Php
              </div>
            </li>
            <li>
              <img src="../assets/skills/laravel.png" alt="laravel_logo" class="w-100">
              <div class="skill-overlay">
                Laravel
              </div>
            </li>
            <li>
              <img src="../assets/skills/mysql.png" alt="mysql_logo" class="w-100">
              <div class="skill-overlay">
                MySQL
              </div>
            </li>
            <li>
              <img src="../assets/skills/github.png" alt="github_logo" class="w-100">
              <div class="skill-overlay">
                GitHub
              </div>
            </li>
          </ul>
        </div>
        <div class="link">
          <h3>CONTACTS</h3>
          <ul>
            <li><i class="fa-solid fa-link"></i> MAIL ~ <a href="mailto:stefanopiotti472@gmail.com">stefanopiotti472@gmail.com</a></li>
            <li><i class="fa-solid fa-link"></i> PHONE ~ <a href="tel:3343650054">+39 334 3650054</a></li>
            <li><i class="fa-solid fa-link"></i> LINKEDIN ~ <a href="https://www.linkedin.com/in/stefano-piotti-950322237/" target="_blank">linkedin.com/in/stefano-piotti</a></li>
            <li><i class="fa-solid fa-link"></i> GITHUB ~ <a href="https://github.com/stefano472" target="_blank">github.com/stefano472</a></li>
          </ul>
        </div>

      </div>

      <div v-scrollanimation class="right-side">
        <img src="../assets/photo2.jpg" alt="cover-img">
      </div>

      <a href="https://www.canva.com/design/DAFG-dtseVk/ODhIDeCB_rpIbP9akt8epw/view?utm_content=DAFG-dtseVk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" class="resume" target="_blank">
        Watch my resume 
        <i class="fa-solid fa-rocket"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AboutComponent'
}
</script>

<style  scoped lang="scss">

#about{
  position: relative;
  display: flex;
  width: 100%;
  // height: 100vh;
  height: max(100vh, 58rem);
  .arrow-up{
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    // margin-bottom: 3rem;
  }
  .flex-row{
    // gap: 1rem;
    position: relative;
    // padding: 1.75rem;
  }
  .left-side{
    margin-left: 3rem;
    width: 50%;
    h1{
      font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
      font-family: "PT Mono", monospace;
      margin-bottom: 1rem;
    }
    h3{
      font-size: clamp(1rem, 3vw + 1rem, 1.8rem);
      margin-bottom: 1rem;
    }
    .profile{
      // display: flex;
      // gap: 1rem;
      p{
        margin-left: 3rem;
        margin-bottom: 1.5rem;
        line-height: 1.5;
        position: relative;
        .quote{
          font-size: 2rem;
          color: #eecf8a;
          position: absolute;
          top: -0.6rem;
          left: -2rem;
        }
      }
    }
    .skill{
      // display: flex;
      // gap: 1rem;
      ul{
        display: flex;
        flex-wrap: wrap;
        column-gap: 0.5rem;
        margin-bottom: 1.5rem;
        margin-left: 3rem;
        li{
          height: 55px;
          width: 55px;
          display: grid;
          place-items: center;
          position: relative;
          &:hover{
            .skill-overlay{
              opacity: 0.9;
            }
            img{
              filter: grayscale(100%);
            }
          }
          .skill-overlay{
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: grid;
            place-items: center;
            font-size: 0.9rem;
            transition: all 0.4s;
          }
          .boot{
            margin-left: -4px;
          }
          img{
            // filter: grayscale(50%);
            height: 40px;
            width: 40px;
          }
        }
      }
    }
    .link{
      // display: flex;
      // gap: 1rem;
      margin-bottom: 4rem;
      ul{
        margin-left: 3rem;
        li{
          line-height: 2;
          a{
            // text-decoration: underline;
            padding-bottom: 0.1rem;
            // box-shadow: 0 1px #2c3e50;
            transition: all 0.3s;
            &:hover {
              color: #e8b23e;
              box-shadow: 0 1px #e8b23e;
            }
          }
        }
      }
    }
  }
  .right-side{
    width: 50%;
    margin: 0 3rem 0 0.5rem;
    display: flex;
    justify-content: center;
    img{
      // filter: grayscale(50%) sepia(50%);
      // filter: saturate(50%);
      filter: sepia(50%);
      border-radius: 5px;
      height: 600px;
      // margin-right: 2rem;
    }
  }
  .resume{
    // z-index: 5;
    cursor: pointer;
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    padding: 13px 85px 13px 30px;
    text-transform: uppercase;
    background: white;
    border: 2px solid #2c3e50;
    border-radius: 2px;
    i{
      // border-radius: 5px;
      font-size: 1.3rem;
      height: 100%;
      background: white;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      border-left: 2px solid #2c3e50;
      // box-shadow: -2px 0 #2c3e50;
      display: flex;
      justify-content: center;
      align-items: center;
      // transition: all .3s ease;
      transition: all 0.3s;
    }
    &:hover{
      i{
        background: #eecf8a;
      }
    }
  }
}

@media screen and(max-width:1280px) {
  h1 {
    margin: 3.5rem 0 1rem;
  }
}

@media screen and(max-width:992px) {
  #about {
    height: fit-content;
    .flex-row{
      flex-direction: column;
      align-items: flex-start;
      .left-side{
        width: auto;
        margin: 0 4rem;
        h1{
          margin: 1rem 0;
        }
        .link{
          margin-bottom: 5rem;
        }
      }
      .right-side {
        padding: 0 4rem;
        width: auto;
        margin: 3.5rem 0 0;
        order: -1;
      }
      .resume{
        left: 4rem;
      }
    }
  }
}

@media screen and (max-width:620px) {
  #about{
    .flex-row{
      .left-side{
        margin: 0;
        h1{
          font-size: 4rem;
        }
        h3{
          font-size: 1.5rem;
        }
        p{
          font-size: 0.9rem;
          margin-left: 0;
          .quote{
            opacity: 0;
          }
        }
        ul{
          margin-left: 0;
          li{
            font-size: 0.9rem;
          }
        }
      }
      .right-side{
        padding: 0;
        img{
          height: 400px;
        }
      }
      .resume{
        left: 0;
        font-size: 0.8rem;
        padding: 13px 80px 13px 25px;
        i{
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media screen and (max-width:480px) {
  #about{
    .flex-row{
      .left-side{
        h1{
          font-size: 3rem;
        }
        h3{
          font-size: 1.2rem;
        }
        p{
          font-size: 0.8rem;
          margin-left: 0;
          .quote{
            opacity: 0;
          }
        }
        ul{
          margin-left: 0;
          li{
            font-size: 0.8rem;
          }
        }
      }
      .right-side{
        img{
          height: 300px;
        }
      }
    }
  }
}
</style>