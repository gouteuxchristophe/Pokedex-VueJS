<script lang='ts'>
import { useStore } from 'vuex';
import { ref, computed } from 'vue'
import Pokemon from './Pokemon.vue'
export default {
  name: 'pokemons-list',
  components: {
    Pokemon
  },
  setup() {
    const store = useStore()
    return {
      data: computed(() => store.state.data.slice(1,21)),
    }

  },
}
</script>

<template>
  <div class='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2 '>
  <Pokemon v-for='pokemon in data' :key='pokemon.id' :pokemon='pokemon'/>
  </div>
</template>



<style scoped></style>