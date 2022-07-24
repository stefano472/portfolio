<template>
  <section id="about">
    <div class="container flex-row">
      <div class="left-side">

        <h1>Stefano.</h1>
        <div class="profile">
          <h3>ABOUT ME</h3>
          <p>
            ` I'm a full-stack Web Developer, based in Brescia, Italy. 
            Mainly focused on giving to the customer the best FrontEnd experience.
            I've always been a curious person who tries to improve himself.
            I would call myself a dreamer 💭💭 a passionate globetrotter 🌍 who loves good Food, Sports, Computer Science, Finance and Blockchain. `
          </p>
        </div>
        <div class="skill">
          <h3>SKILLS</h3>
          <ul>
            <li>
              <img src="../assets/skills/html.png" alt="html_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/css.png" alt="css_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/bootstrap.png" alt="bootstrap_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/sass.png" alt="sass_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/javascript.png" alt="javascript_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/vuejs.png" alt="vuejs_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/php.png" alt="php_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/laravel.png" alt="laravel_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/mysql.png" alt="mysql_logo" class="w-100">
            </li>
            <li>
              <img src="../assets/skills/github.png" alt="github_logo" class="w-100">
            </li>
          </ul>
        </div>
        <div class="link">
          <h3>CONTACTS</h3>
          <ul>
            <li>mail ~ stefanopiotti472@gmail.com</li>
            <li>phone ~ +39 334 3650054</li>
            <li>linkedin ~ linkedin.com/in/stefano-piotti-950322237</li>
            <li>github ~ github.com/stefano472</li>
          </ul>
        </div>

      </div>

      <div class="right-side">
        <img src="../assets/stef.jpg" alt="jumbo" class="w-100">
      </div>
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
  width: 100%;
  height: 100vh;
  .left-side{
    width: 40%;
    .skill{
      ul{
        display: flex;
      }
    }
  }
  .right-side{
    width: 60%;
    display: flex;
    margin: 1rem;
    img{
      object-fit: contain;
      border-radius: 5px;
    }
  }
}
</style>