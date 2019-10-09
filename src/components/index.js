import Header from './Header.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import BreadCrumb from './BreadCrumb.vue'

const commonComponents = function (Vue) {
  if (Vue.install) return
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('SideBar', SideBar)
  Vue.component('BreadCrumb', BreadCrumb)
}

export default commonComponents
