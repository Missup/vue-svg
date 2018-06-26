<template>
  <div id="box">
    <svg width="100%" height="100%" @mousemove="testFn($event)"></svg>
  </div>
</template>
<script>
import d3 from 'd3'
export default {
  data () {
    return {
    }
  },
  methods: {
    testFn (e) {
      var svg = d3.select('svg').node()
      console.log(2222, svg, e)
      console.log(1111, d3.mouse(svg))
    }
  }
}
</script>
<style scoped>
  #box {
    width: 100%;
    height: 100%;
  }
</style>
