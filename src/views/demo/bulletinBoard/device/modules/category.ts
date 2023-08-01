import * as echarts from 'echarts'

export const echartsOpt = {
  title: [
    {
      text: '已完成',
      x: 'center',
      top: '50%',
      textStyle: {
        color: '#37B1FF',
        fontSize: 10,
        fontWeight: '200'
      }
    },
    {
      text: '75%',
      x: 'center',
      y: '40%',
      textStyle: {
        fontSize: 15,
        color: '#3FFFEA ',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '100'
      }
    }
  ],

  polar: {
    radius: ['42%', '52%'],
    center: ['50%', '50%']
  },
  angleAxis: {
    max: 100,
    show: false
  },
  radiusAxis: {
    type: 'category',
    show: true,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  series: [
    {
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 30,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(66, 66, 66, .3)'
      },
      data: [70],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#16CEB9'
            },
            {
              offset: 1,
              color: '#6648FF'
            }
          ])
        }
      }
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['56%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['38%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    }
  ]
}
