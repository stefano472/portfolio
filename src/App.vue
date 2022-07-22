<template>
  <div id="app">

    <HeaderComponent/>
    <HomeComponent/>
    <!-- <ProjectsComponent/>
    <AboutComponent/> -->

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
// import ProjectsComponent from './components/ProjectsComponent.vue'
// import AboutComponent from './components/AboutComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    // ProjectsComponent,
    // AboutComponent
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
