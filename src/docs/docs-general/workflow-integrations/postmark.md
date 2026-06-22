# Postmark

## Overview
[Postmark](https://postmarkapp.com/) is a cloud-based email-delivery client.

Bottle Rocket can integrate with Postmark automatically send scans / files as email attachments to a recipient's email address.

## Prerequisites
* In order to connect Bottle Rocket to Postmark, you will first need to have a [Postmark account](https://account.postmarkapp.com/sign_up).
* Postmark comes with a [free pricing tier](https://postmarkapp.com/pricing) at 100 emails / month.

## Create and configure the mail server
* Once logged in to your Postmark account, select **Servers** from the top left menu.
* Click **Create Server**.

<div class="text--center">
![Create Postmark server](/img/postmark/createServerButton.png)
</div>

* Name the server and set the **Server type** to _Live_.
* Click **Create server** to create the server.
* In the list of servers, select the newly created server.
* Select **API Tokens** from the top menu.

<div class="text--center">
![API tokens screen](/img/postmark/apiServerToken.png)
</div>

* Click to copy the server token value. You will use this token to finalize the connector.

## Add a verified sender / sender signature
* Before you can start sending emails from your (designated) email address, you will need to verify that you indeed
own / can access that sender's email address / domain.
* In the top menu, select **Sender Signatures**.

<div class="text--center">
![Sender signatures](/img/postmark/sendersSignatures.png)
</div>

* Select **Add Domain or Signature**.

<div class="text--center">
![Add Domain or Signature](/img/postmark/addDomainOrSignature.png)
</div>

* Select the applicable option to and complete the process to verify ownership of either the domain, or the
individual sender's email address.
* Once verified, you should see a "sender email" address. Make note of this, as you will also need it to finalize the connector.

<div class="text--center">
![Verified email](/img/postmark/verifiedEmail.png)
</div>

## Add the Postmark connector

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add workflow](/img/sidebarAddConnector.png)
</div>

* Select the **Postmark Integration Connector** from the list of connectors, and click the **Add connector** button.

<div class="text--center">
![Add connector](/img/postmark/addPostmarkConnectorPage.png)
</div>

* Enter the **Server token** and **Sender address** you obtained in the previous steps.
* Click **Submit**. If everything has been configured correctly, you should be redirected to the connectors list,
  indicating that the Dropbox connector is active.

<div class="text--center">
![Active Dropbox connector](/img/postmark/connectorStatus.png)
</div>

You now have a working Postmark connector that associated workflow steps can utilize.