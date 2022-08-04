<template>
  <section id="home" >
    <div class="container">
      <h1 class="first-row">Hey what's up?</h1>
      <h1 class="last-row">I'm Stefano.</h1>
      <p class="subtitle">
        <span>
          Full Stack Web Developer. 
        </span>
        <span>
          Welcome to my Portfolio!
        </span>
      </p>
    </div>
    <img src="../assets/divider.svg" alt="page-down" class="arrow-down">
  </section>
</template>

<script>
export default {
    name: 'HomeComponent'
}
</script>

<style  scoped lang="scss">

#home{
  // // home variables
  --bg-home: #CFFFE5;
  --typewriterSpeedTop: 4s;
  --typewriterCharactersTop: 14;
  --typewriterSpeedBottom: 3s;
  --typewriterCharactersBottom: 12;

  height: max(100vh, 530px);
  width: 100%;
  background: var(--bg-home);
  display: flex;
  align-items: center;
  position: relative;
  .container{
    padding-left: 3rem;
  }
  h1 {
    // font-size: 5.5rem;
    font-size: clamp(3rem, 3vw + 3.5rem, 5.5rem);
    font-family: "PT Mono", monospace;
    position: relative;
    width: max-content;
    // margin-bottom: 1em;
  }

  h1::before,
  h1::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .first-row::before {
    background: var(--bg-home);
    animation: typewriter var(--typewriterSpeedTop) 
                steps(var(--typewriterCharactersTop)) 
                // delay
                1s forwards;
  }

  .first-row::after {
    width: 0.125em;
    background: transparent;
    animation: typewriter var(--typewriterSpeedTop)  
                  steps(var(--typewriterCharactersTop)) 
                  // delay
                  1s,
              blink 750ms steps(var(--typewriterCharactersTop)) 
                  // how many times?
                  6;
  }

  .last-row::before {
    background: var(--bg-home);
    animation: typewriter var(--typewriterSpeedBottom) 
                  steps(var(--typewriterCharactersBottom)) 
                  // delay
                  calc(var(--typewriterSpeedTop) + 1.5s) forwards;
  }

  .last-row::after {
    width: 0.125em;
    background: transparent;
    animation: typewriter var(--typewriterSpeedBottom)  
                  steps(var(--typewriterCharactersBottom)) 
                  calc(var(--typewriterSpeedTop) + 1.5s) forwards,
              blink 750ms steps(var(--typewriterCharactersBottom)) 
                  // delay
                  calc(var(--typewriterSpeedTop) + 1.5s) 
                  // how many times?
                  infinite;
  }

  .subtitle {
    margin-top: 2rem;
    color: rgba(#000 , 0.7);
    font-size: clamp(1rem, 3vw + 1rem, 3rem);
    text-align: left;
    display: flex;
    flex-direction: column;
    opacity: 0;
    // transform: translateY(0.5em);
    animation: fadeInUp 2s ease calc(var(--typewriterSpeedTop) + var(--typewriterSpeedBottom) + 2s) forwards;
  }

  .arrow-down{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 3rem;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: black;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      // transform: translateY(0);
    }
  }
}

@media screen and (max-width:912px) {
  #home{
    h1{
      font-size: 4rem;
    }
    .subtitle{
      font-size: 2.1rem;
    }
  }
}

@media screen and (max-width:700px) {
  #home{
    h1{
      font-size: 3rem;
    }
    .subtitle{
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width:540px) {
  #home{
    h1{
      font-size: 2.5rem;
    }
    .subtitle{
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width:472px) {
  #home{
    h1{
      font-size: 2rem;
    }
    .subtitle{
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width:400px) {
  #home{
    h1{
      font-size: 1.7rem;
    }
    .subtitle{
      font-size: 1rem;
    }
  }
}

</style>