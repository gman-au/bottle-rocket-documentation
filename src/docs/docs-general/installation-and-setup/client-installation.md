---
sidebar_position: 2
---
# Mobile app installation
The following steps outline the installation process for the Bottle Rocket client (mobile app).

:::note
The Bottle Rocket app is currently only available on Android.
:::

## Play Store (recommended)
You can install the Bottle Rocket app from the 
[Play Store](https://play.google.com/store/apps/details?id=au.com.gman.bottlerocket).
If you do so, you will require an active Play Store account.

## Direct APK installation
If you have enabled direct APK installation on your mobile device, you can download the APK file
directly from the [Bottle Rocket releases page](https://github.com/gman-au/bottle-rocket-android/releases).

Simply locate the release version you wish to install and select 
the `app-release-<VERSION>.apk` file to download and install.

## Setup

:::note
You must first configure a running server instance and 
[completed the setup process on it](../installation-and-setup/server-installation#create-your-administrator-account) 
before you can connect to it.
:::

### Configure the app to connect to your server

* Open the Bottle Rocket app on your device.
* You should be presented with a main menu / landing screen.

<div class="text--center">
![Mobile app - landing menu](/img/mobileLandingScreen.png)
</div>

* Tap the **Settings** option.
* You should be presented with a settings screen.

### Add the user account via QR code

* To connect a user account to the app via a QR code, select the **Scan QR code** option.

<div class="text--center">
![Settings - Scan QR](/img/settingScanQrCode.png)
</div>

* You should be presented with a QR code scanner screen.
* Scan the QR code displayed during the 
[update of the user account on your server](/docs/docs-general/installation-and-setup/server-installation/qr-code-authentication#getting-a-qr-code-for-a-user-account).
* If successful, the app should pre-fill the details as shown below.

### Add the user account manually

<div class="text--center">
![Mobile app - settings menu](/img/mobileSettingsScreen.png)
</div>

* Enter the connection configuration as follows:
  * The **API Server URL** should be the URL required for your mobile device to connect to your
    (self-hosted) server.
    * In cases where the server and device are connected to the same LAN, for example, this URL would be the
    local IP address or network host name, followed by the _external_ port number as 
    [configured for the server](../installation-and-setup/server-installation#port-configuration) e.g. `3001`.
  * The **User name** should correspond to the user name you configured as part of the setup process.
  * The **Password** should correspond to the password you configured as part of the setup process.

:::warning
Do not use the root `admin` credentials here, as certain functionality will not work correctly.
:::

### Test and save connection
* Use the **Test connection** button to verify that the connection is working correctly with the supplied credentials.
* Use the **Save** button to save the connection configuration.
* Use the **Go back** button to return to the main menu (and lose any unsaved changes).

:::note
When you save the connection configuration, you will be prompted to restart the app.
:::

If everything is working correctly and you can successfully test the server connection, then everything should be good
to go to start capturing pages into your Bottle Rocket account!
