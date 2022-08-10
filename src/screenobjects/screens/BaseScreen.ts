import ApplicationsBar from "../components/ApplicationsBar";
import { getCoordinatesToSwipeUtil } from "../../helpers/Utils";

class BaseScreen {
    ApplicationsBar: ApplicationsBar;
    constructor() {
        this.ApplicationsBar = new ApplicationsBar();
    }

    /**
     * Swiping from the bottom to the almost middle of the phone
     */
    async swipeFromBottomToUp(): Promise<void> {
        const { anchor, height, endPoint } = await getCoordinatesToSwipeUtil();
        await driver.touchPerform([
            {
                action: "press",
                options: {
                    x: anchor,
                    y: height,
                },
            },
            {
                action: "wait",
                options: {
                    ms: 100,
                },
            },
            {
                action: "moveTo",
                options: {
                    x: anchor,
                    y: endPoint,
                },
            },
            {
                action: "wait",
                options: {
                    ms: 200,
                },
            },
            {
                action: "release",
                options: {},
            },
        ]);
    }

    /**
     * Opening Applications Bar and choosing Google Maps
     */
    async openGoogleMaps(): Promise<void> {
        await this.swipeFromBottomToUp();
        await (await this.ApplicationsBar.GoogleMapsIcon).click();
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(element: WebdriverIO.Element, isShown = true): Promise<boolean | void> {
        return element.waitForDisplayed({
            reverse: !isShown,
        });
    }

    /**
     * Hidding opened application and navigation to Home Screen
     */
    async hideOpenedApplication(): Promise<void> {
        await driver.background(-1);
    }
}

export default BaseScreen;
