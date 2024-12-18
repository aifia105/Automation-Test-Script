import { Builder, By, Browser } from 'selenium-webdriver';
import * as chai from 'chai';

describe('SauceDemo', async function() {
    let driver;
    
    before(async function() {
        driver = await new Builder().forBrowser(Browser.EDGE).build();
        chai.should();
    });

    it('should login', async function() {
        // Navigate to the URL
        await driver.get('https://www.saucedemo.com/');
       
        
        // Login
        let userName = await driver.findElement(By.name('user-name'));
        let password = await driver.findElement(By.name('password'));
        
        await userName.sendKeys('standard_user');
        
        await password.sendKeys('secret_sauce');
       
        
        let button = await driver.findElement(By.name('login-button'));
        await button.click();
       
    });
    
    it('should add items to card', async function() {
        // Add items to cart
        const buttons = await driver.findElements(By.css('.btn_primary.btn_inventory'));
        
        for (let button of buttons) {
            await button.click();
           
        }
        // Navigate to cart
        await driver.findElement(By.css('.shopping_cart_link')).click();
      
    });
    
    it('should checkout', async function() {
        
        // Checkout
        await driver.findElement(By.css('.checkout_button')).click();
       
        
        // Fill out information
        await driver.findElement(By.id('first-name')).sendKeys('Amine');
       
        await driver.findElement(By.id('last-name')).sendKeys('Aifia');
      
        await driver.findElement(By.id('postal-code')).sendKeys('8080');
      
        
        // Continue
        await driver.findElement(By.id('continue')).click();
       
    });

    it('should finish', async function() {
        // Finish
        await driver.findElement(By.id('finish')).click();
     
        
        // Check if order is complete
        let complete = await driver.findElement(By.css('.complete-header')).getText();
        
        // Check if order is complete using chai
        
        // expect
        chai.expect(complete.toLowerCase()).equal('THANK YOU FOR YOUR ORDER!'.toLowerCase());
        
        // should
        complete.toLowerCase().should.equal('THANK YOU FOR YOUR ORDER!'.toLowerCase());
    });
    
    after(async function() {
        await driver.quit();
    });
});