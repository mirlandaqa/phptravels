describe('Buscar voo', () => {

    beforeEach(() => {
        cy.visit('https://phptravels.net/')
    })

    it('Buscar voo', () => {
        cy.get('button[id="flights-tab"]').click({force:true})
        cy.scrollTo('top')

        //Selecionar partida
        cy.get('#autocomplete').type('Manaus', {force:true})
        cy.get('[data-index="0"]').click({force:true})

        //Selecionar destino
        cy.get('#autocomplete2').type('São Paulo', {force:true})
        cy.get('div').contains('GRU').click({force:true})


        //Selecionar data da partida
        cy.get('#onereturn > :nth-child(2) > .row > :nth-child(1) > .input-box > .form-group > #departure').click({force:true})
        cy.get('[style="display: block; top: 465.234px; left: 497px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(4) > :nth-child(5)').click()
        cy.scrollTo('top')

        //Selecionar dois passageiros
        cy.get('.col-lg-2 > .input-box > .form-group > .dropdown > .dropdown-toggle').click({force:true})
        cy.scrollTo('top')
        cy.get('.adult_qty > .qty-box > .qtyBtn > .qtyInc > .la').click({force:true})
        cy.scrollTo('top')

        //Buscar voo
        cy.get('button[id="flights-search"]').click({force:true})

    })
})

document.querySelector("#fadein > div:nth-child(34) > div.datepicker-days > table > tbody > tr:nth-child(4) > td:nth-child(5)")