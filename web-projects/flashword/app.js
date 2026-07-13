const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
      image: null,
      imageAlt: null,
      hasError: false,
      inputBackgroundColor: 'white',
      showHint: false,
      level: 'easy',

      // Array example
      spanishWords: ['hola', 'adios', 'uno', 'dos'],

      // Object example
      word: { a: 'hola', b: 'hello' },

      // Array of objects example
      words: [
        { wordA: 'hola', wordB: 'hello' },
        { wordA: 'adios', wordB: 'goodbye' },
        { wordA: 'uno', wordB: 'one' },
        { wordA: 'dos', wordB: 'two' },
      ],
    }
  },
  methods: {
    checkAnswer() {
      if (this.answer == '') {
        this.hasError = true
        this.inputBackgroundColor = 'lightpink'
        return
      }

      this.hasError = false
      this.inputBackgroundColor = 'white'

      this.correct = this.wordB == this.answer

      if (this.correct) {
        this.image = 'correct'
        this.imageAlt = 'Green check mark.'
      } else {
        this.image = 'incorrect'
        this.imageAlt = 'Red X.'
      }

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
