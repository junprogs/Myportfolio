<template>
  <div class="wrapper">
    <footer>
      <p>{{ contact }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contact: '(c) 2019 Jun All Rights Reserved.'
    }
  }
}
</script>

<style scoped lang="scss">

html{
  position:absolute;
}

footer{
  position: relative;
}

p{
  color:lime;
}

</style>
