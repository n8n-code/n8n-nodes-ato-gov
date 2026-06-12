import type { INodeProperties } from 'n8n-workflow';

export const licenseLifecycleStatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"License Lifecycle States"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications License Lifecycle States",
					"value": "GET Classifications License Lifecycle States",
					"action": "Retrieve a list of license lifecycle states",
					"description": "Retrieve a list of license lifecycle states",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/license-lifecycle-states"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/license-lifecycle-states",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"License Lifecycle States"
					],
					"operation": [
						"GET Classifications License Lifecycle States"
					]
				}
			}
		},
];
