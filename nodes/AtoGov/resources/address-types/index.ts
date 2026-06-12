import type { INodeProperties } from 'n8n-workflow';

export const addressTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Address Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Address Types",
					"value": "GET Classifications Address Types",
					"action": "Retrieve a list of address types",
					"description": "Retrieve a list of address types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/address-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/address-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Types"
					],
					"operation": [
						"GET Classifications Address Types"
					]
				}
			}
		},
];
