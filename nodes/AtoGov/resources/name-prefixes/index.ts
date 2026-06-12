import type { INodeProperties } from 'n8n-workflow';

export const namePrefixesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Name Prefixes"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Name Prefixes",
					"value": "GET Classifications Name Prefixes",
					"action": "Retrieve a list of name prefixes",
					"description": "Retrieve a list of name prefixes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/name-prefixes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/name-prefixes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Name Prefixes"
					],
					"operation": [
						"GET Classifications Name Prefixes"
					]
				}
			}
		},
];
