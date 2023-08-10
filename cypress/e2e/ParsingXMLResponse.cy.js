//install xml2ts library 
const xml2js = require('xml2js')
const parser = xml2js.Parser({explicitArray : false});
 describe ('XML Parsing',()=>{
    const xmlPayLoad = "<Pet><id>0</id><Category><id>0</id><name>Dog</name></Category><name>Jimmy</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet>"
    let petId = null;
    before('Creating Pet',()=>{
      
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/pet',
            body : xmlPayLoad,
            headers : {
                'content-type': 'application/xml',
                'accept' : 'application/xml'
            }
        })
        .then((response) => {
          
          expect(response.status).to.equal(200);
          parser.parseString(response.body,(err,result)=>{
            petId= result.Pet.id;
          })  
        });
    })
    it('Fetching Pet Data-parsing xml response',()=>{
      
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/pet/'+petId,
            headers : {
                'accept' : 'application/xml'
            }
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          parser.parseString(response.body,(err,result)=>{
            expect(result.Pet.name).to.equal('Jimmy');
            expect(result.Pet.id).to.equal(petId);
          })  
        });
    })
})
