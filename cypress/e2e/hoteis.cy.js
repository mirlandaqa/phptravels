describe('Buscar hoteis para viagem', () => {
        beforeEach(()=>{
            cy.visit('https://phptravels.net/')
        })


        it.only('Pesquisar hoteis', () =>{

            //Selecionar cidade
            cy.get('[aria-labelledby="select2-hotels_city-container"]').click({force:true})
            cy.get('.select2-search__field').type('Capri')
            cy.scrollTo('top') //Voltar página para o topo
            cy.wait(14000)
            cy.contains('Capri,Italy').click()
            cy.scrollTo('top')
            cy.get('span').contains('Capri,Italy').should('be.visible')

            //Selecionar data de checkin
            cy.get('input[id="checkin"]').click({force:true})
            cy.get('tr:nth-child(4) > td:nth-child(6)').contains('25').click()
            cy.scrollTo('top')
  
            //Selecionar data de checkout
            cy.get('tr:nth-child(4) > td.day.active').contains('26').click()
            cy.scrollTo('top')

            //Buscar dados
            cy.get('#hotels-search > .main_search > div.g-1 > .col-md-1 > .btn-search > #submit').click({force:true})
        })

    })
