<template>
  <div class="menu">
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'Profile', path: '/profile' },
        { title: 'Skills', path: '/skills' },
        { title: 'Works', path: '/works' },
        { title: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.menu{
  position: fixed;
  width:100%;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index:999;
}

ol {
  width: 100%;
  display:flex;
  padding:0px;
  justify-content: center;
  list-style: none;
  margin: 8px auto;
  font-weight: bold;
}

li {
  width: 18%;
  height: 30px;
  font-size: 2em;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
    color:palevioletred;
  }
}

@media screen and (max-width:891px){
  li {
    font-size: 1.6em;
  }
}

@media screen and (max-width:414px){
  li {
    font-size: 1.2em;
  }
}

@media screen and (max-width:375px){
  li {
    font-size: 1.1em;
  }
}

@media screen and (max-width:320px){
  li {
    font-size: 1em;
  }
}

a {
  display: block;
  width: 100%;
  height: 100%;
  color: lime;
  text-decoration: none;
  line-height: 30px;
  &:hover {
    color:palevioletred;
  }
}

</style>
