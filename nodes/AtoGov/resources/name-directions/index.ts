import type { INodeProperties } from 'n8n-workflow';

export const nameDirectionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Name Directions"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Name Directions",
					"value": "GET Classifications Name Directions",
					"action": "Retrieve a list of name directions",
					"description": "Retrieve a list of name directions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/name-directions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/name-directions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Name Directions"
					],
					"operation": [
						"GET Classifications Name Directions"
					]
				}
			}
		},
];
