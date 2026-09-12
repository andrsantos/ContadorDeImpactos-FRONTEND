<script setup>
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const zoom = ref(20)
const center = ref([-1.45704, -48.484621])
const urlMapa = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
const atribuicao = ref('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>')
</script>

<template>
  <div class="mapa-container">
    <h3>Localização</h3>

    <div style="height: 300px; width: 100%; border-radius: 8px; overflow: hidden">
      <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
        <l-tile-layer
          :url="urlMapa"
          :attribution="atribuicao"
          layer-type="base"
          name="OpenStreetMap"
        />

        <l-marker :lat-lng="center"></l-marker>
      </l-map>
    </div>

    <div class="coordenadas-rodape mt-2">
      <span class="texto-coords">{{ center[0] }}, {{ center[1] }}</span>
      <button class="btn-link">Copiar</button>
      <button class="btn-link">↗ Abrir no mapa</button>
    </div>
  </div>
</template>

<style scoped>
.mapa-container {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-top: 1.5rem;
}

.coordenadas-rodape {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: monospace;
  color: #4b5563;
  font-size: 0.9rem;
}

.btn-link {
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
}
.btn-link:hover {
  text-decoration: underline;
}
</style>
