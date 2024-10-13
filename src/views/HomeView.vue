<template>
  <div class="container">
    <h1 class="text-center my-5">Bienvenidos a la Tienda de Zapatos</h1>
    <div class="row">
      <div v-for="zapato in zapatos" :key="zapato.titulo" class="col-md-4">
        <div class="card product-card">
          <img :src="zapato.imagen" class="card-img-top" :alt="zapato.titulo">
          <div class="card-body">
            <h5 class="card-title">{{ zapato.titulo }}</h5>
            <button class="btn btn-primary mt-2">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'HomeView',
  data() {
    return {
      zapatos: []  // Donde se almacenarán los datos de home.json
    };
  },
  mounted() {
    // Consumimos los datos de home.json usando el servicio
    apiService.getHomeData().then(response => {
      this.zapatos = response.data.mejoreszapatos;
    }).catch(error => {
      console.error('Error al cargar los datos del JSON:', error);
    });
  }
};
</script>

<style scoped>
h1 {
  color: $primary-color;
}
img {
  width: 200px;
  height: auto;
  object-fit: cover;
}
</style>
