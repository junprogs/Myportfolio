<template>
    <div class="contact">
    <div class="box">
      <div class="content" v-for="(contact, index) in contacts" :key='index'>
        <h3> {{ contact.name }} </h3>
        <p><a :href="contact.url" target="_blank" rel="noopener noreferrer">{{ contact.value }}</a></p>
        <p> {{ contact.url }} </p>
        <img v-bind:src="contact.img" alt="">
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contacts: [
        {
          name: 'GitHub',
          value: 'junprogs',
          url: 'https://github.com/junprogs',
          img: 'https://cdn.svgporn.com/logos/github-octocat.svg'
        },
        {
          name: 'E-Mail',
          value: 'gmail',
          url: 'jun.progs[at_mark]gmail.com',
          img: 'https://cdn.svgporn.com/logos/google-gmail.svg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.box{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 0.8em;
    padding: 0.8em;
    margin: 0 0 2em;
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
}

h3,a {
  color: lime;
  font-weight: bold;
  font-size:24px;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
  color:lime;
  font-weight: bold;
  font-size:24px;
  margin: 5px;
}

@media screen and (min-width:892px){
  p {
    font-size: 1em;
  }
}

@media screen and (min-width:599px){
  p {
    font-size: 1em;
  }
}

img{
  opacity:0.1;
  position:absolute;
  top:5%;
  left:30%;
  padding: 1%;
  width:80%;
}

</style>
