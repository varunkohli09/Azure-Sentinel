# MDTI-Data-Cookies

## Overview
This playbook uses the [Microsoft Defender Threat Intelligence](https://learn.microsoft.com/en-us/defender/threat-intelligence/what-is-microsoft-defender-threat-intelligence-defender-ti) Cookies data to automatically enrich incidents generated by Microsoft Sentinel. Leverage this playbook in order to enrich your incidents with [Cookies](https://learn.microsoft.com/en-us/defender/threat-intelligence/data-sets#cookies) data hosted by the indicators found within the incident. Cookies are small pieces of data sent from a server to a client as the user browses the internet. These values sometimes contain a state for the application or little bits of tracking data. Defender TI highlights and indexes cookie names observed when crawling a website and allows users to dig into everywhere we have observed specific cookie names across its crawling and data collection. Cookies are also used by malicious actors to keep track of infected victims or store data to be used later.

## Prerequisites
1. This playbook inherits API connections created and established within a base playbook. Ensure you have deployed [MDTI-Base](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Microsoft%20Defender%20Threat%20Intelligence/Playbooks/MDTI-Base/azuredeploy.json) this playbook. If you have trouble accessing your account or your credentials contact your account representative or reach to discussMDTI[@]microsoft.com.
2. This playbook requires "Microsoft Sentinel Contributor" role to update Incidents.

## Deployment

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Defender%2520Threat%2520Intelligence%2FPlaybooks%2FMDTI-Data-Cookies%2Fazuredeploy.json" target="_blank">
    <img src="https://aka.ms/deploytoazurebutton"/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Defender%2520Threat%2520Intelligence%2FPlaybooks%2FMDTI-Data-Cookies%2Fazuredeploy.json" target="_blank">
    <img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>

### Post-Deployment Instructions
After deploying the playbook, you must authorize the connections leveraged.

1. Visit the playbook resource.
2. Under "Development Tools" (located on the left), click "API Connections".
3. Ensure each connection has been authorized.

**Note: If you've deployed the [MDTI-Base](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Microsoft%20Defender%20Threat%20Intelligence/Playbooks/MDTI-Base/azuredeploy.json) playbook, you will only need to authorize the Microsoft Sentinel connection.**