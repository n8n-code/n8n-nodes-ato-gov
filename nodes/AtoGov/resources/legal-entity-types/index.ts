import type { INodeProperties } from 'n8n-workflow';

export const legalEntityTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entity Types"
					]
				}
			},
			"options": [
				{
					"name": "GET Classifications Legal Entity Types",
					"value": "GET Classifications Legal Entity Types",
					"action": "Retrieve a list of legal entity types",
					"description": "Retrieve a list of legal entity types",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/classifications/legal-entity-types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /classifications/legal-entity-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Legal Entity Types"
					],
					"operation": [
						"GET Classifications Legal Entity Types"
					]
				}
			}
		},
];
