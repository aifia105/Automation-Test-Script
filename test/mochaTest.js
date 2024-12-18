import { Builder, By, Browser } from 'selenium-webdriver';
import * as chai from 'chai';


describe('SauceDemo', async () => {
    it('should login and buy items', async () => {

        let driver = await new Builder().forBrowser(Browser.EDGE).build();
        chai.should(); // Initialize should

            try {
                // Navigate to the URL
                await driver.get('https://www.saucedemo.com/');
                await driver.sleep(1000); // Add delay after navigation
        
                // Login
                let userName = await driver.findElement(By.name('user-name'));
                let password = await driver.findElement(By.name('password'));
                
                await userName.sendKeys('standard_user');
                await driver.sleep(500); // Add delay after username
                await password.sendKeys('secret_sauce');
                await driver.sleep(500); // Add delay after password
        
                let button = await driver.findElement(By.name('login-button'));
                await button.click();
                await driver.sleep(1000); // Add delay after login
        
                // Add items to cart
                const buttons = await driver.findElements(By.css('.btn_primary.btn_inventory'));
                
                for (let button of buttons) {
                    await button.click();
                    await driver.sleep(500); // Add delay after each item added
                }
        
                // Navigate to cart
                await driver.findElement(By.css('.shopping_cart_link')).click();
                await driver.sleep(1000); // Add delay after cart navigation
        
                // Checkout
                await driver.findElement(By.css('.checkout_button')).click();
                await driver.sleep(1000); // Add delay after checkout click
        
                // Fill out information
                await driver.findElement(By.id('first-name')).sendKeys('Amine');
                await driver.sleep(500); // Add delay after first name
                await driver.findElement(By.id('last-name')).sendKeys('Aifia');
                await driver.sleep(500); // Add delay after last name
                await driver.findElement(By.id('postal-code')).sendKeys('8080');
                await driver.sleep(500); // Add delay after postal code
        
                // Continue
                await driver.findElement(By.id('continue')).click();
                await driver.sleep(1000); // Add delay after continue
        
                // Finish
                await driver.findElement(By.id('finish')).click();
                await driver.sleep(1000); // Add delay after finish
        
                // Check if order is complete
                let complete = await driver.findElement(By.css('.complete-header')).getText();
        
                // Check if order is complete using chai
        
                // expect
                chai.expect(complete.toLowerCase()).equal('THANK YOU FOR YOUR ORDER!'.toLowerCase());
        
                // should
                complete.toLowerCase().should.equal('THANK YOU FOR YOUR ORDER!'.toLowerCase());
        
        
        
                
        
        
            } catch(e) {
                console.error(e);
            } finally {
                await driver.quit();
            }
    });
});