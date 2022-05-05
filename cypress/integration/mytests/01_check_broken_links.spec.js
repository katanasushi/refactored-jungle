import urls from '../../fixtures/urls.json'

describe('Responses of links', () => {
  urls.forEach((url) => {
    it(`Should check dead links on ${url} including contents of pages returning 404`, () => {
        cy.visit(`${url}`,
        {failOnStatusCode: false}
        )
        cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
          cy.request(page.prop('href')).then((resp) => {
            cy.log(`${resp.status} on ${page.prop('href')}`)
            expect(resp.status).to.not.eq(404)
        })
        })
    })
    it(`Should check dead links on ${url} excluding contents of pages returning 404`, () => {
        cy.visit(`${url}`
        )
        cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
          cy.request(page.prop('href')).then((resp) => {
            cy.log(`${resp.status} on ${page.prop('href')}`)
            expect(resp.status).to.not.eq(404)
        })
        })
    })
  })
})