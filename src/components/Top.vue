<template>
  <div id="main">
    <h1>{{ msg }}<span class='cursor'>｜</span></h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: "Welcome to Jun's Portfolio"
    }
  }
}
</script>

<style scoped lang="scss">

#main{
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
  font-weight: bold;
  font-size:3em;
  width:60%;
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

.cursor {
  animation: blink 1s infinite;
  font-weight: bold;
  font-size:45px;
  height:100px;
  width: 50%;
  margin: auto;
  position: relative;
}
@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 0; }
  51% { opacity: 1; }
  100% { opacity: 1;}
}

</style>
