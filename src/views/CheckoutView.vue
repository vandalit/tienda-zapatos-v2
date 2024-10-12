<template>
  <div>
    <h2>Checkout</h2>
    <form @submit.prevent="procesarCompra">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="form.nombre" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required />
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" class="form-control" id="telefono" v-model="form.telefono" required />
      </div>
      <button type="submit" class="btn btn-primary">Confirmar Compra</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        telefono: ''
      }
    };
  },
  methods: {
    procesarCompra() {
      alert('Compra procesada con éxito');
      this.$router.push('/confirmacion');  // Redirecciona a la página de confirmación
    }
  }
};
</script>

<style scoped>
h2 {
  color: $primary-color;
}
</style>
