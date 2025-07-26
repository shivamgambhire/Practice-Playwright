import {test,expect} from "@playwright/test";
import {randomNumber,randonString} from "../../utils/data-Helper";

test.only('Print random Number', async({page}) => {

    let randomNo = await randomNumber()
    console.log("random number is = "+randomNo)

    let randomString = await randonString()
    console.log("Random String= "+ randomString)

})