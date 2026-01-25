---
sidebar_position: 2
---
# Workflows

## What are workflows?
In the context of Bottle Rocket, workflows are a set of steps that you, as a user, can define to run against
a scanned image.
Each workflow step can have one or more child steps that will use the output of the parent step. 

So, for example, you may wish to take the page you scanned using the Bottle Rocket app, and upload 
that image to a cloud-hosted storage provider, under a specific sub-folder.

Or, you may wish to:
- convert the image to text via an OCR workflow step, 
- convert the text to a PDF,
- and then send that PDF file to a recipient via an automated email.

By building a workflow 'tree' structure, you can define a set of processes that will automatically be triggered if
Bottle Rocket finds one or more of the given Rocketbook 'page symbols' that appear on the scanned image.

Alternatively, you can manually trigger a workflow against a given scanned image via the
[My Scans](../using-your-server/viewing-your-scans#viewing-scans) page.

<div class="text--center">
![Workflows](/img/workflowSetup.png)
</div>