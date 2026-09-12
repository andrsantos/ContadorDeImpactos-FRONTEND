<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import HistoricoTrafegoService from '../../services/historico-trafego-service'
import PainelService from '../../services/painel-service'
import Map from '../map/Map.vue'

const route = useRoute()
const painelId = route.params.id

const carregando = ref(true)
const erro = ref(false)

const trafego = ref(null)
const painelInfo = ref(null)

const frameCamera = ref(
  'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=80',
)
let wsConexao = null

const carregarDados = async () => {
  try {
    carregando.value = true

    trafego.value = await HistoricoTrafegoService.obterResumoPorPainel(painelId)

    const paineis = await PainelService.listarTodos()
    painelInfo.value = paineis.find((p) => String(p.id) === String(painelId)) || null
  } catch (error) {
    console.error('Erro ao buscar detalhes do painel:', error)
    erro.value = true
  } finally {
    carregando.value = false
  }
}

const metricasVeiculos = computed(() => {
  if (!trafego.value) return []

  const t = trafego.value
  const total = t.totalImpactos > 0 ? t.totalImpactos : 1

  return [
    { nome: 'Carros', icone: '🚗', valor: t.carros, pct: Math.round((t.carros / total) * 100) },
    { nome: 'Motos', icone: '🏍️', valor: t.motos, pct: Math.round((t.motos / total) * 100) },
    {
      nome: 'Pedestres',
      icone: '🚶',
      valor: t.pedestres,
      pct: Math.round((t.pedestres / total) * 100),
    },
    {
      nome: 'Pesados',
      icone: '🚌',
      valor: t.veiculosPesados,
      pct: Math.round((t.veiculosPesados / total) * 100),
    },
  ].sort((a, b) => b.valor - a.valor)
})

onMounted(() => {
  carregarDados()

  wsConexao = new WebSocket('wss://oval-staleness-exclusive.ngrok-free.dev/video-stream')

  wsConexao.onmessage = (evento) => {
    frameCamera.value = 'data:image/jpeg;base64,' + evento.data
  }

  wsConexao.onerror = (error) => {
    console.error('Erro na conexão WebSocket de vídeo:', error)
  }
})

onUnmounted(() => {
  if (wsConexao) {
    wsConexao.close()
  }
})
</script>

<template>
  <main class="pagina-detalhes">
    <div v-if="carregando" class="feedback-estado">
      <span class="loader">⚙️</span> Carregando dados do painel...
    </div>

    <div v-else-if="erro" class="feedback-estado erro">
      Não foi possível carregar os dados deste painel. Verifique a conexão com a API.
    </div>

    <div v-else-if="trafego" class="conteudo-painel">
      <header class="detalhes-header">
        <h1>{{ painelInfo ? painelInfo.nomeDoPainel : 'Painel ' + painelId }}</h1>
        <p class="endereco-subtitulo" v-if="painelInfo">
          📍 {{ painelInfo.enderecoDoPainel }} - {{ painelInfo.cidadeDoPainel }},
          {{ painelInfo.estado }} (CEP: {{ painelInfo.cepDoPainel }})
        </p>
      </header>

      <div class="grid-conteudo">
        <div class="coluna-esquerda">
          <div class="camera-container">
            <div class="status-live">🔴 AO VIVO</div>

            <img :src="frameCamera" alt="Stream da Câmera ao Vivo" class="camera-stream" />
          </div>
        </div>

        <aside class="coluna-direita">
          <section class="info-box">
            <h2>Audiência Medida</h2>

            <div class="destaque-audiencia">
              <span class="numero-grande">{{ trafego.totalImpactos.toLocaleString('pt-BR') }}</span>
              <p class="texto-audiencia">
                Impactos totais registrados<br />pela visão computacional
              </p>
            </div>

            <div class="fluxo-tag">FLUXO DETALHADO POR CLASSE</div>

            <div class="lista-fluxo">
              <div v-for="(item, index) in metricasVeiculos" :key="index" class="linha-fluxo">
                <div class="fluxo-label">
                  <span>{{ item.icone }} {{ item.nome }}</span>
                </div>
                <div class="barra-container">
                  <div class="barra-preenchida" :style="{ width: item.pct + '%' }"></div>
                </div>
                <div class="fluxo-valor">
                  <strong>{{ item.valor.toLocaleString('pt-BR') }}</strong>
                  <span class="pct-texto">{{ item.pct }}%</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>

    <Map />
  </main>
</template>

<style scoped>
.pagina-detalhes {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1f2937;
}

.feedback-estado {
  text-align: center;
  padding: 4rem;
  font-size: 1.25rem;
  color: #4b5563;
  background: #f9fafb;
  border-radius: 12px;
}

.feedback-estado.erro {
  color: #dc2626;
  background: #fef2f2;
}

.detalhes-header {
  margin-bottom: 2rem;
}

.detalhes-header h1 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #111827;
}

.endereco-subtitulo {
  font-size: 1.1rem;
  color: #4b5563;
}

.grid-conteudo {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: start;
}

.camera-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.status-live {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(220, 38, 38, 0.9);
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 10;
}

.camera-stream {
  width: 100%;
  height: auto;
  min-height: 400px;
  display: block;
  object-fit: cover;
  opacity: 0.9;
}

.info-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.info-box h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #374151;
}

.destaque-audiencia {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}

.numero-grande {
  font-size: 3rem;
  font-weight: 900;
  color: #2563eb;
  line-height: 1;
}

.texto-audiencia {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 500;
}

.fluxo-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #9ca3af;
  margin-bottom: 1.25rem;
}

.lista-fluxo {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.linha-fluxo {
  display: grid;
  grid-template-columns: 110px 1fr 80px;
  align-items: center;
  gap: 1rem;
}

.fluxo-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4b5563;
}

.barra-container {
  width: 100%;
  height: 8px;
  background-color: #f3f4f6;
  border-radius: 4px;
  overflow: hidden;
}

.barra-preenchida {
  height: 100%;
  background-color: #f59e0b;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.fluxo-valor {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
}

.fluxo-valor strong {
  font-size: 1rem;
  color: #1f2937;
}

.pct-texto {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 600;
}
</style>
