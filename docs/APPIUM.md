# Installing Appium on a local machine

To setup the local test environment the following needs to be installed:

- [appium-doctor](https://github.com/appium/appium-doctor) with `npm install appium-doctor -g`
- [Appium](https://github.com/appium/appium) with `npm install appium -g`
- [appium-desktop](https://github.com/appium/appium-desktop). This one needs to be downloaded from [here](https://github.com/appium/appium-desktop/releases) and pick the latest stable releases

## Setup a local machine

### Appium Doctor
appium-doctor is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. You only run it once to check your local machine. 

### Appium
If the npm install was successful you should be able to run this command `appium -v` and see a version like below.

```bash
➜  appium -v
1.22.0
➜
```

> Always make sure to check the Appium site if there is a new version. New Appium version are released mostly when Android/iOS release new versions.
Bugfixes can also be released. Just check the [changelog](https://github.com/appium/appium/blob/master/CHANGELOG.md) for a clear overview

## Appium desktop
Appium Desktop is an open source app which gives us the ability of the Appium automation server in a UI. It is a combination of a few Appium-related tools:

- A graphical interface for the Appium Server. You can set options, start/stop the server, see logs, etc...
- An Inspector that you can use to look at your app's elements, get basic information about them, and perform basic interactions with them. This is useful as a way to learn about Appium or as a way to learn about your app so you can write tests for it.

This tool is mainly used to view the UI-hierarchy and locate elements to be sure that all elements can be found.

See the [readme](https://github.com/appium/appium-desktop) about how to use the Appium Desktop.

When Appium Destkop is started make sure the _Automatic Server_-tab is enabled. Use the following settings for Android (also check [here](../config/wdio.android.app.conf.ts))

```js
{
  "platformName": "Android",
  "deviceName": "Pixel 4",
  "platformVersion": "11.0",
  "noReset": true,
  "automationName": "UiAutomator2"
}
```