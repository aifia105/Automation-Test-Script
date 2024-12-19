import { Builder, By, Browser } from "selenium-webdriver";
import { until } from 'selenium-webdriver';
import * as chai from "chai";

describe("From submit test", async function () {
    let driver;
    
    before(async function () {
        driver = await new Builder().forBrowser(Browser.EDGE).build();
        chai.should();
    });

    it("should submit form", async function () {
        await driver.get("https://demoqa.com/automation-practice-form");
        await driver.findElement(By.id("firstName")).sendKeys("Mohamed");
        await driver.findElement(By.id("lastName")).sendKeys("aifia");
        await driver.findElement(By.id("userEmail")).sendKeys("mohamed40@gmail.com");
        await driver.findElement(By.id("userNumber")).sendKeys("1234567890");
        await driver.findElement(By.id("dateOfBirthInput")).sendKeys("01-01-1990");
        await driver.findElement(By.id("currentAddress")).sendKeys("address");
        
        // Subjects with auto-complete
        const subjectsInput = await driver.findElement(By.id("subjectsInput"));
        await subjectsInput.sendKeys("Maths");
        // Wait explicitly for the auto-complete option to appear
        await driver.wait(until.elementLocated(By.css(".subjects-auto-complete__option")), 5000);
        await driver.findElement(By.css(".subjects-auto-complete__option")).click();
 
        
        // File Upload
        const filePath = "C:/Users/moham/OneDrive/Desktop/peojects.txt";
        await driver.findElement(By.id("uploadPicture")).sendKeys(filePath);
        
        
        // Gender Radio Button
        const maleLabel = await driver.findElement(By.css("label[for='gender-radio-1']"));
        await maleLabel.click();
        
        // Hobbies Checkbox
        const checkbox = await driver.findElement(By.css("label[for='hobbies-checkbox-1']"));
        await checkbox.click();
        
        // State Dropdown (React Select)
        const stateInput = await driver.findElement(By.id("react-select-3-input"));
        // Scroll element into view
        await driver.executeScript("arguments[0].scrollIntoView(true);", stateInput);
        // Add a small delay to let the scroll complete
        await driver.sleep(500);
        await stateInput.sendKeys("NCR");
        await driver.wait(until.elementLocated(By.css("#react-select-3-option-0")), 5000);
        // Use JavaScript click to bypass overlay
        const stateOption = await driver.findElement(By.css("#react-select-3-option-0"));
        await driver.executeScript("arguments[0].click();", stateOption);
        
        // City Dropdown (React Select)
        const cityInput = await driver.findElement(By.id("react-select-4-input"));
        await driver.executeScript("arguments[0].scrollIntoView(true);", cityInput);
        await driver.sleep(500);
        await cityInput.sendKeys("Delhi");
        await driver.wait(until.elementLocated(By.css("#react-select-4-option-0")), 5000);
        const cityOption = await driver.findElement(By.css("#react-select-4-option-0"));
        await driver.executeScript("arguments[0].click();", cityOption);


        await driver.findElement(By.id("submit")).click();

        // Wait for and verify modal
        await driver.wait(until.elementLocated(By.css(".modal-title")), 5000);
        const modalTitle = await driver.findElement(By.css(".modal-title")).getText();
        modalTitle.should.equal("Thanks for submitting the form");

        // Verify form submission details
        const tableRows = await driver.findElements(By.css("tbody tr"));
        const formData = {
            "Student Name": "Mohamed aifia",
            "Student Email": "mohamed40@gmail.com",
            "Gender": "Male",
            "Mobile": "1234567890",
            "Subjects": "Maths",
            "Hobbies": "Sports",
            "Picture": "peojects.txt",
            "Address": "address",
            "State and City": "NCR Delhi"
        };

        for (let row of tableRows) {
            const label = await row.findElement(By.css("td:nth-child(1)")).getText();
            const value = await row.findElement(By.css("td:nth-child(2)")).getText();
            if (formData[label]) {
                value.should.equal(formData[label]);
            }
        }

    });

    after(async function () {
        await driver.quit();
    });

    
});