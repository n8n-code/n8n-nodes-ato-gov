import type { INodeProperties } from 'n8n-workflow';

export const licensesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					]
				}
			},
			"options": [
				{
					"name": "GET Licenses",
					"value": "GET Licenses",
					"action": "Retrieve a list of licenses",
					"description": "Retrieve a list of licenses\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/licenses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"GET Licenses"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"description": "The API key.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licenses"
					],
					"operation": [
						"GET Licenses"
					]
				}
			}
		},
];
