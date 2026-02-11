# Google Drive

## Overview
[Google Drive](https://workspace.google.com/intl/en_au/products/drive/)
is a secure, cloud-based file storage and synchronization service from Google 
that allows users to store, access, share, and edit files from any device.

Bottle Rocket can integrate with Google Drive to upload files to a destination account that you have configured.

## Prerequisites
* In order to create a "Personal" Google connector, you will first need to have a [Google account](https://support.google.com/accounts/answer/27441).
* With a Google account, you will then need to start a [Google Cloud project](https://console.cloud.google.com/) in the console.
    * [Follow this guide to set up a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
* Google Drive comes with 15GB of free storage, which should be sufficient for most use cases.

## Create the project in Google Cloud

:::tip
If you have already created a GCP project as part of a 
[Google Cloud Vision workflow](/docs/docs-general/workflow-integrations/google-cloud-vision),
you can use this project instead of creating a new one.
:::

* In the Google Cloud console, select **Create or select a project**.
* Enter a **Project name**, select a **Location**, and click **Create**.

<div class="text--center">
![Create project](/img/gcp/createProject.png)
</div>

* In the main project dashboard, open the sidebar menu and navigate to **APIs & services** > **Library**.
* Search for _Drive_ and you should see the **Google Drive API** listed; select it.

<div class="text--center">
![Google Drive API entry](/img/gcp/googleDriveApiEntry.png)
</div>

* Click **Enable** to enable the API.
* In the API / Service details screen, click **Create credentials**.
* For the credentials type, select **OAuth client ID**.

* For the **Application type**, select **Desktop App**.

<div class="text--center">
![Desktop OAuth app type](/img/gcp/desktopOauth.png)
</div>

* Select **Create**. You should receive a popup with the OAuth client details.

<div class="text--center">
![Desktop OAuth app type](/img/gcp/desktopOauthCreated.png)
</div>

* Select **Download JSON** to download the credentials file. You will supply this file to Bottle Rocket.

:::danger
Treat this credentials file like a password - keep it secure, private, and do not share it with anyone.
:::

## Upload the private key file to the Google Bottle Rocket Connector

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add connector menu item](/img/sidebarAddConnector.png)
</div>

* Select the **Google Connector** from the list of connectors, and click the **Add connector** button.

<div class="text--center">
![Add connector](/img/gcp/uploadKeyFileDrive.png)
</div>

* Click on the paperclip / attachment button, and upload the private key file you downloaded from Google Cloud.
* The **Authorize in Google** button should now be enabled; click it to open a new browser tab.
* The new browser tab should prompt you to select a Google account to login to; select the account
you wish to use with Bottle Rocket, and login.

<div class="text--center">
![App wants access](/img/gcp/wantsAccess.png)
</div>

* Click **Continue** to proceed.

<div class="text--center">
![App wants access](/img/gcp/makeSureYouTrust.png)
</div>

* Copy the **Authorisation Code** value and paste it into the **Access Code** field in _Step 5_ of the
Google Connector configuration screen.

<div class="text--center">
![Step 5](/img/gcp/step5.png)
</div>

* Click **Submit** to complete the configuration.
* If everything was successful, the Google Connector should now be listed under **My connectors** 
with a green indicator.

<div class="text--center">
![Green connector](/img/gcp/successfulGoogleConnector.png)
</div>