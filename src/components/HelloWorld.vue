<template>
  <div>
    <h1>{{msg}}</h1>
    <p/>
    <button @click="goToAxios">跳转</button>
  </div>
</template>

<script>

  export default {

    name: 'HelloWorld',
    data: function () {
      return {
        msg: 'Welcome to Create a Vue.js App'
      }
    },
    methods: {
      goToAxios: function () {
        this.$router.push({name: 'Axios', params: {userid: '1123'}})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
</style>
