const { Browser, By, Builder } = require('selenium-webdriver');
const assert = require('assert');

async function example() {
    let driver = await new Builder().forBrowser(Browser.EDGE).build();

    try {
        await driver.get('https://www.saucedemo.com/');
        await driver.sleep(1000); // Add delay after navigation

        let userName = await driver.findElement(By.name('user-name'));
        let password = await driver.findElement(By.name('password'));
        
        await userName.sendKeys('standard_user');
        await driver.sleep(500); // Add delay after username
        await password.sendKeys('secret_sauce');
        await driver.sleep(500); // Add delay after password

        let button = await driver.findElement(By.name('login-button'));
        await button.click();
        await driver.sleep(1000); // Add delay after login

        const buttons = await driver.findElements(By.css('.btn_primary.btn_inventory'));
        
        for (let button of buttons) {
            await button.click();
            await driver.sleep(500); // Add delay after each item added
        }

        await driver.findElement(By.css('.shopping_cart_link')).click();
        await driver.sleep(1000); // Add delay after cart navigation

        await driver.findElement(By.css('.checkout_button')).click();
        await driver.sleep(1000); // Add delay after checkout click

        await driver.findElement(By.id('first-name')).sendKeys('Amine');
        await driver.sleep(500); // Add delay after first name
        await driver.findElement(By.id('last-name')).sendKeys('Aifia');
        await driver.sleep(500); // Add delay after last name
        await driver.findElement(By.id('postal-code')).sendKeys('8080');
        await driver.sleep(500); // Add delay after postal code

        await driver.findElement(By.id('continue')).click();
        await driver.sleep(1000); // Add delay after continue

        await driver.findElement(By.id('finish')).click();
        await driver.sleep(1000); // Add delay after finish

        let complete = await driver.findElement(By.css('.complete-header')).getText();
        assert.equal(complete.toLowerCase(), 'THANK YOU FOR YOUR ORDER!'.toLowerCase());

    } catch(e) {
        console.error(e);
    } 
}

example();