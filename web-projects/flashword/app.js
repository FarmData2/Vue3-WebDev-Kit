const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
      image: null,

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
      this.correct = this.wordB == this.answer

      if (this.correct) {
        this.image =
          'https://s3.amazonaws.com/codewithsusan/circle-correct@2x.png'
      } else {
        this.image =
          'https://s3.amazonaws.com/codewithsusan/circle-incorrect@2x.png'
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
