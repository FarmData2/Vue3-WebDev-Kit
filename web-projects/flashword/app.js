const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
    }
  },
  methods: {
    checkAnswer() {
      this.correct = this.wordB == this.answer
      this.showFeedback = true
    },
    reset() {
      this.answer = ''
      this.showFeedback = false
    },
  },
}

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app')
