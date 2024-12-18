# Selenium Automation Test Script

This repository contains a Selenium automation script for learning purposes. The script demonstrates how to test the functionality of the [Sauce Demo](https://www.saucedemo.com/) website. It is intended for educational and practice use to understand automation testing concepts.

## Features

- Automates login functionality.
- Adds multiple items to the shopping cart.
- Proceeds to the checkout page.
- Completes the checkout process.
- Verifies the order completion.

## Prerequisites

Ensure the following tools and libraries are installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/aifia105/Automation-Test-Scripts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Automation-Test-Scripts/test
   ```

3. Install the required dependencies:

   ```bash
   npm install selenium-webdriver assert
   ```

## Usage

1. Run the script:

   ```bash
   node index.js
   ```

2. The script will:
   - Navigate to the Sauce Demo website.
   - Log in using predefined credentials (`standard_user` / `secret_sauce`).
   - Add all items to the cart.
   - Proceed through the checkout process.
   - Verify that the order has been completed successfully.

## Script Details

- **File Name:** `index.js`
- **Browser:** Microsoft Edge (Can be modified to other browsers like Chrome or Firefox by changing `Browser.EDGE` to `Browser.CHROME` or `Browser.FIREFOX`).
- **Delays:** Includes delays using `driver.sleep()` to mimic user interaction.

## Dependencies

- `selenium-webdriver`: For browser automation.
- `assert`: For validating test results.

## Example Output

If the script runs successfully, you will see the following message in the console:

```text
Test passed: Order completed successfully.
```

If an error occurs, it will be logged to the console.

## Contribution

Feel free to fork this repository and submit pull requests for any improvements or additional features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[aifia105](https://github.com/aifia105)

---

### Note:
This script is for learning purposes only and uses a demo website provided by Sauce Labs. Please do not use this for malicious purposes.
