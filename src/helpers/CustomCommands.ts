import { ClickOptions } from "webdriverio/build/types";

const customCommands = {
    async before(): Promise<void> {
        await browser.overwriteCommand(
            "click",
            async function (origClickFunction, options?: ClickOptions) {
                await this.waitForDisplayed({ timeout: driver.config.params.androidDefaultTimeout });
                return origClickFunction(options);
            },
            true,
        );
    },
};

export { customCommands };
