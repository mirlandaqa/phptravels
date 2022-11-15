describe('Buscar hoteis para viagem', () => {
        beforeEach(()=>{
            cy.visit('https://phptravels.net/')
        })


        it('Buscar  cidade', () =>{

            cy.contains('Hotels').should('be.visible')
            cy.get('[aria-labelledby="select2-hotels_city-container"]').click({force:true})
            cy.get('.select2-search__field').type('Capri')
            cy.scrollTo('top')
            cy.contains('Capri,Italy').click()
            cy.scrollTo('top')
            cy.get('span').contains('Capri,Italy').should('be.visible')
        })

        it.only('Buscar data de checkin', () =>{

            cy.contains('Hotels').should('be.visible')
            cy.scrollTo('top')

            cy.get('input[id="checkin"]').click({force:true})
            cy.get('tr:nth-child(4) > td:nth-child(6)').contains('25').click()

            cy.scrollTo('top')
        })
})
