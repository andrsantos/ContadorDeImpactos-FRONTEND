<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      
      <!-- Coluna 1: Logo e Descrição -->
      <div class="footer-col footer-brand-col">
        <div class="footer-logo">
          <span class="logo-icon">📺</span>
          <span class="logo-text">Ultra OOH</span>
        </div>
        <p class="footer-description">
          Telas gigantes de LED em Belém, São Luís, Ananindeua e região, com audiência medida por câmera em cada ponto.
        </p>
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Instagram">IG</a>
          <a href="#" class="social-icon" aria-label="Facebook">FB</a>
          <a href="#" class="social-icon" aria-label="LinkedIn">IN</a>
        </div>
      </div>

      <!-- Coluna 2: Navegação -->
      <div class="footer-col">
        <h3>Navegação</h3>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/">Nossas telas</router-link></li>
          <li><a href="#planejador">Planejador de campanha</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <!-- Coluna 3: Onde Anunciar -->
      <div class="footer-col">
        <h3>Onde anunciar</h3>
        <ul>
          <li><span>Painéis de LED em Belém</span></li>
          <li><span>Painéis de LED em Ananindeua</span></li>
          <li><span>Painéis de LED em São Luís</span></li>
          <li><span>Painéis de LED em Teresina</span></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Contato</h3>
        <ul class="contact-list">
          <li>📞 (91) 98605-2737 · PA</li>
          <li>📞 (86) 98867-2121 · PI</li>
          <li>📧 comercial@ultra.com.br</li>
          <li>📍 Avenida Duque de Caxias, 454, Marco, Belém - PA</li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #09090b 0%, #18181b 100%);
  color: #ffffff;
  padding: 4rem 2rem 3rem 2rem;
  margin-top: 4rem;
  font-family: sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.5fr;
  gap: 2.5rem;
}

.footer-col h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #f3f4f6;
  letter-spacing: 0.5px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-col ul li a,
.footer-col ul li span {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-col ul li a:hover {
  color: #ffffff;
}

/* Coluna da Marca */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.footer-description {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.25);
}

.contact-list li {
  color: #94a3b8;
  font-size: 0.85rem;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>