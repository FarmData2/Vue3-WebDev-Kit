<script>
export default {
  name: 'WordCard',
  props: {
    word: {
      type: Object,
      required: true,
    },
  },
  emits: ['incrementCorrectCount'],
  data() {
    return {
      correct: false,
      answer: '',
    };
  },
  methods: {
    checkAnswer() {
      this.correct = this.word.word_b === this.answer;

      if (this.correct) {
        this.$emit('incrementCorrectCount');
      }
    },
  },
};
</script>

<template>
  <div class="card" v-bind:class="{ correct: correct }">
    <p data-cy="word" class="word">{{ word.word_a }}</p>
    <input
      type="text"
      data-cy="translation"
      v-if="!correct"
      v-model="answer"
      v-on:keyup.enter="checkAnswer()"
    />
    <p v-else class="correctAnswer">{{ answer }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #e8f0ff;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 25px;
}

input[type='text'] {
  border: 0;
  font-size: 25px;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  padding: 5px;
}

.word {
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.correctAnswer {
  padding: 0;
  margin: 0;
}

.correct {
  color: #0f5132;
  background-color: #d1e7dd;
}
</style>
