<template>
  <div class="pie-container">
    <div id="pie"></div>
    <div class="yuandian" v-for="c in colors" :key="c" :style="{
        'background-color': c
      }"
    ></div>
    <div class="cod">废气</div>
    <div class="lengend">
      <div class="item" v-for="item in chartData" :key="item.value">
        <div class="value">{{ item.value }}</div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const option = {
  backgroundColor: 'transparent',
  color: [],
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: false
  },
  yAxis: [{
    type: 'category',
    inverse: true,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    data: []
  }],
  xAxis: [{
    show: false
  }],
  series: []
}

function genOption (chartData, colors) {
  console.log(chartData, colors)
  const arrName = []
  const arrValue = []
  const pieSeries = []
  const lineYAxis = []
  let sum = 0
  // 数据处理
  chartData.forEach((v, i) => {
    arrName.push(v.name)
    arrValue.push(v.value)
    sum = sum + v.value
  })
  // 图表option整理
  chartData.forEach((v, i) => {
    pieSeries.push({
      name: v.name,
      type: 'pie',
      animationDuration: 2000,
      clockWise: false,
      hoverAnimation: false,
      radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['40%', '37%'],
      label: {
        show: false
      },
      data: [{
        value: v.value,
        name: v.name
      }, {
        value: sum - v.value,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }]
    })
    pieSeries.push({
      name: '',
      type: 'pie',
      silent: true,
      animationDuration: 2000,
      z: 1,
      clockWise: false, // 顺时加载
      hoverAnimation: false, // 鼠标移入变大
      radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['40%', '37%'],
      label: {
        show: false
      },
      data: [{
        value: 7.5,
        itemStyle: {
          color: '#1E3257'
        }
      }, {
        value: 2.5,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }]
    })
    lineYAxis.push({
      value: i,
      textStyle: {
        rich: {
          circle: {
            color: colors[i],
            padding: [0, 5]
          }
        }
      }
    })
  })
  option.yAxis[0].data = lineYAxis
  option.series = pieSeries
  option.color = colors
  return option
}
export default {
  props: {
    chartData: {
      type: Array,
      default () {
        return []
      }
    },
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('pie'))
    const option = genOption(this.chartData, this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
.pie-container {
  width: 100%;
  height: 100%;
  position: relative;
  #pie {
    width: 270px;
    height: 300px;
  }
  .yuandian {
    height: 10px;
    width: 10px;
    border-radius: 5px;
    position: absolute;
    left: 115px;
    top: 68px;

    &:nth-child(2) {
      top: 8px;
    }

    &:nth-child(3) {
      top: 28px;
    }

    &:nth-child(4) {
      top: 48px;
    }
  }

  .cod {
    width: 40px;
    height: 24px;
    background: rgba(33, 111, 255, 0.3);
    border: 1px solid #216FFF;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 90px;
    top: 100px;
    color: white;
  }

  .lengend {
    position: absolute;
    right: -10px;
    top: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    height: 120px;
    flex-wrap: wrap;
    font-size: 12px;
    line-height: 20px;

    .item {
      width: 75px;
      position: relative;

      .value {
        color: white;
        font-size: 14px;
      }

      .name {
        color: #21F5FF;
      }

      &::before {
        position: absolute;
        left: -10px;
        top: 5px;
        content: '';
        width: 4px;
        height: 30px;
        background: #00E473;
        border-radius: 2px;
      }

      &:nth-child(1)::before {
        background: #00E473;
      }

      &:nth-child(2)::before {
        background: #40D3FF;
      }

      &:nth-child(3)::before {
        background: #FFC300;
      }

      &:nth-child(4)::before {
        background: #FF8700;
      }
    }
  }
}
</style>
