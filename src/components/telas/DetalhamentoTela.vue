<script setup>
import { ref } from 'vue';

const ponto = ref({
  id: 1,
  endereco: 'Avenida Duque de Caxias, 454, Marco, Belém PA - 66093-026',
  imagem: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=80',
    audienciaTotal: '4.0M',
  audienciaSubtitulo: 'impactos por mês, contados pela câmera do ponto',
  fluxoTipo: 'FLUXO DE VEÍCULOS · MEDIDO POR CÂMERA',
  veiculos: [
    { nome: 'Carros', icone: '🚗', valor: '2.5M', porcentagem: 80 },
    { nome: 'Motos', icone: '🏍️', valor: '438.4K', porcentagem: 35 },
    { nome: 'Caminhões e ônibus', icone: '🚚', valor: '90.7K', porcentagem: 15 },
    { nome: 'Pedestres', icone: '🚶', valor: '72.1K', porcentagem: 10 }
  ],
  cameraInfo: 'Impactos de pessoas detectadas pela câmera (GoodiCam): 4.0M/mês',
  raioInfo: 'No raio de 2 km: 26.9K moradores (IBGE) e 6.611 empresas.',

  especificacoes: [
    { icone: '📏', label: 'Tamanho da tela', valor: '3 × 5 m' },
    { icone: '🖥️', label: 'Resolução', valor: '960×2180px' },
    { icone: '🕒', label: 'Operação diária', valor: '06:00 às 01:00' },
    { icone: '🔄', label: 'Inserções por dia', valor: '4.608' },
    { icone: '👥', label: 'Classe predominante no raio', valor: 'Classe B' },
  ],
  contatos: [
    { tipo: 'phone', valor: '(91) 98605-2737 · PA' },
    { tipo: 'phone', valor: '(86) 98867-2121 · PI' },
    { tipo: 'email', valor: 'comercial@ultra.com.br' },
  ]
});

const nomeForm = ref('');
const whatsAppForm = ref('');

const solicitarProposta = () => {
  console.log('Solicitar proposta para:', ponto.value.endereco, nomeForm.value, whatsAppForm.value);
};
</script>

<template>
  <main class="pagina-detalhes">
    <!-- Título Principal -->
    <header class="detalhes-header">
      <h1>{{ ponto.endereco }}</h1>
    </header>

    <div class="grid-conteudo">
      <!-- Coluna da Esquerda: Imagem e Informações Técnicas -->
      <div class="coluna-esquerda">
        <img :src="ponto.imagem" :alt="ponto.endereco" class="imagem-principal" />

        <!-- Seção: Audiência medida -->
        <section class="info-box">
          <h2>Audiência medida</h2>
          
          <div class="destaque-audiencia">
            <span class="numero-grande">{{ ponto.audienciaTotal }}</span>
            <p class="texto-audiencia">{{ ponto.audienciaSubtitulo }}</p>
          </div>

          <div class="fluxo-tag">{{ ponto.fluxoTipo }}</div>

          <!-- Barras de progresso para cada tipo -->
          <div class="lista-fluxo">
            <div v-for="(item, index) in ponto.veiculos" :key="index" class="linha-fluxo">
              <div class="fluxo-label">
                <span>{{ item.icone }} {{ item.nome }}</span>
              </div>
              <div class="barra-container">
                <div class="barra-preenchida" :style="{ width: item.porcentagem + '%' }"></div>
              </div>
              <div class="fluxo-valor">
                <strong>{{ item.valor }}</strong>
              </div>
            </div>
          </div>

          <div class="info-secundaria mt-3">
            <p>{{ ponto.cameraInfo }}</p>
          </div>

          <div class="info-secundaria mt-2">
            <span class="icone-pequeno">🗺️</span>
            <p>{{ ponto.raioInfo }}</p>
          </div>
        </section>

        <!-- Seção: Especificações -->
        <section class="info-box">
          <h2>Especificações</h2>
          <div class="grid-especificacoes">
            <div v-for="(espec, index) in ponto.especificacoes" :key="index" class="item-espec">
              <span class="icone-espec">{{ espec.icone }}</span>
              <div>
                <span class="label-espec">{{ espec.label }}</span>
                <p class="valor-espec">{{ espec.valor }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Coluna da Direita: Botões de Ação e Formulário -->
      <aside class="coluna-direita">
        <!-- Bloco: Quero este ponto -->
        <div class="action-box">
          <h3>Quero este ponto</h3>
          <button class="btn btn-primary full-width mb-12">Adicionar ao planejamento</button>
          <button class="btn btn-secundario full-width">📞 Pedir proposta no WhatsApp</button>
        </div>

        <!-- Bloco: Formulário de Contato -->
        <div class="action-box">
          <h3>Prefere que a gente chame?</h3>
          <form @submit.prevent="solicitarProposta" class="form-contato">
            <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" id="nome" v-model="nomeForm" class="form-control" placeholder="Seu nome completo" required />
            </div>
            <div class="form-group">
              <label for="whatsapp">WhatsApp</label>
              <input type="tel" id="whatsapp" v-model="whatsAppForm" class="form-control" placeholder="(DD) 99999-9999" required />
            </div>
            <button type="submit" class="btn btn-primary full-width">📧 Solicitar contato</button>
          </form>
        </div>

        <!-- Bloco: Contatos Diretos -->
        <div class="info-box sem-borda mt-2">
          <ul class="lista-contatos">
            <li v-for="(contato, index) in ponto.contatos" :key="index">
              <span v-if="contato.tipo === 'phone'" class="icone-pequeno">📞</span>
              <span v-if="contato.tipo === 'email'" class="icone-pequeno">📧</span>
              {{ contato.valor }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
/* Estilos gerais da página */
.pagina-detalhes {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
  color: #1f2937;
}

.detalhes-header h1 {
  margin-bottom: 2rem;
  font-size: 1.75rem;
  font-weight: 700;
}

/* Grid de duas colunas */
.grid-conteudo {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* Componentes reutilizáveis de estilo */
.info-box {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
}

.info-box.sem-borda {
  border: none;
  background: transparent;
}

.action-box {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

h2, h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

h3 {
  font-size: 1.125rem;
}

/* Imagem */
.imagem-principal {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

/* Destaque Audiência */
.destaque-audiencia {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
}

.numero-grande {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  background-color: #fef08a; 
  padding: 0 8px;
  border-radius: 4px;
}

.texto-audiencia {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.4;
}

.fluxo-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #6b7280;
  margin: 1.25rem 0 1rem 0;
  text-transform: uppercase;
}

/* Barras de Progresso de Veículos */
.lista-fluxo {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.linha-fluxo {
  display: grid;
  grid-template-columns: 160px 1fr 70px;
  align-items: center;
  gap: 1rem;
}

.fluxo-label {
  font-size: 0.9rem;
  color: #374151;
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
}

.fluxo-valor {
  font-size: 0.9rem;
  color: #1f2937;
  text-align: right;
}

.info-secundaria {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.9rem;
}

.icone-pequeno {
  font-size: 1.1rem;
}

.mt-3 {
  margin-top: 1rem;
}

/* Especificações */
.grid-especificacoes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.item-espec {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.icone-espec {
  font-size: 1.5rem;
}

.label-espec {
  font-size: 0.85rem;
  color: #6b7280;
}

.valor-espec {
  font-size: 1rem;
  font-weight: 600;
}

/* Botões */
.btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 0.95rem;
}

.btn-primary {
  background-color: #2563eb; 
  color: #fff;
}

.btn-secundario {
  background-color: #10b981; 
  color: #fff;
}

.full-width {
  width: 100%;
}

.mb-12 {
  margin-bottom: 0.75rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

/* Formulário */
.form-contato .form-group {
  margin-bottom: 1rem;
}

.form-contato label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #374151;
}

.form-contato .form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
}

/* Lista de Contatos */
.lista-contatos {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #374151;
  font-size: 0.9rem;
}

.lista-contatos li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>