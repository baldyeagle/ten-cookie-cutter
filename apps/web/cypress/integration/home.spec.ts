describe('Home page', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })

    it('has a button', () => {
        cy.get('[data-testid="button"]').click()
    })
})