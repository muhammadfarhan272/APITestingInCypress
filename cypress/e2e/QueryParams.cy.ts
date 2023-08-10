
import { QueryParameters } from "../../MainPage/QueryParams/QueryParams.po";

let QueryParams: QueryParameters;
describe('API Testing using Query', () => {
    QueryParams = new QueryParameters();
    
    let AuthToken: string | null = null;

    before('Creating access Token ',()=>{
        cy.request({
            method : 'POST',
            url : 'https://simple-books-api.glitch.me/api-clients/',
            headers : {
                'Content-type' : 'application/json'
            },
            body : {
                clientName : 'asd',
                clientEmail : Math.random().toString(5).substring(2)+"@gmail.com"
            }
        })
        .then((response)=>{
            AuthToken = response.body.accessToken;
        })
    })
    it('Passing Query Parameters', () => {
        QueryParams.getQueryParameter();
    });
    it.only('creating new order', () => {
        cy.request({
            method : 'POST',
            url : 'https://simple-books-api.glitch.me/orders/',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer '+AuthToken
            },
            body : {
                "bookId" : 1,
                "customerName" : "xyzabc"
            }
        })
        .then((response)=>{
            expect(response.status).equal(201);
            expect(response.body.created).equal(true);
        })
    });
    it.only('Fetching Orders', () => {
        cy.request({
            method: 'GET',
            url : 'https://simple-books-api.glitch.me/orders/',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer '+AuthToken
            },
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body).have.length(1);
        })
    });
})