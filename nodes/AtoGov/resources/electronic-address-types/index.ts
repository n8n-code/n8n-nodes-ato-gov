import type { INodeProperties } from 'n8n-workflow';

export const electronicAddressTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Electronic Address Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Electronic Address Types",
					"value": "GET Classifications Electronic Address Types",
					"action": "Retrieve a list of electronic address types",
					"description": "Retrieve a list of electronic address types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/electronic-address-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/electronic-address-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Electronic Address Types"
					],
					"operation": [
						"GET Classifications Electronic Address Types"
					]
				}
			}
		},
];
