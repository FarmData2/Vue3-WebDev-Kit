<script>
import WordCard from './components/WordCard.vue';

export default {
  components: {
    WordCard,
  },
  data() {
    return {
      words: [],
      correctCount: 0,
      completed: false,
      resetKey: 0,
      apiError: false,
      elapsedTime: 0,
      timerStartedAt: null,
      timerInterval: null,
      leaderboard: [],
      leaderboardError: false,
      playerName: '',
      scoreSubmitted: false,
      submittingScore: false,
      scoreSubmitError: false,
    };
  },
  computed: {
    shuffledWords() {
      return [...this.words].sort(() => 0.5 - Math.random());
    },
    wordCount() {
      return this.words.length;
    },
    topScores() {
      return [...this.leaderboard]
        .sort(
          (firstScore, secondScore) =>
            Number(firstScore.time) - Number(secondScore.time)
        )
        .slice(0, 10);
    },
  },
  watch: {
    correctCount() {
      if (this.correctCount === this.wordCount && this.wordCount > 0) {
        this.completed = true;
        this.stopTimer();
      }
    },
  },
  methods: {
    incrementCorrectCount() {
      this.correctCount++;
    },
    startTimer() {
      this.timerStartedAt = Date.now();
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Math.floor(
          (Date.now() - this.timerStartedAt) / 1000
        );
      }, 250);
    },
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      if (this.timerStartedAt) {
        this.elapsedTime = Math.floor(
          (Date.now() - this.timerStartedAt) / 1000
        );
      }
    },
    async fetchLeaderboard() {
      try {
        const response = await fetch('/api/times');
        if (!response.ok) {
          throw new Error('Server response not ok. Status: ' + response.status);
        }
        this.leaderboard = await response.json();
        this.leaderboardError = false;
      } catch (error) {
        console.error('Error: Unable to fetch leaderboard. ', error);
        this.leaderboardError = true;
      }
    },
    async submitScore() {
      const name = this.playerName.trim();
      if (!name || this.submittingScore || this.scoreSubmitted) {
        return;
      }

      this.submittingScore = true;
      this.scoreSubmitError = false;
      try {
        const response = await fetch('/api/times', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, time: this.elapsedTime }),
        });
        if (!response.ok) {
          throw new Error('Server response not ok. Status: ' + response.status);
        }
        this.scoreSubmitted = true;
        await this.fetchLeaderboard();
      } catch (error) {
        console.error('Error: Unable to submit score. ', error);
        this.scoreSubmitError = true;
      } finally {
        this.submittingScore = false;
      }
    },
    resetGame() {
      this.stopTimer();
      this.correctCount = 0;
      this.completed = false;
      this.resetKey++;
      this.elapsedTime = 0;
      this.playerName = '';
      this.scoreSubmitted = false;
      this.scoreSubmitError = false;
      this.startTimer();
    },
  },
  async created() {
    try {
      let response = await fetch('/api/words');
      if (!response.ok) {
        throw new Error('Server response not ok. Status: ' + response.status);
      }
      this.words = await response.json();
      this.startTimer();
    } catch (error) {
      console.error('Error: Unable to fetch words. ', error);
      this.apiError = true;
    }
    this.fetchLeaderboard();
  },
  beforeUnmount() {
    this.stopTimer();
  },
};
</script>

<template>
  <div id="app" v-cloak>
    <h2 data-cy="app-header">FlashWord</h2>

    <div v-if="apiError" data-cy="api-error-message">
      <p>Something went wrong. Please try again later.</p>
    </div>

    <div v-else data-cy="game-content">
      <p v-if="completed" data-cy="completed" id="completed">
        Great work, you have completed all the words!
      </p>
      <p v-if="!completed" data-cy="running-time" id="runningTime">
        Time: {{ elapsedTime }} seconds
      </p>
      <p v-if="completed" data-cy="elapsed-time" id="elapsedTime">
        Your time: {{ elapsedTime }} seconds
      </p>
      <form
        v-if="completed && !scoreSubmitted"
        id="score-form"
        v-on:submit.prevent="submitScore"
      >
        <label for="playerName">Add your name to the leaderboard</label>
        <input
          id="playerName"
          v-model="playerName"
          data-cy="player-name"
          type="text"
          required
          maxlength="40"
        />
        <button
          data-cy="submit-score"
          type="submit"
          v-bind:disabled="submittingScore"
        >
          {{ submittingScore ? 'Saving...' : 'Submit score' }}
        </button>
        <p v-if="scoreSubmitError" data-cy="score-submit-error">
          We could not save your score. Please try again.
        </p>
      </form>
      <p v-else-if="completed" data-cy="score-submitted">
        Your score has been added.
      </p>
      <p v-else data-cy="correct-count" id="correctCount">
        You have answered
        <span data-cy="num-correct">{{ correctCount }}</span> /
        <span data-cy="total-words">{{ wordCount }}</span>
      </p>
      <button data-cy="reset" type="button" v-on:click="resetGame">
        Reset game
      </button>

      <div id="cards">
        <WordCard
          v-for="word in shuffledWords"
          v-bind:data-cy="word.word_a + '-card'"
          v-bind:key="word.word_a + resetKey"
          v-bind:word="word"
          v-on:incrementCorrectCount="incrementCorrectCount"
        >
        </WordCard>
      </div>
    </div>

    <section id="leaderboard" data-cy="leaderboard">
      <h3>Leaderboard</h3>
      <p v-if="leaderboardError" data-cy="leaderboard-error">
        Leaderboard is unavailable right now.
      </p>
      <p v-else-if="topScores.length === 0" data-cy="leaderboard-empty">
        No scores yet.
      </p>
      <ol v-else>
        <li
          v-for="(score, index) in topScores"
          v-bind:key="score.id || score.name + score.time + index"
          data-cy="leaderboard-row"
        >
          <span>{{ index + 1 }}. {{ score.name }}</span>
          <span>{{ score.time }} seconds</span>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

#cards {
  justify-content: center;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 30px;
}

#correctCount {
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
  padding: 10px;
}

#completed {
  font-size: 20px;
  font-weight: bold;
  color: #0f5132;
  padding: 10px;
  margin: 10px;
}

#elapsedTime {
  margin: 10px;
}

#score-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 10px;
}

#playerName {
  font-size: 16px;
  padding: 6px;
}

#leaderboard {
  max-width: 600px;
  margin: 40px auto 0;
  padding: 20px;
  border-top: 2px solid #e8f0ff;
}

#leaderboard ol {
  padding-left: 0;
  list-style-position: inside;
}

#leaderboard li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e8f0ff;
}
</style>
