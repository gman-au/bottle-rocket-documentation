# Diagnostic / test steps

## Overview
When building a workflow, you will often work with steps involving one or more connectors (AI / email / cloud storage) 
that incur either a time or financial cost per run.

Ideally you would like to build and test workflows without building up such costs (either waiting minutes for a response, or paying money
for test runs).

Bottle Rocket includes several "diagnostic" workflow steps that allow you to 'simulate' responses from real-world workflow steps, allowing you
to build downstream workflow trees using the simulated responses. 

<div class="text--center">
![Select diagnostic workflow steps](/img/diagnostics/addDiagnosticSteps.png)
</div>

## Example
A prime example is a workflow that depends on the output of an OCR step, whether from a locally-hosted AI model (which can tend to run a lot slower), 
or a cloud-hosted equivalent (which usually incurs a charge per run).

<div class="text--center">
![Hello World text step](/img/diagnostics/helloWorldTextStep.png)
</div>

These steps don't require a connector to be set up, and can be added without any configuration.

By adding this step to your workflow, you can test an entire workflow tree to ensure that destination endpoints operate as expected, for example,
without incurring a cost per test run.

<div class="text--center">
![Hello World text step](/img/diagnostics/helloWorldWorkflowTree.png)
</div>

This workflow step will produce `Hello, world!` as the step output text. You can use this output, for example, to test that the text output successfully
uploads to a Dropbox Upload step.

<div class="text--center">
![Hello World Dropbox](/img/diagnostics/helloWorldDropbox.png)
</div>

There are other step output types that can be simulated; this collection is expected to grow over time.