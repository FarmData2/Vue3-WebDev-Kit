const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
    }
  },
}

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app')
