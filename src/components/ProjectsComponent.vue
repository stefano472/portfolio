<template>
  <section id="project">
    <img src="../assets/divider.svg" alt="new-page" class="arrow-up">

    <div class="container flex-column">
      <h1 v-scrollanimation>Projects.</h1>
      <!-- <div class="proj flex-row">

        <div class="card">
          <div class="card-img flex-column">
            <img src="../assets/boolivery.png" alt="boolivery-home"> -->
            <!-- <div class="discover">
              Discover
              <i class="fa-solid fa-rocket"></i>
            </div> -->
          <!-- </div>
          <div class="card-description">
            <h3>Boolivery</h3>
            <h5>eCommerce</h5>
            <p>
              Food Delivery Website.
              Built front-end side with vue.js and sass, while on the backend side with PHP (laravel framework). Emails management with mailtrap.io and fictional payments with braintree sandbox.
              A registered user can modify their data with the communication with a relational database (mySQL)
            </p>
          </div>
        </div>

      </div> -->

      <ul class="proj flex-column container">
        <li v-scrollanimation class="card">
          <div class="card-img">
            <img src="../assets/boolivery.png" alt="boolivery-home">
          </div>
          <div class="card-description">
            <h5>Featured Project</h5>
            <h3>Boolivery</h3>
            <h5>eCommerce</h5>
            <p>
              Food Delivery Website.
              An eCommerce built both front-end and back-end side. Payments are managed with `Braintree Sandbox`. 
              Once the order is approved, an email sending service is hosted by `Mailtrap.io`.
              A registered user can modify data of their restaurant, thanks to an easy back-office dashboard that is in communication with a relational database.
            </p>
            <ul class="flex-row">
              <li>Html</li>
              <li>Scss</li>
              <li>Vue.Js</li>
              <li>Laravel</li>
              <li>mySQL</li>
            </ul>
            <div class="link flex-row">
              <a href="https://github.com/stefano472/boolivery_project" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <!-- <a href="https://github.com/stefano472/boolivery_project" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a> -->
            </div>
          </div>
        </li>

        <li v-scrollanimation class="card">
          <div class="card-img second">
            <img src="../assets/pet-supplies.png" alt="boolivery-home">
          </div>
          <div class="card-description second">
            <h5>Featured Project</h5>
            <h3>Avada Pet Supplies</h3>
            <h5>Brochure Website</h5>
            <p>
              A simply Static website.
              Received the given instruction about how the website should look like.
              I tried to satify all the requests, paying particular attention to the final user experience.
            </p>
            <ul class="flex-row second">
              <li>Html</li>
              <li>Scss</li>
              <li>Vue.Js</li>
            </ul>
            <div class="link second flex-row">
              <a href="https://github.com/stefano472/proj-html-vuejs" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://stefano472.github.io/proj-html-vuejs/" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </li>

        <li v-scrollanimation class="card">
          <div class="card-img">
            <img src="../assets/boolzapp.png" alt="boolivery-home">
          </div>
          <div class="card-description">
            <h5>Featured Project</h5>
            <h3>Boolzapp</h3>
            <h5>webApp</h5>
            <p>
              A (not very) innovative messaging platform.
              One of my first project practicing with raw vue.js. with a full responsive interface in order to give to the final user the best experience.
            </p>
            <ul class="flex-row">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Vue.Js</li>
            </ul>
            <div class="link flex-row">
              <a href="https://github.com/stefano472/vue-boolzapp" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://stefano472.github.io/vue-boolzapp/" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </li>

      </ul>
      <a href="https://github.com/stefano472" class="more-proj" target="_blank">
        more on GitHub 
        <i class="fa-brands fa-github"></i>
      </a>
      <div class="credit">
        <p>Design and Made with ❤️ by Stefano Piotti</p>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
    name: 'ProjectsComponent'
}
</script>

<style  scoped lang="scss">
#project{
  width: 100%;
  // height: max(100vh, 58rem);
  min-height: 55rem;
  display: flex;
  position: relative;
  .arrow-up{
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    // margin-bottom: 3rem;
  }
  .container{
    padding: 3rem;
    justify-content: center;
  }
  h1{
    font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
    font-family: "PT Mono", monospace;
    margin: 4rem 0 1.5rem;
  }
  .proj{
    gap: 4rem;
    align-items: center;
    .card{
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      // width: calc(50% - 0.5rem);
      // position: relative;
      // display: flex;
      // align-items: center;
      // padding: 1rem;
      // background: #cfffe5;
      .card-img{
        grid-area: 1/8/2/2;
        // grid-area: 1/8/2/1;
        img{
          filter: sepia(30%);
          width: 100%;
          border-radius: 3px;
          &:hover{
            filter: none;
          }
        }
      }
      .card-img.second{
        grid-area: 1 / 6 / 2 / 12;
      }
      .card-description{
        text-align: right;
        // grid-column: 7/13;
        // grid-area: 1 / 1 / -1 / 7;
        grid-area: 1 / 7 / 2 / 13;
        z-index: 1;
        // padding: 0.5rem;
        // margin-left: -1rem;
        h3{
          font-size: clamp(1rem, 3vw + 1rem, 1.8rem);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        h5{
          font-family: "PT Mono", monospace;
          font-size: 1.2rem;
          color: #eecf8a;
          margin-bottom: 1rem;
        }
        p{
          box-shadow: 0 2px 4px rgba($color: #000000, $alpha: 0.2);
          border-radius: 3px;
          background: rgba($color: #eecf8a, $alpha: 0.9);
          line-height: 1.5;
          padding: 0.75rem;
          margin-bottom: 1rem;
        }
        ul{
          gap: 0.75rem;
          justify-content: end;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          li{
            font-family: "PT Mono", monospace;
          }
        }
        ul.second{
          justify-content: flex-start;
        }
      }
      .card-description.second{
        text-align: left;
        grid-area: 1/7/2/1;
      }
      .link{
        gap: 1rem;
        justify-content: flex-end;
        i{
          font-size: 1.6rem;
          cursor: pointer;
          transition: 0.2s;
          &:hover{
            color: #eecf8a;
          }
        }
      }
      .link.second{
        justify-content: flex-start;
      }
    }
  }
  .more-proj{
    // z-index: 5;
    cursor: pointer;
    width: fit-content;
    position: relative;
    // bottom: 3rem;
    // left: 3rem;
    margin-top: 1rem;
    padding: 13px 85px 13px 30px;
    text-transform: uppercase;
    background: white;
    border: 2px solid #2c3e50;
    border-radius: 2px;
    i{
      // border-radius: 5px;
      font-size: 1.6rem;
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
  .credit{
    text-align: center;
    font-family: "PT Mono", monospace;
    margin-top: 3rem;
    font-size: 0.7rem;
    font-weight: bold;
  }
}

@media screen and (max-width:1280px) {
  #project{
    .proj{
      .card{
        .card-img{
          grid-area: 1/8/2/1;
        }
        .card-img.second{
          grid-area: 1 / 6 / 2 / 13;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #project{
    .container{
      padding: 3rem 3.5rem;
    }
    .proj{
      width: 100%;
      padding: 3rem 0;
    }
  }
}

@media screen and (max-width: 800px) {
  #project{
    .proj{
      .card{
        .card-img{
          height: 100%;
          grid-area: 1/13/2/1;
          display: flex;
          opacity: 0.25;
          box-shadow: 0 10px 20px 5px #2c3e50;
          border-radius: 3px;
          img{
            filter: sepia(70%) blur(3px) brightness(0.9);
            // filter: sepia(30%) blur(3px);
            object-fit: cover;
            object-position: left;
          }
        }
        .card-img.second{
          grid-area: 1/1/2/13;
        }
        .card-description{
          text-align: start;
          grid-area: 1/1/2/13;
          padding: 2rem;
          h5{
            text-shadow: 1px 1px 8px #2c3e50;
          }
          ul{
            font-size: 0.9rem;
          }
          p{
            font-size: 0.9rem;
          }
        }
        .card-description.second{
          grid-area: 1/13/2/1;
        }
      }
    }
  }
}

@media screen and (max-width:620px) {
  #project{
    .flex-column{
      width: min(100% - 2rem, 1270px);
      h1{
        font-size: 4rem;
      }
      .more-proj{
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
  #project{
    .flex-column{
      width: min(100% - 1rem, 1270px);
      h1{
        font-size: 3rem;
      }
    }
  }
}
</style>