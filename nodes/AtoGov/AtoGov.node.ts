import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { individualsDescription } from './resources/individuals';
import { individualsRolesDescription } from './resources/individuals-roles';
import { individualsAddressesDescription } from './resources/individuals-addresses';
import { individualsElectronicAddressesDescription } from './resources/individuals-electronic-addresses';
import { individualsBusinessNamesDescription } from './resources/individuals-business-names';
import { individualsLicensesDescription } from './resources/individuals-licenses';
import { organisationsDescription } from './resources/organisations';
import { organisationsRolesDescription } from './resources/organisations-roles';
import { organisationsAddressesDescription } from './resources/organisations-addresses';
import { organisationsElectronicAddressesDescription } from './resources/organisations-electronic-addresses';
import { organisationsBusinessNamesDescription } from './resources/organisations-business-names';
import { organisationsLicensesDescription } from './resources/organisations-licenses';
import { businessNamesDescription } from './resources/business-names';
import { licensesDescription } from './resources/licenses';
import { businessNameLifecycleStatesDescription } from './resources/business-name-lifecycle-states';
import { nameDirectionsDescription } from './resources/name-directions';
import { namePrefixesDescription } from './resources/name-prefixes';
import { nameTypesDescription } from './resources/name-types';
import { addressTypesDescription } from './resources/address-types';
import { electronicAddressTypesDescription } from './resources/electronic-address-types';
import { gendersDescription } from './resources/genders';
import { legalEntityTypesDescription } from './resources/legal-entity-types';
import { licenseLifecycleStatesDescription } from './resources/license-lifecycle-states';
import { licenseTypesDescription } from './resources/license-types';
import { registeredIdentifierTypesDescription } from './resources/registered-identifier-types';
import { rolesDescription } from './resources/roles';

export class AtoGov implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Ato Gov',
                name: 'N8nDevAtoGov',
                icon: { light: 'file:./ato-gov.png', dark: 'file:./ato-gov.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Introduction',
                defaults: { name: 'Ato Gov' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAtoGovApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Individuals",
					"value": "Individuals",
					"description": "An individual is a person about whom the registry wishes to maintain information.\n\n  For example, the individual's date and place of birth (for the purposes of identification) and the individual's\n  residential address (which is used for administrative purposes).\n"
				},
				{
					"name": "Individuals Roles",
					"value": "Individuals Roles",
					"description": "A role defines the characteristics of a relationship between parties.\nAn Individual can participate in a relationship with other individuals and organisations.\n\nFor example:\n\n| Party         | Role           | Relationship     | Role          | Party                           |\n| ------------- | -------------- | ---------------- | ------------- | ------------------------------- |\n| Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |\n| Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |\n| Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |\n| Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |\n| Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |\n| Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |\n| Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |\n| Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |\n| Homer Simpson | Member         | Membership       | Association   | Mensa International             |\n\nYou can use the API's **metadata services** to retrieve information about the classifcation schemes and\nvalues used by the Registry.\n"
				},
				{
					"name": "Individuals Addresses",
					"value": "Individuals Addresses",
					"description": "The registry maintains information about an individual's contact details for administrative purposes.\n\n  Including:\n  - an address for the service of documents\n  - a principal place of business address\n"
				},
				{
					"name": "Individuals Electronic Addresses",
					"value": "Individuals Electronic Addresses",
					"description": "The registry maintains information about an individual's contact details for administrative purposes.\n\n  Including:\n  - an email address\n  - a mobile number\n"
				},
				{
					"name": "Individuals Business Names",
					"value": "Individuals Business Names",
					"description": "A business name is a name or title under which a person conducts a business.\n"
				},
				{
					"name": "Individuals Licenses",
					"value": "Individuals Licenses",
					"description": "If you carry on a business you may need to hold a licence.\n\n  For example, if you provide financial services, you are required to hold an Australian Financial\n  Services (AFS) licence.\n"
				},
				{
					"name": "Organisations",
					"value": "Organisations",
					"description": "An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the\nregistry wishes to maintain information.\n\n  For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,\n  Partnership or Joint Venture).\n"
				},
				{
					"name": "Organisations Roles",
					"value": "Organisations Roles",
					"description": "A role defines the characteristics of a relationship between parties.\nAn Organisation can participate in a relationship with other organisations and indiviuals.\n\nFor example:\n\n| Party                           | Role     | Relationship | Role         | Party             |\n| ------------------------------- | -------- | -------------| ------------ | ----------------- |\n| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |\n| Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |\n| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |\n| Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |\n\nYou can use the API's **metadata services** to retrieve information about the classifcation schemes and\nvalues used by the Registry.\n"
				},
				{
					"name": "Organisations Addresses",
					"value": "Organisations Addresses",
					"description": "The registry maintains information about an organisation's contact details for administrative purposes.\n\n  Including:\n  - an address for the service of documents\n  - a principal place of business address\n"
				},
				{
					"name": "Organisations Electronic Addresses",
					"value": "Organisations Electronic Addresses",
					"description": "The registry maintains information about an organisation's contact details for administrative purposes.\n\n  Including:\n  - an email address\n  - a mobile number\n"
				},
				{
					"name": "Organisations Business Names",
					"value": "Organisations Business Names",
					"description": "A business name is a name or title under which an organisation conducts a business.\n"
				},
				{
					"name": "Organisations Licenses",
					"value": "Organisations Licenses",
					"description": "If you carry on a business you may need to hold a licence.\n\n  For example, if you provide financial services, you are required to hold an Australian Financial\n  Services (AFS) licence.\n"
				},
				{
					"name": "Business Names",
					"value": "Business Names",
					"description": "A business name is a name or title under which a person or organisation conducts a business.\n"
				},
				{
					"name": "Licenses",
					"value": "Licenses",
					"description": "If you carry on a business you may need to hold a licence.\n\n  For example, if you provide financial services, you are required to hold an Australian Financial\n  Services (AFS) licence.\n"
				},
				{
					"name": "Business Name Lifecycle States",
					"value": "Business Name Lifecycle States",
					"description": "A classification scheme for business names.\n"
				},
				{
					"name": "Name Directions",
					"value": "Name Directions",
					"description": "A classification scheme for names.\n"
				},
				{
					"name": "Name Prefixes",
					"value": "Name Prefixes",
					"description": "A classification scheme for names.\n"
				},
				{
					"name": "Name Types",
					"value": "Name Types",
					"description": "A classification scheme for names.\n"
				},
				{
					"name": "Address Types",
					"value": "Address Types",
					"description": "A classification scheme for addresses.\n"
				},
				{
					"name": "Electronic Address Types",
					"value": "Electronic Address Types",
					"description": "A classification scheme for electronic addresses.\n"
				},
				{
					"name": "Genders",
					"value": "Genders",
					"description": "A classification scheme for the representation of human sexes.\n"
				},
				{
					"name": "Legal Entity Types",
					"value": "Legal Entity Types",
					"description": "A classification scheme for parties (individuals and organisations).\n"
				},
				{
					"name": "License Lifecycle States",
					"value": "License Lifecycle States",
					"description": "A classification scheme for licenses.\n"
				},
				{
					"name": "License Types",
					"value": "License Types",
					"description": "A classification scheme for licenses.\n"
				},
				{
					"name": "Registered Identifier Types",
					"value": "Registered Identifier Types",
					"description": "A classification scheme for registered identifiers.\n"
				},
				{
					"name": "Roles",
					"value": "Roles",
					"description": "A classification scheme for the characteristics of relationships between parties (individuals and organisations).\n"
				}
			],
			"default": ""
		},
		...individualsDescription,
		...individualsRolesDescription,
		...individualsAddressesDescription,
		...individualsElectronicAddressesDescription,
		...individualsBusinessNamesDescription,
		...individualsLicensesDescription,
		...organisationsDescription,
		...organisationsRolesDescription,
		...organisationsAddressesDescription,
		...organisationsElectronicAddressesDescription,
		...organisationsBusinessNamesDescription,
		...organisationsLicensesDescription,
		...businessNamesDescription,
		...licensesDescription,
		...businessNameLifecycleStatesDescription,
		...nameDirectionsDescription,
		...namePrefixesDescription,
		...nameTypesDescription,
		...addressTypesDescription,
		...electronicAddressTypesDescription,
		...gendersDescription,
		...legalEntityTypesDescription,
		...licenseLifecycleStatesDescription,
		...licenseTypesDescription,
		...registeredIdentifierTypesDescription,
		...rolesDescription
                ],
        };
}
