import domtoimage from 'dom-to-image'

function filter(node) {
  return node.className !== 'tape-section' && node.tagName !== 'H2'
}

const exportAsImage = async (el) => {
  const node = document.getElementById(el)

  domtoimage
    .toPng(node, {
      filter,
    })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'letter.png'
      link.href = dataUrl
      link.click()
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}

export default exportAsImage
