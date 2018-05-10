import '../css/main.css'
import API from './class/API'
import UI from './class/UI'

console.log('ready')

const view = new UI
const api = new API

window.addEventListener('load', () => {
  let boxLoader = document.getElementById('loader')
  view.showData()
  setTimeout(() => {
    boxLoader.classList.remove('loader')
  }, 2000)
})

const search = document.getElementById('search')

search.addEventListener('input', () => {
  let boxLoader = document.getElementById('loader')
  if (search.value.length > 3) {
    boxLoader.classList.add('loader')
    view.search(search.value)
  } else if (search.value.length === 0) {
    view.initMap()
    view.showData()
    if (boxLoader.classList.contains('loader')) {
      setTimeout(() => {
        boxLoader.classList.remove('loader')
      }, 2000)
    }
  }
})
