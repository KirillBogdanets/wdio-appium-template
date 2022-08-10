import config from "./wdio.shared.local.appium.conf";

const DEVICE_NAME = process.env.ANDROID_DEVICE_NAME || "Pixel 4 API 30";
// ============
// Specs
// ============
config.specs = ["./specs/google.map.spec.ts"];

// path to the service where Appium is running
config.path = "/wd/hub";

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "Android",
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        "appium:deviceName": DEVICE_NAME,
        "appium:platformVersion": "11.0",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "UiAutomator2",
        "appium:newCommandTimeout": 240,
    },
];

Object.assign(config, {
    params: {
        androidDefaultTimeout: 5000,
    },
});

exports.config = config;
