import {test,expect} from "@playwright/test";

test.describe("API POST request method", () => {

    const baseURL = 'https://reqres.in/api'
    //Post request method
    test.only("POST request method", async({request}) => {

        const responce = await request.post(`${baseURL}/users`,{
            data:{
                id: 1001,
            },
             headers: {                                  // setting the header for the request because some API requires header to be set as its restricted
                            'x-api-key': 'reqres-free-v1'
                    }
        })
        
        const responceBody = await JSON.parse(await responce.text())
        await expect(responceBody.id).toBe(1001)
        await expect(responceBody.createdAt).toBeTruthy() // toBetruthy ensure that the value is boolean value it will not check the actual value just make sure null, undefined, "" , NaN, false and 0 should not be present
    })
})