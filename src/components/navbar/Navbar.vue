<script setup>
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <span class="logo-icon">📺</span>
        <span class="logo-text">Ultra OOH</span>
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
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

.logo-icon {
  font-size: 1.5rem;
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
}
</style>