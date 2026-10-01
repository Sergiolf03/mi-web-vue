<script setup>
import { ref } from 'vue'
const tallaSeleccionada = ref(null)
const fotoActiva = ref('frente')

const props = defineProps({
  camiseta: { type: Object, required: true },
  tallas: { type: Array, required: true },
})

function unidadesDe(talla){
    return props.camiseta.tallas[talla] ?? 0
}

</script>
<template>
    <h2>{{ camiseta.nombre }}</h2>
    <img :src="camiseta[fotoActiva]" :alt="`Camiseta ${camiseta.nombre} de ${fotoActiva}`" />
    <button type="button" @click="fotoActiva = 'frente'">Frente</button>
    <button type="button" @click="fotoActiva = 'reverso'">Reverso</button>
    <button  v-for="talla in tallas"
  :key="talla"
  :disabled="unidadesDe(talla) === 0"
  @click="tallaSeleccionada = talla"
>
  {{ talla }} - {{ unidadesDe(talla) }} uds.
</button>
</template>