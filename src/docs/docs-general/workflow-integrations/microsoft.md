# Microsoft (OneDrive and OneNote)

## Overview

* [OneNote](https://support.microsoft.com/en-au/office/introducing-onenote-38be036d-5b5a-49ad-83be-292fe53ad7b3)
  is a Microsoft Office application that is principally concerned with note organisation and management.
* [OneDrive](https://onedrive.live.com/about/en-us/) is a cloud storage service provided by Microsoft.

Bottle Rocket can integrate with a given Microsoft account to allow workflows to put files into OneDrive or OneNote.

:::note
There are **two** ways to add a Microsoft connector to Bottle Rocket:

1. **Pre-registered application**: Bottle Rocket has a _pre-registered_ app that can be added
   to your Bottle Rocket account. You do not need to set up an Azure Entra App registration and can simply add the
   connector by entering the device code when prompted.
2. **Custom application**: If you want greater control over the app registration, you can simply create your own
   in Azure Entra and provide the Client and Tenand IDs in the connector configuration.
   :::

## Prerequisites

* In order to create a Microsoft connector, you will first need
  to [sign up for a Microsoft account](https://signup.live.com/signup), if you don't already have one.

## Option 1 – Adding the "pre-registered" Bottle Rocket connector
You can add the pre-registered Bottle Rocket connector as follows:

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add workflow](/img/sidebarAddConnector.png)
</div>

* Select the **Microsoft App Connector (Bottle-Rocket)** from the list of connectors,
  and click the **Add connector** button.
* You can skip straight to the [complete authorization step](#complete-the-authorization).
## Option 2 – Adding a custom Microsoft application

### Create the Entra app registration

* Login to the [Microsoft Entra admin portal](http://entra.microsoft.com/).
    * Alternatively, you can login to the
      Microsoft [Azure portal](https://portal.azure.com/) and navigate to the **Microsoft Entra ID** blade.
* In the top menu, select **+ Add** > **App registration**.

<div class="text--center">
![Add new app registration](/img/microsoft/newAppRegistration.png)
</div>

* Give the app a name.
* Under **Supported account types**, you can specify a level of access you require for the app. In most cases,
  where you will want to upload your personal notes to your personal OneDrive, for example, you can set this to
  **Personal Microsoft accounts only**.
* **Redirect URI** can be left blank.
* Click the **Register** button to create the app.

<div class="text--center">
![Register button](/img/microsoft/registerButton.png)
</div>

### Configure the app flow

* In the left-hand sidebar for the app registration, under **Manage**, select **Authentication**.

<div class="text--center">
![Authentication menu item](/img/microsoft/authenticationSidebar.png)
</div>

* Under **Settings**, set **Allow public client flows** to **Enabled**.

### Configure the API permissions

* In the left-hand sidebar for the app registration, under **Manage**, select **API permissions**.

<div class="text--center">
![API permissions menu item](/img/microsoft/apiPermissionsSidebar.png)
</div>

:::note
Under the section **What type of permissions does your application require?**, ensure you have selected **Delegated permissions**.
:::

#### OneNote

* Click **+ Add a permission**.
* Under **Microsoft APIs**, scroll down and select **OneNote**.

<div class="text--center">
![OneNote API permission](/img/microsoft/oneNotePermission.png)
</div>

* Check the following permission:
    * `Notes.ReadWrite.All`
* Click **Add permissions**.

#### OneDrive and `offline_access`

* Click **+ Add a permission**.
* Under **Microsoft APIs**, click on the top **Microsoft Graph** item.

<div class="text--center">
![Microsoft Graph](/img/microsoft/microsoftGraphItem.png)
</div>

* Check the following permission:
    * `offline_access`
* Scroll down to the **Files** group, and check the following permission:
    * `Files.ReadWrite.All`
* Click **Add permissions**.

#### Confirm permissions and application

* Your permissions should now look something like this:

<div class="text--center">
![Final permissions](/img/microsoft/finalPermissions.png)
</div>

* In the left-hand sidebar for the app registration, select **Overview**.
* You will see the key properties for your app registration, of note:
    * The **Application (client) ID**.
    * The **Directory (tenant) ID**.

<div class="text--center">
![My app registration](/img/microsoft/myAppRegistration.png)
</div>

* These values will be supplied in the Bottle Rocket connector page.

### Add the (custom) Microsoft connector to Bottle Rocket

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add workflow](/img/sidebarAddConnector.png)
</div>

* Select the **Microsoft App Connector (Custom)** from the list of connectors,
  and click the **Add connector** button.

<div class="text--center">
![Add connector](/img/microsoft/createCustomMicrosoftConnector.png)
</div>

* Enter the client and tenant ID values you obtained from the app registration in the previous steps.

### Complete the authorization
* Click **Get an Authorization Code**. If successful, a code should appear in the window.

<div class="text--center">
![Code received](/img/microsoft/codeReceived.png)
</div>

* Copy the code to the clipboard.
* Click on the **Complete Authorization** button to open the verification URL.
* Enter / paste the code you copied from the Bottle Rocket page.
* Select the (Microsoft) account you wish to authenticate with, as part of this connector.
* You will be prompted to confirm that the code you entered matches the code supplied; click **Continue**.
* Complete the authentication process (password, passkey, one-time code, etc.) as prompted.
* You will be prompted to **Deny** or **Accept** the permissions requested by the app.    

<div class="text--center">
![Requested permissions](/img/microsoft/requestedPermissions.png)
</div>

* If you are comfortable with this request, click **Accept**.
* The authentication should complete, and you can close this browser tab.
* After an interval, the connector should be displayed in the list of connectors with a green indicator.

<div class="text--center">
![Green connector](/img/microsoft/newMicrosoftConnector.png)
</div>

You now have a working Microsoft connector that can be used with OneNote and OneDrive workflows.