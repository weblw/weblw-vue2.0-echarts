<template>
  <Pie :chartData="chartData" :colors="colors" />
</template>

<script>
import Pie from '@/components/pie/pie1.vue'
export default {
  components: { Pie },
  data () {
    return {
      chartData: [
        {
          name: '发证',
          value: 7418
        },
        {
          name: '环境税',
          value: 1579
        },
        {
          name: '重点',
          value: 418
        },
        {
          name: '超标',
          value: 568
        }
      ],
      colors: ['#00E473', '#40D3FF', '#FFC300', '#FF8700']
    }
  }
}
</script>
