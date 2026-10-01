<script setup>
import { ref } from 'vue'
import { camisetas, TALLAS } from '../data/camisetas'
import detalle from './detalle.vue'

const seleccionada = ref(null)
const total = ref(0)

function mostrarCamiseta(camiseta) {
  seleccionada.value = camiseta
}

</script>
<template>
    <Detalle v-if="seleccionada" :camiseta="seleccionada" :tallas="TALLAS" />

    <template v-else>
      <div>Total {{ total }} €</div>
      <div class="modelos rejilla">
          <article v-for="camiseta in camisetas" :key="camiseta.id" class="casilla">
            <h2 class="nombre">{{ camiseta.nombre }}</h2>
            <p class="foto"><img :src="camiseta.frente" alt="Camiseta de {{ camiseta.nombre }}" /></p>
            <span class="precio">{{ camiseta.precio.toFixed(2) }} €</span>
            <button type="button" class="counter anadir" @click="mostrarCamiseta(camiseta)">Detalle</button>
          </article>
      </div>
    </template>
</template>

<style scoped>

.modelos {
  max-width: 1200px;
  margin: auto;
  padding: 40px 24px;
  text-align: center;
}

.rejilla {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.casilla {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.casilla:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.nombre {
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
}

.foto {
  margin: 0;
}

.casilla img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
}

.precio {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
}

.anadir {
  align-self: stretch;
  justify-content: center;
  margin-bottom: 0;
  border: none;
  border-radius: 8px;
  padding: 12px 10px;
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 600;
  color: #f8fafc;
  background: #1e293b;
  cursor: pointer;
  transition: background 0.2s;
}

.anadir:hover {
  background: #0f172a;
}

</style>