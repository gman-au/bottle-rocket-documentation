# OpenAI

## Overview
[OpenAI](https://openai.com/) provides cloud-hosted AI models accessible via REST API and official SDKs. 
It enables developers to build applications powered by natural language understanding, code generation, vision,
real-time voice, and semantic search without managing underlying machine learning infrastructure.

Bottle Rocket can integrate with OpenAI to allow different models to be applied to image or text data for further processing.

## Prerequisites
* In order to connect Bottle Rocket to OpenAI, you will first need to have an [OpenAI API account](https://platform.openai.com/login).
* Once created, you can login and add credit to the account to purchase tokens, in order for Bottle Rocket to make use of OpenAI features. 

### Create an OpenAI API key
* Login to the [OpenAI API Platform](https://platform.openai.com/home).
* From the left-hand sidebar menu, select **API Keys**.
* Click the button **+ Create new secret key**.

<div class="text--center">
![New OpenAI key](/img/openai/newKey.png)
</div>

* Set **Owned by** to *You*.
* Set the **Name** to something meaningful, it can be anything.
* Leave the **Project** as *Default project* unless you are making use of projects in the OpenAI platform.
* You can set an **Expiration** if required, ideally something sensible, but it is not mandatory.
    * Whenever the key expires, your new key will need to be updated manually in Bottle Rocket. 
* Click **Create secret key** to create the key.
* Copy the key - you will need to supply it to the Bottle Rocket connector.

## Add the OpenAI connector to Bottle Rocket

* Login to your Bottle Rocket server.
* On the left-hand sidebar, under **My connectors**, select **Add connector**.

<div class="text--center">
![Add workflow](/img/sidebarAddConnector.png)
</div>

* Select the **OpenAI Connector** from the list of connectors, and click the **Add connector** button.

<div class="text--center">
![Add OpenAI connector](/img/openai/addConnector.png)
</div>

* Add / paste the API key you have created previously into the text field.
* Save the connector by clicking **Submit**.
* If everything has been configured correctly, you should be redirected to the connectors list,
  indicating that the OpenAI connector is active.

<div class="text--center">
![Active Dropbox connector](/img/openai/connectorStatus.png)
</div>

You now have a working OpenAI connector that associated workflow steps can utilize.