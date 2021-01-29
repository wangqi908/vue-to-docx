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
        first_name: 'John',
        last_name: 'Doe',
        phone: '0652455478',
        description: 'New Website',
        list: [
          {
            name: '张三',
            hobby: '抽烟'
          },
          {
            name: '李四',
            hobby: '喝酒'
          },
          {
            name: '王五',
            hobby: '烫头'
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
        fileName: 'output',
        fileUrl: `..${location.pathname}template.docx`
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
