describe('Tienda de Zapatos', () => {
    it('Carga la página de inicio correctamente', () => {
      cy.visit('/');
      cy.contains('Bienvenidos a la Tienda de Zapatos').should('be.visible');
    });
  
    it('Navega a la página de productos', () => {
      cy.visit('/');
      cy.get('a.nav-link').contains('Zapatos').click();
      cy.url().should('include', '/zapatos');
      cy.contains('Nuestros Zapatos').should('be.visible');
    });
  
    it('Agrega un producto al carrito', () => {
      cy.visit('/zapatos');
      cy.contains('Agregar al carrito').click();
      // Aquí podrías agregar más lógica para verificar el estado del carrito
    });
  });
  