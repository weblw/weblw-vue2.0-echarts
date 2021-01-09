<template>
  <div class="pie">
    <div><Pie1 /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
import Pie1 from './pie1'
export default {
  name: 'Pie',
  components: {
    Pie1
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/mixin.scss';
.pie {
  @include echarts-layout;
  width: 100%;
  height: 100%;
}
</style>
