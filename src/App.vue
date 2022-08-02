<template>
  <div id="app">

    <HeaderComponent/>
    <HomeComponent/>
    <AboutComponent/>
    <ProjectsComponent/>

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
    margin: 0;
    padding: 0;
}
::-webkit-scrollbar {
  width: 1rem;
}
::-webkit-scrollbar-track {
  margin-block: 0.5rem;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  border: 3px solid transparent;
  box-shadow: inset 0 0 10px 10px #e6e6e6;
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
    width: min((100% - 3rem), 1270px);
    margin-inline: auto;
    // padding: 1.25rem 0;
    padding: 3rem 0;
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

// animation on scroll
.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}
.enter{
  opacity: 1;
  transform: translateY(0px);
}

#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
