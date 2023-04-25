<script lang='ts'>
import PokemonList from './components/PokemonList.vue'
import PokemonView from './components/PokemonView.vue'
import axios from 'axios'
import {useStore } from 'vuex'
import { defineComponent } from 'vue'
import type { Pokemon } from './stores/vuex'
import '@/styles/globals.css';

export default defineComponent ({
  components: {
    PokemonList,
    PokemonView
  },
  data () {
    return {
      data: [] as Pokemon[]
    }
  },
  async mounted () {
    const store = useStore()
    await axios
      .get('https://api-pokemon-fr.vercel.app/api/v1/pokemon')
      .then(response => (this.data = response.data))
      store.commit('GET_API', this.data)
      console.log(store.state.data);
      
  }
})
</script>

<template>
      <div class='flex justify-around'>
        <h2 class='text-5xl'>Pokemon</h2>
        <img role='logo'  class="circle responsive-img" src="./assets/pokemon-logo.jpg" alt="pokemon logo">
        <h2 class='text-5xl'>Apps</h2>
      </div>

      <RouterView/>

</template>

<style lang='css'>


</style>