describe ('Buscar transfers', () =>  {

    beforeEach(() => {
        cy.visit('https://phptravels.net/')
        cy.get('button[id="flights-tab"]').click({force:true})
        cy.get('#cars-tab').click({force:true})

        //Remover validação de error: uncaught:exception
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Pesquisar transfer para um viajante', () => {

        //Selecionar origem
        cy.wait(3000)
        cy.get('#select2-carfrom-container').click({force:true})
        cy.get('.select2-search__field').type('Manaus')
        cy.scrollTo('top')
        cy.wait(18000)
        cy.get('li').contains('Manaus,Brazil').click()
        cy.scrollTo('top')

        //Selecionar destino
        cy.get('.main_search > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .input-wrapper > .form-group > .input-items > .select2 > .selection > .select2-selection').click({force:true})
        cy.get('.select2-search__field').type('Ipiranga')
        cy.scrollTo('top')
        cy.wait(25000)
        cy.get('li').contains('Ipiranga,Brazil').click()
        cy.scrollTo('top')

        // Selecionar data inicial  
        cy.get('#datefrom').click({force:true})
        cy.get('[style="display: block; top: 406.234px; left: 497px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(4) > :nth-child(6)').click({force:true})

        // Selecionar data final 
        cy.get('[style="display: block; top: 406.234px; left: 604px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(4) > .active').click()
        cy.scrollTo('top')

        //Selecionar quantidade de viajantes
        //1 viajante ja é selecionado por padrão

        //Clicar para pesquisar transfer
        cy.get('#cars-search > .main_search > .row.g-1 > .col-md-1 > .btn-search > #submit').click({force:true})

    })

})