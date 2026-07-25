const Flashword = {
  data() {
    return {
      words: [
        {
          word_a: 'hola',
          word_b: 'hello',
          hint: 'greeting',
          answer: '',
          correct: false,
        },
        {
          word_a: 'uno',
          word_b: 'one',
          hint: 'number',
          answer: '',
          correct: false,
        },
        {
          word_a: 'gris',
          word_b: 'grey',
          hint: 'color',
          answer: '',
          correct: false,
        },
      ],
      correctCount: 0,
    }
  },
  computed: {
    shuffledWords() {
      return this.words.sort(() => 0.5 - Math.random())
    },
    wordCount() {
      return this.words.length
    },
  },
  watch: {},
  methods: {
    checkAnswer(word) {
      word.correct = word.word_b == word.answer

      if (word.correct) {
        this.correctCount++
      }
    },
  },
}

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app')
