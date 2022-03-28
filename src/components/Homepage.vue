<template>
  <base-card>
    <h1>Welcome MutherFucker</h1>
    <h2>Wanna Print something?</h2>
    <img id="gif" src="/images/danceLoop.gif" alt="Funny image" />
    <router-link to="/submission"><h1>Click Here!</h1> </router-link>
  </base-card>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#gif {
  min-width: 10rem;
  min-height: 5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
