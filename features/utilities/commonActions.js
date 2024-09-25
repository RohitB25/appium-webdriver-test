import { driver } from '@wdio/globals'
class Common {

    async scrollToElement(element) {
        let isDisplayed = false;

        while (!isDisplayed) {
            const screenSize = await driver.getWindowRect(); // Get the screen dimensions
            const startX = screenSize.width / 2; // Start in the middle of the screen (horizontally)
            const startY = screenSize.height * 0.8; // Start at 80% of the screen height (near bottom)
            const endY = screenSize.height * 0.2; // End at 20% of the screen height (near top)
            isDisplayed = await element.isDisplayed();

            if (!isDisplayed) {
                // Use touch actions to scroll
                await driver.performActions([
                    {
                        type: "pointer",
                        id: "finger1",
                        parameters: { pointerType: "touch" },
                        actions: [
                            { type: "pointerMove", duration: 0, origin: "viewport", x: startX, y: startY, },
                            { type: "pointerDown", button: 0 },
                            { type: "pause", duration: 500 },
                            { type: "pointerMove", duration: 1000, origin: "viewport", x: startX, y: endY, },
                            { type: "pointerUp", button: 0 },
                        ],
                    },
                ]);
                await driver.releaseActions();

            }
        }
    }


    async scrollToText(text)
    { 
        await element.waitForDisplayed({timeout:3000})
        await element.isDisplayed()
        await $(`android = new UiScrollable(new UiSelector().scrollable(true)).scrollIntoText("${text}")`)
    }



}

export default new Common();