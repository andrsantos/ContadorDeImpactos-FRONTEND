<script setup></script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" class="logo-svg">
          <defs>
            <linearGradient id="frontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FCD34D" />
              <stop offset="100%" stop-color="#EA580C" />
            </linearGradient>
            <linearGradient id="leftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#DB2777" />
              <stop offset="100%" stop-color="#9D174D" />
            </linearGradient>
            <linearGradient id="rightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3B82F6" />
              <stop offset="100%" stop-color="#1E3A8A" />
            </linearGradient>
          </defs>

          <g transform="translate(5, 10)">
            <path
              d="M5,10 L20,25 L20,45 A25,25 0 0,0 70,45 L70,30 L50,15 L50,40 A10,10 0 0,1 30,40 L30,25 Z"
              fill="url(#leftGrad)"
            />
            <path
              d="M45,25 L65,5 L65,40 A20,20 0 0,1 35,50 L40,45 A15,15 0 0,0 60,40 L60,10 Z"
              fill="url(#rightGrad)"
            />
            <path
              d="M15,15 L35,35 L35,45 A15,15 0 0,0 65,45 L65,15 L45,35 L45,45 A5,5 0 0,1 35,45 L35,35 Z"
              fill="url(#frontGrad)"
            />
          </g>

          <g transform="translate(85, 45)">
            <text
              x="0"
              y="0"
              font-family="'Segoe UI', Roboto, Arial, sans-serif"
              font-weight="900"
              font-style="italic"
              font-size="32"
              fill="#1f2937"
              letter-spacing="-1"
            >
              ULTRA OOH
            </text>
            <line x1="0" y1="10" x2="175" y2="10" stroke="#1f2937" stroke-width="2" />
            <text
              x="45"
              y="28"
              font-family="'Segoe UI', Roboto, Arial, sans-serif"
              font-weight="600"
              font-size="14"
              fill="#4b5563"
            >
              Out of Home
            </text>
          </g>
        </svg>
      </router-link>

      <nav class="navbar-nav">
        <router-link to="/" class="nav-link">Início</router-link>
        <span class="nav-badge">Painéis Ativos</span>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
}

.navbar-brand:hover {
  opacity: 0.85;
}

.logo-svg {
  height: 48px;
  width: auto;
  display: block;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-badge {
  background-color: #eff6ff;
  color: #2563eb;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  /* Pequena sombra para destacar a badge */
  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.1);
}
</style>
