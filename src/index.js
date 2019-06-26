import ecron from './components/cron.vue'

const plugin = {
    install (Vue) {
        Vue.component(ecron.name, ecron)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

export default plugin
export const install = plugin.install
