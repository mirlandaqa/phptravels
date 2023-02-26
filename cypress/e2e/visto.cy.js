
//Legado
describe('Buscar visto', () => {

    beforeEach(()=>{
        cy.visit('https://phptravels.net/')

        cy.get('button[id="flights-tab"]').click({force:true})
    })

    it('Buscar visto', ()=>{

        cy.get('#visa-tab').click({force:true})
        
    })
})