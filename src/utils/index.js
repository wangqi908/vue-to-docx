import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'
import * as PizZipUtils from 'pizzip/utils'
/**
 * @method 生成word文件
 * @param params {} data模板数据, fileName输出文件名, fileUrl模板路径
 * @return Promise
 * @example
      const data = {
        first_name: 'John',
        last_name: 'Doe',
        phone: '0652455478',
        description: 'New Website'
      }
      const obj = {
        data,
        fileName: 'output',
        fileUrl: 'https://docxtemplater.com/tag-example.docx'
      }
      嵌套对象语法
      https://github.com/open-xml-templating/docxtemplater/issues/243
      {#address}{city}{/address}
      wordExport(obj).then(res => {
        console.log(res)
      })
 */
export function docxExport (params) {
  const { data, fileName, fileUrl } = params
  return new Promise((resolve, reject) => {
    PizZipUtils.getBinaryContent(fileUrl, (error, content) => {
      if (error) {
        reject(error)
        throw error
      }
      var zip = new PizZip(content)
      var doc = new Docxtemplater(zip, { linebreaks: true })

      doc.setData(data)

      doc.render()

      var out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      })
      saveAs(out, `${fileName}.docx`)
      resolve(true)
    })
  })
}
