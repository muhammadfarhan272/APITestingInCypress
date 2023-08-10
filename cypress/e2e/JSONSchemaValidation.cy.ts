// Install ajv Library
// npm install ajv
// first we import the avj 
import Ajv from "ajv"
import { schema } from "../utility/schema";
// second create an instance object of ajv
const AJV = new Ajv()
describe('Schema Validation',()=>{
    it('Schema Validation against response', () => {
        cy.request({
            method : 'GET',
            url : 'https://fakestoreapi.com/products'
        })
        .then((response)=>{
            const validate = AJV.compile(schema);
            const isValid = validate(response.body)
            expect(isValid).to.be.true;
        })
    });
})