# Google Cloud Vision

## Overview
[Google Cloud Vision](https://cloud.google.com/vision) offers a comprehensive set of machine vision tools which you may find useful for 
text extraction. 

Bottle Rocket can integrate with Google Cloud Vision to extract text from images.

## Prerequisites
* In order to create a Google Cloud connector, you will first need to have a [Google account](https://support.google.com/accounts/answer/27441).
* With a Google account, you will then need to start a [Google Cloud project](https://console.cloud.google.com/) in the console.
    * [Follow this guide to set up a Google Cloud project](https://developers.google.com/workspace/guides/create-project). 
* Google Cloud Vision pricing [has a free tier for the first 1000 units / month](https://cloud.google.com/vision/pricing), 
which should be sufficient for most use cases.
  
## Create the project in Google Cloud

:::tip
If you have already created a GCP project as part of a
[Google Drive upload workflow](/docs/docs-general/workflow-integrations/google-drive),
you can use this project instead of creating a new one.
:::

* In the Google Cloud console, select **Create or select a project**.
* Enter a **Project name**, select a **Location**, and click **Create**.

<div class="text--center">
![Create project](/img/gcp/createProject.png)
</div>

* In the main project dashboard, open the sidebar menu and navigate to **APIs & services** > **Library**.
* Search for _Vision_ and you should see the **Cloud Vision API** listed; select it.

<div class="text--center">
![Cloud vision API entry](/img/gcp/cloudVisionApiEntry.png)
</div>

* Click **Enable** to enable the API.
* In the API / Service details screen, click **Create credentials**.
* Ensure that **Select an API** contains _Cloud Vision API_.
* For the credentials type, select **Application data**.
* Select **Next**.
* Fill in the details under **Create service account**, then select **Create and continue**.

<div class="text--center">
![Service account step 1](/img/gcp/serviceAccountStep1.png)
</div>

* Skip the **Permissions (optional)** section.
* Skip the **Principals with access (optional)** section.
* Click **Done** to continue.

* Now, under the **APIs and services** section, select **Credentials** from the sidebar menu.
* Select the newly-added service account.
* Navigate to the **Keys** tab, and click **Add key**, selecting **Create new key**.
* Select **JSON** as the key type.

<div class="text--center">
![Create private key](/img/gcp/createKey.png)
</div>

* Click **Create** to download the private key.

:::danger
Treat this private key file like a password - keep it secure, private, and do not share it with anyone.
:::

## Upload the private key file to the GCP Bottle Rocket Connector

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add workflow](/img/sidebarAddConnector.png)
</div>

* Select the **Google Cloud Platform Connector** from the list of connectors, and click the **Add connector** button.

<div class="text--center">
![Add workflow](/img/gcp/uploadKeyFileGcp.png)
</div>

* Click on the paperclip / attachment button, and upload the private key file you downloaded from Google Cloud.
* Click **Submit** to save the connector.