<script setup>
import { ref, onMounted } from 'vue'
import CardTela from '../telas/CardTela.vue'
import PainelService from '../../services/painel-service'
const teloes = ref([])
const erro = ref(false)
const carregando = ref(true)

const buscarTeloes = async () => {
  try {
    const dados = await PainelService.listarTodos()

    teloes.value = dados.map((painel) => ({
      id: painel.id,
      cidade: painel.cidadeDoPainel,
      endereco: `${painel.enderecoDoPainel} - ${painel.estado} - ${painel.cepDoPainel}`,
      codigo: painel.nomeDoPainel,
      impactos: 'Calculando impactos...',
      imagem:
        'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80',
      possuiCamera: true,
    }))
  } catch (error) {
    console.error('Erro ao buscar painéis:', error)
    erro.value = true
  } finally {
    carregando.value = false
  }
}

onMounted(() => {
  buscarTeloes()
})
</script>

<template>
  <main class="container">
    <h1>Nossos Telões</h1>

    <div v-if="carregando" class="loading">Carregando painéis...</div>

    <div v-else-if="erro" class="error">Não foi possível carregar os painéis no momento.</div>

    <div v-else class="grid-teloes">
      <CardTela v-for="item in teloes" :key="item.id" :tela="item" />
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

.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.error {
  color: #dc2626;
}
</style>
