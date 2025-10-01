<template>
  <section class="hero">
    <div class="overlay">
      <h1>Bienvenido a Mi Página</h1>
      <p>Explora nuestra biblioteca virtual y descubre todos los recursos.</p>
      <router-link to="/biblioteca" class="btn"> Ir a la Biblioteca Virtual </router-link>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  background: url("/hero.jpg") no-repeat center center/cover; /* tu imagen */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  color: white;
  padding: 1rem;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* oscurece la foto para leer mejor */
  padding: 2rem;
  border-radius: 10px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background: #ffcc00;
  color: black;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  background: #ffaa00;
}
</style>
