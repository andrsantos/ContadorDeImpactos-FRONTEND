<script setup>
defineProps({
  tela: {
    type: Object,
    required: true
  }
})
</script>

<template>
<router-link :to="`/ponto/${tela.id}`" class="card-link">
  <div class="card">
    <!-- Bloco da Imagem com Badges flutuantes -->
    <div class="card-image-container">
      <img :src="tela.imagem" :alt="tela.endereco" />
      
      <!-- Tag de Câmera ao vivo -->
      <span v-if="tela.possuiCamera" class="badge-camera">
        🔴 Câmera ao vivo
      </span>
      
      <!-- Tag de Cidade -->
      <span class="badge-cidade">
        {{ tela.cidade }}
      </span>
    </div>

    <!-- Bloco de Informações do Card -->
    <div class="card-content">
      <h3 class="endereco">{{ tela.endereco }}</h3>
      <p class="codigo">{{ tela.codigo }}</p>
      <div class="impactos">
        <strong>{{ tela.impactos }}</strong>
      </div>
    </div>
  </div>
</router-link>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image-container {
  position: relative;
  width: 100%;
  height: 200px;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge-camera {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.badge-cidade {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: #22c55e;
  color: #fff;
  padding: 4px 12px;
  font-size: 0.85rem;
  font-weight: bold;
  border-radius: 6px;
}

.card-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.endereco {
  font-size: 1rem;
  color: #1f2937;
  font-weight: 600;
  line-height: 1.4;
}

.codigo {
  font-size: 0.8rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.impactos {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #111827;
  background: #fef3c7;
  padding: 6px 10px;
  border-radius: 6px;
  display: inline-block;
  width: fit-content;
}
</style>