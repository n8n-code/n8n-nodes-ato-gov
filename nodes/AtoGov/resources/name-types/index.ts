import type { INodeProperties } from 'n8n-workflow';

export const nameTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Name Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Name Types",
					"value": "GET Classifications Name Types",
					"action": "Retrieve a list of name types",
					"description": "Retrieve a list of name types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/name-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/name-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Name Types"
					],
					"operation": [
						"GET Classifications Name Types"
					]
				}
			}
		},
];
