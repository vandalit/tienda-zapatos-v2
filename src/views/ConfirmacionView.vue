<template>
  <div>
    <h2>Confirmación de Orden</h2>
    <p>¡Gracias por su compra! Su número de orden es: {{ numeroOrden }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroOrden: Math.floor(Math.random() * 1000000)  // Genera un número aleatorio
    };
  }
};
</script>

<style scoped>
h2 {
  color: $primary-color;
}
</style>
