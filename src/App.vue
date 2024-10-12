<template>
  <div id="app">
    <!-- Encabezado o barra de navegación -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Tienda de Zapatos</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/zapatos">Zapatos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/checkout">Checkout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- El componente RouterView renderizará las rutas activas aquí -->
    <main class="container">
      <RouterView />
    </main>

    <!-- Pie de página -->
    <footer class="bg-light text-center py-3">
      <p>&copy; 2024 Tienda de Zapatos</p>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Estilos globales para App.vue */
header {
  margin-bottom: 20px;
}

footer {
  margin-top: 20px;
  background-color: #f8f9fa;
}
</style>





<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
