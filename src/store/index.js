import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      carrito: [] // Aquí se almacenarán los productos agregados al carrito
    };
  },
  mutations: {
    agregarProducto(state, producto) {
      state.carrito.push(producto); // Agregar producto al carrito
    },
    eliminarProducto(state, productoId) {
      state.carrito = state.carrito.filter(producto => producto.id !== productoId); // Eliminar producto del carrito
    }
  },
  actions: {
    agregarAlCarrito({ commit }, producto) {
      commit('agregarProducto', producto); // Llamar a la mutación para agregar al carrito
    }
  },
  getters: {
    productosEnCarrito(state) {
      return state.carrito; // Obtener productos en el carrito
    }
  }
});

export default store;
