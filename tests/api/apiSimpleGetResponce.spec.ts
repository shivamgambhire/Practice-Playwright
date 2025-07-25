import {test, expect} from '@playwright/test';


//code for get the responce from endopint and validate responce code

test.describe.parallel('Simple API responce - positive respoce code', () =>{

    const baseURL = 'https://reqres.in/api'

    test('Get responce from API - 200', async ({request}) => {
        //const responce = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        
        const responce = await request.get(`${baseURL}/users/5`,
                {
                    headers: {                                  // setting the header for the request because some API requires header to be set as its restricted
                            'x-api-key': 'reqres-free-v1'
                            }
                })        //hitting the end point using request fixture
        
        expect(responce.status()).toBe(200);        //checking responce code should be OK '200'

        //parse responce data into JSON
        const jsonResponce = JSON.parse(await responce.text())
        await console.log(jsonResponce)

        //checking the id of the user - where data is JSON key from json api body and inside that id is the key amd provided value
        await expect(jsonResponce.data.id).toBe(5)
        await expect(jsonResponce.data.first_name).toBe('Charles')
        
        //toBetruthy ensure that the value is boolean value it will not check the actual value just make sure null, undefined, "" , NaN, false and 0 should not be present
        await expect(jsonResponce.data.email).toBeTruthy() 

    });

    test('Get responce from API - negative respoce code ' , async({request}) =>{
        //navigate to endpoint
        const responce = await request.get(`${baseURL}/users/invalide-url`,
                {
                     headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            })

        //checking that end point is nto having the provided URL and should returns 404 status code 
        expect(responce.status()).toBe(404)
    })
})