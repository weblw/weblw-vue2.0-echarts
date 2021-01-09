<template>
  <div id="guage"></div>
</template>

<script>
function genOption (data, colors) {
  return {
    backgroundColor: 'transparent',
    title: {
      text: '机动车检测合格率',
      bottom: '20%',
      x: 'center',
      textStyle: {
        color: '#333',
        fontSize: 14,
        fontWeight: 400
      }
    },
    series: [
      {
        type: 'gauge',
        radius: '95%',
        startAngle: '210',
        endAngle: '-30',
        splitNumber: 4,
        detail: {
          offsetCenter: [0, '-15%'],
          formatter: `{a|${data * 100}}{c|%}`,
          rich: {
            a: {
              color: '#333',
              lineHeight: 35,
              fontSize: 24,
              padding: [0, 0, -30, 0]
            },
            c: {
              color: '#333',
              fontSize: 14,
              fontWeight: 550,
              padding: [10, 0, -20, 0]
            }
          }
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: colors,
            width: 25
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: '#12181f',
            width: 4
          }
        },
        axisLabel: {
          show: false
        },
        data: [data]
      },
      {
        name: '白色圈刻度',
        type: 'gauge',
        radius: '80%',
        startAngle: 210, // 刻度起始
        endAngle: -30, // 刻度结束
        min: 0,
        max: 100,
        splitNumber: 4,
        z: 5,
        axisTick: {
          show: false
        },
        splitLine: {
          length: 16, // 刻度节点线长度
          lineStyle: {
            width: 0,
            color: '#018DFF'
          } // 刻度节点线
        },
        axisLabel: {
          color: '#8391b7',
          fontSize: 14
        }, // 刻度节点文字颜色
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 0,
            name: ''
          }
        ]
      }
    ]
  }
}
export default {
  name: 'guage',
  props: {
    chartData: {
      type: Number,
      default: 0
    },
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('guage'))
    const option = genOption(this.chartData, this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style>
  #guage {
    width: 100%;
    height: 100%;
  }
</style>
