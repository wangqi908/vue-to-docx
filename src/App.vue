<template>
  <button @click="down">下载</button>
</template>

<script>
import { docxExport } from '@/utils'
export default {
  name: 'App',
  setup () {
    function down () {
      const data = {
        firstName: 'John',
        lastName: 'Doe',
        phone: '0652455478',
        description: 'New Website',
        avatar: require('../static/avatar.jpg'),
        list: [
          {
            name: '张三',
            hobby: '抽烟',
            image: require('../static/aa.jpg')
          },
          {
            name: '李四',
            hobby: '喝酒',
            image: require('../static/bb.jpg')
          },
          {
            name: '王五',
            hobby: '烫头',
            image: require('../static/cc.jpg')
          }
        ],
        /*
        嵌套对象语法
        https://github.com/open-xml-templating/docxtemplater/issues/243
        {#address}{city}{/address}
       */
        address: {
          city: 'London',
          postal: 24324
        }
      }
      const obj = {
        data,
        fileName: '文档',
        fileUrl: `..${location.pathname}template.docx`,
        forceHeight: 60, // 如果没传入setSize,默认图片高度60,宽度自适应
        setSize (tagName) {
          // 处理图片宽高方法
          if (tagName === 'image') {
            return [200, 300]
          }
        }
      }
      docxExport(obj)
    }
    return {
      down
    }
  }
}
</script>

<style></style>
