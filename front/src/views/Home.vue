<template>
  <div class="hero-container">
    <div class="hero">
      <div class="overlay">
        <h1>Escuela Experimental ProA Técnica</h1>
      </div>
    </div>
  </div>

  <!-- Sección de estadísticas -->
  <div class="stats-container">
    <div class="stat" v-for="stat in stats" :key="stat.label">
      <img :src="stat.icon" alt="" />
      <div class="number">{{ stat.current }}</div>
      <div class="label">{{ stat.label }}</div>
    </div>
  </div>

  <!-- Sección con imagen y texto -->
  <div class="body-container">
    <img ref="logo" :class="{ visible: isVisible }" src="/Logo.png" alt="Logo Escuela" />
    <div class="text-container">
      <h2>Bienvenidos a la Escuela Experimental ProA Técnica</h2>
      <p>
        Ubicada en San Francisco, Córdoba, Argentina, nuestra escuela ofrece una educación técnica
        de excelencia, enfocada en el desarrollo integral de los estudiantes. Contamos con proyectos
        innovadores, talleres prácticos y programas de internacionalización que preparan a los
        jóvenes para los desafíos del mundo moderno.
      </p>
      <p>
        Nuestro compromiso es formar estudiantes competentes, creativos y responsables, fomentando
        valores de respeto, colaboración y aprendizaje continuo.
      </p>
    </div>
  </div>

  <!-- Carrusel -->
  <div class="carousel-container">
    <div class="carousel">
      <h2>Nuestros proyectos</h2>
      <button class="arrow left" @click="prevSlide">&#10094;</button>
      <div class="carousel-slide">
        <img :src="slides[current].image" alt="Slide" />
        <div class="caption">{{ slides[current].text }}</div>
      </div>
      <button class="arrow right" @click="nextSlide">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import slide1 from "/imagen.jpg";

// Animación del logo
const logo = ref(null);
const isVisible = ref(false);

function handleScroll() {
  if (logo.value) {
    const rect = logo.value.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top < viewportHeight * 0.75) {
      isVisible.value = true;
    }
  }
}

// Datos y animación de estadísticas
const stats = ref([
  { label: "ESTUDIANTES", icon: "/file-LSPVMpLN8HxB5VhzXWxw7q.png", target: 750, current: 0 },
  { label: "DOCENTES", icon: "/file-LSPVMpLN8HxB5VhzXWxw7q.png", target: 230, current: 0 },
  {
    label: "AÑOS DE TRAYECTORIA",
    icon: "/file-LSPVMpLN8HxB5VhzXWxw7q.png",
    target: 10,
    current: 0,
  },
]);

function animateNumbers() {
  stats.value.forEach((stat) => {
    let start = 0;
    const end = stat.target;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      stat.current = start;
      if (start >= end) clearInterval(timer);
    }, stepTime);
  });
}

// Carrusel
const slides = ref([
  { image: slide1, text: "Feria de ciencias" },
  { image: "/image2.jpg", text: "Laboratorio de ciencias" },
  { image: "/image3.jpg", text: "Taller de robótica" },
]);
const current = ref(0);

function nextSlide() {
  current.value = (current.value + 1) % slides.value.length;
}

function prevSlide() {
  current.value = (current.value - 1 + slides.value.length) % slides.value.length;
}

// Montaje
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  animateNumbers();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Hero */
.hero-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.hero {
  width: 90%;
  max-width: 1300px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  font-family: "Roboto", sans-serif;
  background: url("/hero.jpg") no-repeat center center/cover;
  position: relative;
  color: white;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* Estadísticas */
.stats-container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  background-color: #f0f2f5;
  padding: 3rem 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.stat img {
  height: 50px;
  margin-bottom: 1rem;
}

.stat .number {
  font-size: 2rem;
  font-weight: bold;
  color: #008ae6;
  margin-bottom: 0.5rem;
}

.stat .label {
  font-size: 1rem;
  color: #0a3d62;
}

/* Sección con imagen y texto */
.body-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  margin-top: 6rem;
  padding-left: 6rem;
  padding-right: 2rem;
  flex-wrap: wrap;
}

.body-container img {
  height: 400px;
  border-radius: 50%;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  opacity: 0;
  transform: translateY(50px) rotate(-20deg);
  transition: all 0.8s ease-out;
}

.body-container img.visible {
  opacity: 1;
  transform: translateY(0) rotate(0deg);
}

.text-container {
  max-width: 600px;
  font-family: "Roboto", sans-serif;
  color: #1a1a1a;
}

.text-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0a3d62;
}

.text-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #333;
}

/* Carrusel */
.carousel-container {
  width: 80%;
  max-width: 1500px;
  margin: 4rem auto;
  position: relative;
}

.carousel {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  color: #0a3d62;
  margin: 1rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
}

.carousel-slide img {
  width: 100%;
  height: 600px;
  object-fit: cover; /* mantiene proporción y recorta si es necesario */
  border-radius: 0; /* asegúrate de que la imagen no tenga border-radius */
}

.caption {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 2rem;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}

.arrow:hover {
  background-color: rgba(255, 255, 255, 1);
}

/* Responsive */
@media (max-width: 900px) {
  .stats-container {
    flex-direction: column;
    gap: 2rem;
  }

  .body-container {
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .body-container img {
    margin-bottom: 2rem;
    height: 300px;
  }

  .text-container {
    max-width: 100%;
    text-align: center;
  }

  .carousel-slide img {
    height: 250px;
  }
}
</style>
