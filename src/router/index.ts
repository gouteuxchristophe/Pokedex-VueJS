import PokemonListVue from '@/components/PokemonList.vue'
import PokemonViewVue from '@/components/PokemonView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemons-list',
      component: PokemonListVue
    },
    {
      path: '/view/:id',
      name: 'pokemon-view',
      component: PokemonViewVue
    },

  ]
})

export default router
