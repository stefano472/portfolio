<template>
  <div id="app">

    <HeaderComponent/>
    <HomeComponent/>
    <AboutComponent/>
    <!-- <ProjectsComponent/> -->

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
// import ProjectsComponent from './components/ProjectsComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    AboutComponent
    // ProjectsComponent,
  }
}
</script>

<style lang="scss">
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

// // // some global utilities

ul {
    list-style: none
}

a{
  color: inherit;
  text-decoration: none;
}

.container {
    width: min((100% - 3rem), 1300px);
    margin-inline: auto;
    padding: 1.25rem 0;
}

.flex-row {
    display: flex;
    align-items: center;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.w-100{
  width: 100%;
}

#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
