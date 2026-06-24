/* global Vue */
const FlashWord = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
    }
  },
}

// Create a new Vue instance using our options
const app = Vue.createApp(FlashWord)
app.mount('#app')
