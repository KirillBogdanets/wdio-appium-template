/**
 * Get the time difference in seconds
 */
export async function getCoordinatesToSwipeUtil(): Promise<any> {
    const anchorPercentage = 40;

    const { width, height } = await driver.getWindowSize();
    const anchor = (width * anchorPercentage) / 100;
    const endPoint = (height * anchorPercentage) / 100;

    return {
        anchor,
        height,
        endPoint,
    };
}
