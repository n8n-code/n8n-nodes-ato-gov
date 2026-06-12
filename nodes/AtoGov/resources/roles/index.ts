import type { INodeProperties } from 'n8n-workflow';

export const rolesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Roles",
					"value": "GET Classifications Roles",
					"action": "Retrieve a list of roles",
					"description": "Retrieve a list of roles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/roles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"GET Classifications Roles"
					]
				}
			}
		},
];
