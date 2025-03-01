/*import { test , expect } from "@playwright/test";

test("should add a todo", async ({ page }) => {
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/23292/retry");

    const dragEle = await page.$("//body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[2]");
    const dropEle = await page.$("tr[class='no-records'] td");

    await page.dragAndDrop(dragEle, dropEle);
});
*/
import { test, expect } from '@playwright/test';

test("should add a todo", async ({page}) => {
    
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/23292/retry'); // Change to your actual URL

    // Select all rows in the "ToDo Tasks" table
    const rows = await page.$$('table:nth-of-type(1) tbody tr');

    for (const row of rows) {
        const idElement = await row.$('td:nth-of-type(1)');
        if (idElement) {
            const id = parseInt(await idElement.textContent() || '0', 10);

            // Check if ID is an odd number
            if (id % 2 !== 0) {
                const source = row;
                const target = await page.$("div[class='col-md-6'] div[class='tasks-wrapper']"); // Completed Tasks table

                if (target) {
                    await source.hover();
                    await page.mouse.down();
                    await target.hover();
                    await page.mouse.up();
                    console.log(`Moved task with ID ${id} to Completed Tasks`);
                }
            }
        }
    }

    // Optional: Take a screenshot to verify the result
    await page.screenshot({ path: 'result.png' });

    // Close the browser after a delay to review results
    await page.waitForTimeout(5000);
 
});
