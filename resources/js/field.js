Nova.booting((Vue, router, store) => {
  Vue.component('index-value-slider', require('./components/IndexField'))
  Vue.component('detail-value-slider', require('./components/DetailField'))
  Vue.component('form-value-slider', require('./components/FormField'))
})
