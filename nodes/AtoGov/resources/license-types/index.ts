import type { INodeProperties } from 'n8n-workflow';

export const licenseTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"License Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications License Types",
					"value": "GET Classifications License Types",
					"action": "Retrieve a list of license types",
					"description": "Retrieve a list of license types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/license-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/license-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Types"
					],
					"operation": [
						"GET Classifications License Types"
					]
				}
			}
		},
];
