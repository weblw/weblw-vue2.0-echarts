// plop入口文件
// 此函数接收一个 plop 对象，用于创建生成器任务
const fs = require('fs')
const path = require('path')

module.exports = plop => {
  plop.setGenerator('echarts', {
    description: '创建 echarts 图表基础组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '组件名称',
        default: 'pie0'
      }
    ],
    actions: data => {
      const name = data.name
      const filoderName = name.slice(0, name.length - 1)
      const compName = name.charAt(0).toUpperCase() + name.slice(1)
      const reg = new RegExp(`<div class="${filoderName}">`)
      const actions = [
        {
          type: 'add', // 添加全新文件
          path: `src/components/${filoderName}/${name}.vue`,
          templateFile: 'plop-templates/component.hbs',
          data: {
            name,
            filoderName,
            compName
          }
        },
        {
          type: 'add', // 添加全新文件
          path: `src/views/${filoderName}/${name}.vue`,
          templateFile: 'plop-templates/view.hbs',
          data: {
            name,
            filoderName,
            compName
          }
        },
        {
          type: 'append', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: /<script>/,
          template: `import ${compName} from './${name}'`
        },
        {
          type: 'append', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: /components: {/,
          template: `    ${compName},`
        },
        {
          type: 'append', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: reg,
          template: `    <div><${compName} /></div>`
        }
      ]
      return actions
    }
  })
  plop.setGenerator('delEcharts', {
    description: '删除 echarts 图表基础组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '组件名称',
        default: 'pie0'
      }
    ],
    actions: data => {
      const name = data.name
      const filoderName = name.slice(0, name.length - 1)
      const compName = name.charAt(0).toUpperCase() + name.slice(1)
      const delList = [
        `src/components/${filoderName}/${name}.vue`, 
        `src/views/${filoderName}/${name}.vue`
      ]
      delList.forEach(file => {
        const filePath = path.join('./', file)
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        } else {
          console.log('文件不存在:', filePath)
        }
      })
      const reg1 = new RegExp(`\\s*<div><${compName} /></div>`)
      const reg2 = new RegExp(`\\s*import ${compName} from './${name}'`)
      const reg3 = new RegExp(`\\s*${compName},`)
      const actions = [
        {
          type: 'modify', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: reg1,
          template: ''
        },
        {
          type: 'modify', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: reg3,
          template: ''
        },
        {
          type: 'modify', // 将模版或者字符串根据正则添加到符合正则的地方
          path: `src/views/${filoderName}/index.vue`,
          pattern: reg2,
          template: ''
        }
      ]
      return actions
    }
  })
}
