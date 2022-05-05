import urls from '../../fixtures/urls.json'

describe('Undefined links', () => {
  urls.forEach((url) => {
    it(`Should check if links all links on ${url} do not contain undefined`, () => {
        cy.visit(`${url}`, {failOnStatusCode: false})
            cy.on('window:confirm', cy.stub().as('confirm'))
            Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            })
 
            cy.wrap('passed').as('ctrl')
            cy.get('a[href]:not([href^="mailto\\:"]').each($el => {
 
                    if ($el.prop('href').length > 0) {
                        const message = $el.text()
                        expect($el, message).to.have.attr("href").not.contain("undefined")
                        cy.log($el.attr('href'))
                    }
        })
    })
}
,)})