<script lang='ts'>
  export default{
    name: 'pokemon',
    props: ['pokemon']
  }
</script>

<template>
     <div className=" bg-white rounded-lg shadow-lg p-4 flex flex-col w-full hover:rotate-12 duration-300 hover:scale-110 hover:bg-[#00b7ff]">
      <img
        :src='pokemon.sprites.shiny'
        alt='pokemon.name.fr'
      />
      <div className="py-2 text-center">
        <h3 className="text-gray-500 text-center">
          {{pokemon.name.fr}}
        </h3>
      </div>
      <p className="flex flex-wrap gap-2 justify-center">
        <div v-for="type in pokemon.type">
        {{ type.name }}
        </div>
      </p>
    </div>
</template>



<style scoped>

</style>