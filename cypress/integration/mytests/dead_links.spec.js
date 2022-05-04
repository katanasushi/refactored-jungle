import urls from '../../fixtures/urls.json'

describe('Dead links', () => {
  urls.forEach((url) => {
    it.only(`Should check dead links on ${url}`, () => {
        cy.visit(`${url}`, 
        {failOnStatusCode: false}
        )
        cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
          cy.request(page.prop('href')).then((resp) => {
            cy.log(resp.status)
            // redirect status code is 302
            expect(resp.status).to.not.eq(404)})
          cy.log(page.prop('href'))
          //cy.log(page.resp.status)
        })
    })
  })
})