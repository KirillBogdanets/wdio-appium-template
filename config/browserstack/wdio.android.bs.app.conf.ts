import { config } from "../wdio.shared.conf";

const DEVICE_NAME = process.env.ANDROID_DEVICE_NAME || "Pixel 4";
// ============
// Specs
// ============
config.specs = ["./specs/google.map.spec.ts"];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || "BROWSERSTACK_USER";
config.key = process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY";
// Use browserstack service
config.services = ["browserstack"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        "bstack:options": {
            osVersion: "11.0",
            realMobile: true,
            networkLogs: true,
            local: true,
            deviceName: DEVICE_NAME,
            sessionName: `Test run using 'Pixel 4'  on 'Android' device`,
            projectName: "TEST",
            buildName: `Test Test Test`,
        },
    },
];

exports.config = config;
