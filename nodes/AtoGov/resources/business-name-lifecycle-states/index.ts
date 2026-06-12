import type { INodeProperties } from 'n8n-workflow';

export const businessNameLifecycleStatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business Name Lifecycle States"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Business Name Lifecycle States",
					"value": "GET Classifications Business Name Lifecycle States",
					"action": "Retrieve a list of business name lifecycle states",
					"description": "Retrieve a list of business name lifecycle states",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/business-name-lifecycle-states"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/business-name-lifecycle-states",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Name Lifecycle States"
					],
					"operation": [
						"GET Classifications Business Name Lifecycle States"
					]
				}
			}
		},
];
