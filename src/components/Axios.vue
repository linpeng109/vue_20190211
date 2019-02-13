<template>
  <div>
    <h1>Axios使用示例</h1>
    <h2 align="left">
      <div align="left">参数传递：{{this.$route.params.userid}}</div>
    </h2>
    <h2 align="left">CORS使用示例：</h2>
    <div align="left">
      headers={{headers}}
    </div>
    <div align="left">
      text={{text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Axios',
    data: function () {
      return {
        headers: '',
        text: ''
      }
    },
    methods: {
      getHello: function () {
        this.$axios.get('/hello/getHello')
          .then(response => {
            this.headers = response.headers
            this.text = response.data
          })
      }
    },
    mounted: function () {
      this.$axios
        .get('/hello/getHello')
        .then(response => {
          this.headers = response.headers
          this.text = response.data
        })
    }
  }
</script>

<style scoped>

</style>
