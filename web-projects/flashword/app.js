const Flashword = {
  data() {
    return {
      wordA: 'hola',
      wordB: 'hello',
      answer: '',
      correct: null,
      showFeedback: false,
      hasError: false,
      correctAnswers: 0,
      totalAnswers: 0,

      // Array of objects example
      words: [
        { wordA: 'hola', wordB: 'hello' },
        { wordA: 'adios', wordB: 'goodbye' },
        { wordA: 'uno', wordB: 'one' },
        { wordA: 'dos', wordB: 'two' },
      ],
    };
  },
  watch: {
    answer(newAnswer) {
      if (newAnswer !== '') {
        this.hasError = false;
      }
    },
  },
  computed: {
    inputCSSClass() {
      return this.hasError ? 'error' : 'no-error';
    },
    correctPercentage() {
      if (this.totalAnswers === 0) {
        return 0;
      }

      return (this.correctAnswers / this.totalAnswers) * 100;
    },
    earnedBadge() {
      return this.correctPercentage >= 80;
    },
  },
  methods: {
    checkAnswer() {
      if (this.answer == '') {
        this.hasError = true;
        return;
      }

      this.hasError = false;
      this.correct = this.wordB == this.answer;

      this.totalAnswers++;

      if (this.correct) {
        this.correctAnswers++;
      }

      this.showFeedback = true;
    },
    reset() {
      this.answer = '';
      this.showFeedback = false;
      this.correct = null;
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
