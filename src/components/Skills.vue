<template>
  <div class="skills">
      <h2>Languages</h2>
    <div class="box">
      <!-- <img v-for="img in images" v-bind:src="img.url" v-bind:alt="img.alt"> -->
      <div class="content" v-for="(skill, index) in skills" :key='index'>
          <h3> {{ skill.name }} </h3>
          <p> {{ skill.text }} </p>
          <p> {{ skill.his }} </p>
          <img v-bind:src="skill.img" alt="">
      </div>
    </div>
  <hr>
  <h2>etc...</h2>
  <div class="box">
    <div class="content" v-for="(tool, index) in tools" :key='index'>
      <h3> {{ tool.name }} </h3>
      <p> {{ tool.text }} </p>
      <p> {{ tool.his }} </p>
      <img v-bind:src="tool.img" alt="">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: [
        {name: 'HTML5 & CSS3', text: 'Progate･ドットインストール等で基礎を学び、このサイトを制作しました。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/html-5.svg'},
        {name: 'JavaScript(ES6)', text: 'Progate･書籍等で学び、このサイトを制作しました。いくつか簡単なアプリも作りました。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/javascript.svg'},
        {name: 'Python3', text: '設計思想が好きです。身の回りを自動化したいです。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/python.svg'},
        {name: 'Swift', text: 'Playgroundで遊んでいるだけです。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/swift.svg'},
        {name: 'English', text: '義務教育で身につけました(?)。自主的に学習を継続中です。The Simpsonsが好きです。', his: '使用歴:17年'},
        {name: 'Japanese', text: '最も得意とする言語です。卒業論文は安部公房について書きました。', his: '使用歴:30年'}
      ],
      tools: [
        {name: 'Sass', text: '効率的なコーディングのために、積極的に取り入れるよう心掛けています。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/sass.svg'},
        {name: 'Vue.js', text: 'Udemyや書籍等で基礎を学び、このサイトを制作しました。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/vue.svg'},
        {name: 'Django', text: '他の要素との組み合わせを模索しています。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/django.svg'},
        {name: 'Firebase', text: '試しに使ってみた程度です。これから慣れていきたいです。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/firebase.svg'},
        {name: 'GitHub', text: 'チーム開発は未経験ですが、Ver.管理に使用しています。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/github-octocat.svg'},
        {name: 'Netlify', text: 'このサイトのデプロイのために初めて使用しました。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/netlify.svg'},
        {name: 'AWS', text: '試しに使った程度です。現在勉強中です。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/aws.svg'},
        {name: 'Windows', text: '幼少期よりネットを徘徊していました。', his: '使用歴:20年', img: 'https://cdn.svgporn.com/logos/microsoft-windows.svg'},
        {name: 'Mac', text: 'スタバでドヤ顔するために購入しました。', his: '使用歴:0ヶ月', img: 'https://cdn.svgporn.com/logos/macosx.svg'}
      ]
    }
  }
}

</script>

<style scoped lang="scss">

.box{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 0.8em;
  margin: 0 0 2em;
}

img{
  opacity:0.1;
  position:absolute;
  top:5%;
  left:30%;
  padding: 1%;
  width:80%;
}

@media screen and (max-width:598px){
  img {
    width:60%;
  }
}

.content {
  background-color: #353535;
  display: inline-block;
  width: 100%;
  border-radius:5px;
  overflow:hidden;
  height:12em;
  margin:auto;
  position:relative;

  &:hover{
    background-color: #1b1b1b;
  }
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
}

h2{
  color:lightskyblue;
  font-weight: bold;
}

</style>
