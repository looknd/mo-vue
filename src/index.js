//base style
import './scss/base.scss'


import Vue from 'vue'
import Paging from './components/paging/'


const components = {
	Paging
}

const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

module.exports = {
  ...components,
  install
}