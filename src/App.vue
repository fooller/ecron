<template>
  <div id="app">
    <ecron @get="get" v-if="show"></ecron>
    <el-button @click="click">默认按钮</el-button>
    {{cron}}
  </div>
</template>

<script>
import ecron from './components/cron'
export default {
  name: 'app',
  components: {
    ecron
  },
  data() {
    return {
      cron: '',
      show: false
    }
  },
  methods: {
    click () {
      this.show = true
    },
    get(val) {
      this.show = false
      this.cron = val
    }
  }
}
</script>

<style style="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
