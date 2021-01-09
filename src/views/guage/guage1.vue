<template>
  <Guage :chartData="chartData" :colors="colors" />
</template>

<script>
import Guage from '@/components/guage/guage1.vue'
export default {
  components: { Guage },
  data () {
    return {
      chartData: 0.97,
      colors: [
        [0.25, '#33D7F6'],
        [0.5, '#3ABBF9'],
        [0.75, '#41A3FC'],
        ['0.97', '#4C85FE'],
        [1, '#232B38']
      ]
    }
  }
}
</script>
