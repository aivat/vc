<template>
  <div class="qwe">
    <div >
       Мед оргнизации
       <input v-model="message" placeholder="Введите МО">
       <button @click="search(message)">Поиск</button>
        <div class="wrap" v-for="item in mo" :key="item.id">
          <p class="ftw100"> id:<b>{{ item.id }}</b> {{ item.title }}</p>

        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            message: ''
        }
    },
  computed: {
    mo: function () {
        this.$store.getters.getMO
    }
  },
  methods: {
      search(nameMO) {
          this.$store.dispatch('searchMO', nameMO)
      }
  },
  created () {
    // this.$store.dispatch('getAllNews', 'economics')
  }
}
</script>

<style scoped>
.qwe {
    margin-top: 25px;
}
</style>