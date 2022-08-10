import BaseScreen from "./BaseScreen";

class GoogleMapsScreen extends BaseScreen {
    get SearchAddressInputField() {
        return $('//android.widget.EditText[@resource-id="com.google.android.apps.maps:id/search_omnibox_edit_text"]');
    }

    get SearchAddressInputBox() {
        return $('//android.widget.EditText[@resource-id="com.google.android.apps.maps:id/search_omnibox_text_box"]');
    }

    get ClearSearchFieldIcon() {
        return $("~Clear");
    }

    get SearchResultsList(): WebdriverIO.ElementArray {
        return $$('//android.support.v7.widget.RecyclerView[@resource-id="com.google.android.apps.maps:id/recycler_view"]//android.widget.TextView');
    }

    get ChoosenPlaceTitle() {
        return $('//android.widget.TextView[@resource-id="com.google.android.apps.maps:id/title"]');
    }

    /**
     * Cleaning input field for futrher serching
     */
    async cleanSearchField(): Promise<void> {
        if (await (await this.ClearSearchFieldIcon).isDisplayed()) {
            await (await this.ClearSearchFieldIcon).click();
        }
    }

    /**
     * Searching address on map by input address in the input field
     * @param {String} address address that should be searched
     */
    async searchAddress(address: string): Promise<void> {
        await (await this.SearchAddressInputBox).click();
        await this.waitForIsShown(await this.SearchAddressInputField);
        await (await this.SearchAddressInputField).setValue(address);
    }

    /**
     * Clicking on the given index from the list of search results
     * @param {Number} index index of the element in array that should be clicked
     */
    async selectSearchResult(index: number): Promise<void> {
        await (await this.SearchResultsList[index]).click();
    }

    /**
     * Getting an array of strings with search results
     */
    async getListOfSearchResultTexts(): Promise<string[]> {
        const arrayOfText = [];
        for (const item of await this.SearchResultsList) {
            arrayOfText.push(await item.getText());
        }

        return arrayOfText;
    }

    /**
     * Getting place title text
     */
    async getPlaceTitleName(): Promise<string> {
        return (await this.ChoosenPlaceTitle).getText();
    }
}

export default new GoogleMapsScreen();
