const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
      hasError: false,
      inputBackgroundColor: 'white',

      // Array of objects example
      words: [
        { wordA: 'hola', wordB: 'hello' },
        { wordA: 'adios', wordB: 'goodbye' },
        { wordA: 'uno', wordB: 'one' },
        { wordA: 'dos', wordB: 'two' },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    checkAnswer() {
      if (this.answer == '') {
        this.hasError = true;
        this.inputBackgroundColor = 'lightpink';
        return;
      }

      this.hasError = false;
      this.inputBackgroundColor = 'white';

      this.correct = this.wordB == this.answer;

      if (this.correct) {
        this.image = 'correct';
        this.imageAlt = 'Green check mark.';
      } else {
        this.image = 'incorrect';
        this.imageAlt = 'Red X.';
      }

      this.showFeedback = true;
    },
    reset() {
      this.answer = '';
      this.showFeedback = false;
      this.correct = null;
      this.inputBackgroundColor = 'white';
      this.hasError = false;

      // Reset to a new random word
      const randomIndex = Math.floor(Math.random() * this.words.length);
      this.wordA = this.words[randomIndex].wordA;
      this.wordB = this.words[randomIndex].wordB;
    },
  },
};

// eslint-disable-next-line no-unused-vars, no-undef
const app = Vue.createApp(Flashword).mount('#app');
