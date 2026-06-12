import type { INodeProperties } from 'n8n-workflow';

export const registeredIdentifierTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Registered Identifier Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Registered Identifier Types",
					"value": "GET Classifications Registered Identifier Types",
					"action": "Retrieve a list of registered identifier types",
					"description": "Retrieve a list of registered identifier types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/registered-identifier-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/registered-identifier-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registered Identifier Types"
					],
					"operation": [
						"GET Classifications Registered Identifier Types"
					]
				}
			}
		},
];
