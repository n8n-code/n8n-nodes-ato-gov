import type { INodeProperties } from 'n8n-workflow';

export const businessNamesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business Names"
					]
				}
			},
			"options": [
				{
					"name": "GET Business Names",
					"value": "GET Business Names",
					"action": "Retrieve a list of business names",
					"description": "Retrieve a list of business names\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-names"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /business-names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Names"
					],
					"operation": [
						"GET Business Names"
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
						"Business Names"
					],
					"operation": [
						"GET Business Names"
					]
				}
			}
		},
];
