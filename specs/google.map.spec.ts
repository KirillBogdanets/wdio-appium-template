import { Phone } from "../src/screenobjects/Phone";

describe("WebdriverIO and Appium, Google Maps Tests", () => {
    beforeEach(async () => {
        await Phone.GoogleMapsScreen.hideOpenedApplication();
        await Phone.GoogleMapsScreen.openGoogleMaps();
        await Phone.GoogleMapsScreen.cleanSearchField();
    });

    it("should be able to search using Search Input field and search results will be valid", async () => {
        await Phone.GoogleMapsScreen.searchAddress("Minsk International Airport");
        const arrayOfResults = await Phone.GoogleMapsScreen.getListOfSearchResultTexts();
        await expect(arrayOfResults[0]).toEqual("Minsk International Airport");
    });

    it("should be able to see valid search place details", async () => {
        await Phone.GoogleMapsScreen.searchAddress("Minsk International Airport");
        await Phone.GoogleMapsScreen.selectSearchResult(0);
        const placeTitle = await Phone.GoogleMapsScreen.getPlaceTitleName();
        await expect(placeTitle).toEqual("National Airport Minsk");
    });
});
