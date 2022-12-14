import { config } from "./wdio.shared.conf";

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
    [
        "appium",
        {
            // This will use the globally installed version of Appium
            command: "appium",
        },
    ],
]);
//
// =====================
// Server Configurations
// =====================
//
config.port = 4723;

export default config;
