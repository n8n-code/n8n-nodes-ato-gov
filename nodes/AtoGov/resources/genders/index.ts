import type { INodeProperties } from 'n8n-workflow';

export const gendersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Genders"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Genders",
					"value": "GET Classifications Genders",
					"action": "Retrieve a list of genders",
					"description": "Retrieve a list of genders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/genders"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/genders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genders"
					],
					"operation": [
						"GET Classifications Genders"
					]
				}
			}
		},
];
