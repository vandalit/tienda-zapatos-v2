<template>
  <div>
    <h1>Bienvenidos a la Tienda de Zapatos</h1>
    <div v-if="zapatos.length">
      <div v-for="zapato in zapatos" :key="zapato.titulo">
        <h3>{{ zapato.titulo }}</h3>
        <img :src="zapato.imagen" :alt="zapato.titulo" />
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
