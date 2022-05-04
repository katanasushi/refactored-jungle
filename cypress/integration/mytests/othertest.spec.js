import config from './config.json'
it('check all links to ${config.URL1}', () => {

    cy.visit(`${config.URL1}`)
    cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
      cy.request(page.prop('href'))
    })
  
  });
  it('check all links to sites', () => {

    cy.visit(`${config.URL2}`)
    cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
      cy.request(page.prop('href'))
      cy.log(page.prop('href'))
    })
  
  });
  it('check all links to sites', () => {

    cy.visit(`${config.URL3}`, {failOnStatusCode: false})
    cy.get('a[href]:not([href^="mailto\\:"]').each(page => {
      cy.request(page.prop('href'))
    })
    
  });