<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" class="logo-ultra">
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
        fill="#FFFFFF"
        letter-spacing="-1"
      >
        ULTRA OOH
      </text>

      <line x1="0" y1="10" x2="175" y2="10" stroke="#FFFFFF" stroke-width="2" />

      <text
        x="45"
        y="28"
        font-family="'Segoe UI', Roboto, Arial, sans-serif"
        font-weight="600"
        font-size="14"
        fill="#FFFFFF"
      >
        Out of Home
      </text>
    </g>
  </svg>
</template>

<style scoped>
.logo-ultra {
  height: 60px;
  width: auto;
  display: block;
}
</style>
