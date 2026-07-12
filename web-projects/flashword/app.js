const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
    }
  },
}

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app')
