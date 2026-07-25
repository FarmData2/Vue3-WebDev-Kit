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
    }
  },
  computed: {
    shuffledWords() {
      return this.words.sort(() => 0.5 - Math.random())
    },
  },
  watch: {},
  methods: {
    checkAnswer(word) {
      word.correct = word.word_b == word.answer
    },
  },
}

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app')
