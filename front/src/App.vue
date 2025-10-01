<template>
  <div id="app">
    <!-- Barra de navegación -->
    <nav class="navbar">
      <!-- Logo a la izquierda -->
      <img src="/Logo.png" alt="Logo" />

      <!-- Links a la derecha -->
      <div class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/biblioteca">Biblioteca</router-link>
      </div>
      <!-- Botón flotante con imagen -->
    </nav>
    <a
      href="https://www.instagram.com/proatecnica.sf/"
      class="floating-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/icon.png.webp" alt="Ir al link" />
    </a>
    <!-- Aquí se mostrarán las vistas (Home, Biblioteca, etc.) -->
    <router-view />
  </div>
</template>

<style>
.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.floating-btn img {
  width: 50%; /* ajusta tamaño de la imagen dentro del círculo */
  height: 50%;
  object-fit: contain; /* mantiene proporción */
}

.floating-btn:hover {
  transform: scale(1.1);
  background-color: #0051e6;
}

html,
body {
  margin: 0;
  padding: 0;
}

img {
  height: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* sombra */
  border-radius: 50%; /* circular */
}

/* Estilos generales */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.navbar img {
  height: 40px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.navbar img:hover {
  transform: scale(1.1);
}

/* Navbar */
.navbar {
  background-color: #376daa; /* azul principal */
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* sombra más marcada y elegante */
  border-radius: 0 0 15px 15px; /* bordes redondeados abajo */
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Contenedor de links */
.nav-links {
  display: flex;
  gap: 2rem;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  position: relative;
  transition: all 0.3s ease;
}

.navbar a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -4px;
  background-color: #070d5a; /* amarillo dorado */
  transition: 0.3s;
}
.navbar a:hover::after,
.navbar a.router-link-exact-active::after {
  width: 100%;
}

.navbar a.router-link-exact-active {
  border-bottom: 2px solid #ffffff;
}

.navbar:hover {
  background-color: #2e5a9e;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

@media (max-width: 900px) {
  .nav-links {
    gap: 1rem;
  }
  .navbar img {
    height: 35px;
  }
  .navbar a {
    font-size: 1rem;
  }
}
</style>
