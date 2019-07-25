<template>
  <div class="profile">
    <div class="content">
<ul>
  <li v-for="(text, index) in texts" :key='index'>{{text}}</li>
</ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      texts: ['Name: Jun', 'Age: 30', 'Prefecture: Kumamoto, Japan', 'Like:Video Games, Movies, Books... and more']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.content {
  background-color: #353535;
  display: inline-block;
  margin: 10px;
  width: 90%;
  border-radius:5px;
}
ul{
  padding: 0 5%;
}
li {
  width: 100%;
  display: inline-block;
  text-align: left;
  color:lime;
  font-size:24px;
  font-weight: bold;
}

</style>
