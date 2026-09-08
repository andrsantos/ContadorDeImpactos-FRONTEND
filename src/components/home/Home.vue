<script setup>
import { ref } from 'vue'
import CardTela from '../telas/CardTela.vue'

const teloes = ref([
  {
    id: 1,
    cidade: 'Belém',
    endereco: 'Avenida Duque de Caxias, 454, Marco, Belém PA - 66093-026',
    codigo: 'PAINEL-BEL-AB',
    impactos: '9.4M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80',
    possuiCamera: false
  },
  {
    id: 2,
    cidade: 'Belém',
    endereco: 'Rua Antônio Barreto, 71, Umarizal, Belém PA - 66055-050',
    codigo: 'PAINEL-BEL-DO',
    impactos: '4.1M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80',
    possuiCamera: true
  },
  {
    id: 3,
    cidade: 'São Luís',
    endereco: 'Avenida dos Holandeses 4, Golden Shopping, Calhau',
    codigo: 'PAINEL-SLZ-GS',
    impactos: '4.0M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
    possuiCamera: true
  },
  {
    id: 4,
    cidade: 'Belém',
    endereco: 'Avenida Almirante Barroso, 2500, Marco, Belém PA - 66093-020',
    codigo: 'PAINEL-BEL-AB2',
    impactos: '8.2M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    possuiCamera: true
  },
  {
    id: 5,
    cidade: 'Ananindeua',
    endereco: 'Rodovia BR-316, Km 8, Centro, Ananindeua PA - 67030-000',
    codigo: 'PAINEL-ANN-BR',
    impactos: '6.5M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80',
    possuiCamera: false
  },
  {
    id: 6,
    cidade: 'São Luís',
    endereco: 'Avenida Coronel Colares Moreira, Renascença, São Luís MA',
    codigo: 'PAINEL-SLZ-REN',
    impactos: '5.3M impactos/mês',
    imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    possuiCamera: true
  }
])
</script>

<template>
  <main class="container">
    <h1>Nossos Telões</h1>
    
    <div class="grid-teloes">
      <CardTela 
        v-for="item in teloes" 
        :key="item.id" 
        :tela="item" 
      />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

.grid-teloes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}
</style>