# Appium Template


- Android Native Apps
- Android Hybrid Apps
- Android Chrome

This template is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `npm install`
1. Installing Appium on a local machine [here](./docs/APPIUM.md)
1. Setting up Android on a local machine [here](./docs/ANDROID_SETUP.md)
1. Running tests `npm run android.app` or `npm run android.app`

```sh
# For Android local execution
npm run android.app -- --spec=specs/google.map.spec.ts

### BrowserStack

This template provides a setup for testing with BrowserStack. Please check the [BrowserStack](./config/browserstack)-folder to see the
setup for Android.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

```sh
# For Android
$ npm run android.browserstack.app
```
