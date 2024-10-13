<template>
  <div class="container">
    <h2 class="text-center my-5">Nuestros Zapatos</h2>
    <div class="row">
      <div v-for="producto in productos" :key="producto.id" class="col-md-4">
        <div class="card product-card">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">
              Precio: <strong>{{ producto.precio_normal }}</strong> <br>
              Promoción: <strong>{{ producto.precio_promo }}</strong>
            </p>
            <button @click="agregarAlCarrito(producto)" class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';
import { mapActions } from 'vuex'; // Para agregar al carrito usando Vuex

export default {
  name: 'ZapatosView',
  data() {
    return {
      productos: []  // Almacena los productos obtenidos de productos.json
    };
  },
  mounted() {
    apiService.getProductosData().then(response => {
      this.productos = response.data.productos;
    }).catch(error => {
      console.error('Error al cargar los productos:', error);
    });
  },
  methods: {
    ...mapActions(['agregarAlCarrito'])
  }
};
</script>

<style scoped>
h2 {
  color: $primary-color;
}
.card {
  margin-bottom: 20px;
}
img {
  width: 200px;
  height: auto;
  object-fit: cover;
}
</style>
