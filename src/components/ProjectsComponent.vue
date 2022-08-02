<template>
  <section id="project">
    <img src="../assets/divider.svg" alt="new-page" class="arrow-up">

    <div v-scrollanimation class="container flex-column">
      <h1>Projects.</h1>
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

      <ul class="proj flex-row">
        <li class="card">
          <div class="card-img flex-column">
            <img src="../assets/boolivery.png" alt="boolivery-home">
            <!-- <div class="discover">
              Discover
              <i class="fa-solid fa-rocket"></i>
            </div> -->
          </div>
          <div class="card-description">
            <h3>Boolivery</h3>
            <h5>eCommerce</h5>
            <p>
              Food Delivery Website.
              Built front-end side with vue.js and sass, while on the backend side with PHP (laravel framework). Emails management with mailtrap.io and fictional payments with braintree sandbox.
              A registered user can modify their data with the communication with a relational database (mySQL)
            </p>
          </div>
        </li>

      </ul>
      <a href="https://github.com/stefano472" class="more-proj" target="_blank">
        more on GitHub 
        <i class="fa-brands fa-github"></i>
      </a>
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
    margin-bottom: 3rem;
  }
  .proj{
    gap: 1rem;
    flex-wrap: wrap;
    .card{
      width: calc(50% - 0.5rem);
      position: relative;
      display: flex;
      align-items: center;
      padding: 1rem;
      background: #cfffe5;
      img{
        width: 20rem;
        border-radius: 5px;
        transform: rotate(350deg);
      }
      .card-description{
        z-index: 1;
        padding: 0.5rem;
        border-radius: 5px;
        background: rgba($color: #cfffe5, $alpha: 0.7);
        margin-left: -1rem;
        h3{
          font-size: clamp(1rem, 3vw + 1rem, 1.8rem);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        h5{
          font-size: 1.2rem;
          color: white;
          margin-bottom: 0.5rem;
        }
        p{
          line-height: 1.5;
        }
      }
      .discover{
        width: fit-content;
        position: relative;
        // bottom: 3rem;
        // left: 3rem;
        padding: 13px 85px 13px 30px;
        text-transform: uppercase;
        background: white;
        border: 2px solid #2c3e50;
        border-radius: 2px;
        i{
          // border-radius: 5px;
          font-size: 1.2rem;
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
  }
  .more-proj{
    // z-index: 5;
    cursor: pointer;
    width: fit-content;
    position: relative;
    // bottom: 3rem;
    // left: 3rem;
    margin-top: 3rem;
    padding: 13px 85px 13px 30px;
    text-transform: uppercase;
    background: white;
    border: 2px solid #2c3e50;
    border-radius: 2px;
    i{
      // border-radius: 5px;
      font-size: 1.2rem;
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
</style>