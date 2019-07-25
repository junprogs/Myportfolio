<template>
  <div class="works">
    <div class="content" v-for="(work, index) in works" :key='index'>
      <h3> {{ work.name }} </h3>
      <p> {{ work.text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works: [
        {name: 'ポートフォリオサイト',
          text: 'このサイトです。余計な機能は入れずに、シンプルなSPAとしました。使用技術はHTML5 + CSS3 + Sass + JavaScript(ES6) + Vue.js + Vue Router + GitHub + Netlifyです。'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.works {
  text-align: center;
}

.content {
  background-color: #353535;
  display: inline-block;
  margin: 10px;
  width: 90%;
  border-radius:5px;
}

h3 {
  color: lime;
  font-weight: bold;
  font-size:20px;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
  color:lime;
  font-weight: bold;
  font-size:18px;
}

</style>
