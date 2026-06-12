import type { INodeProperties } from 'n8n-workflow';

export const organisationsBusinessNamesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					]
				}
			},
			"options": [
				{
					"name": "GET Organisations Business Names",
					"value": "GET Organisations Business Names",
					"action": "Retrieve a list of business names",
					"description": "Retrieve a list of business names",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/business-names"
						}
					}
				},
				{
					"name": "POST Organisations Business Names",
					"value": "POST Organisations Business Names",
					"action": "Create a business name",
					"description": "Create a business name\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/business-names"
						}
					}
				},
				{
					"name": "DELETE Organisations Business Names",
					"value": "DELETE Organisations Business Names",
					"action": "Delete a business name",
					"description": "Delete a business name\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/business-names/{{$parameter[\"productId\"]}}"
						}
					}
				},
				{
					"name": "PUT Organisations Business Names",
					"value": "PUT Organisations Business Names",
					"action": "Update a business name",
					"description": "Update a business name\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/business-names/{{$parameter[\"productId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organisations/{partyId}/business-names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"GET Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "POST /organisations/{partyId}/business-names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"type": "string",
			"default": "1979-01-13T09:05:06+10:00",
			"description": "The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).",
			"routing": {
				"send": {
					"property": "fromDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
			"description": "The resource ID. Defaults to UUID v4",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "Lifecycle State",
			"name": "lifecycleState",
			"type": "options",
			"default": "Pending Approval",
			"description": "The business name's lifecycle state.",
			"options": [
				{
					"name": "Approved",
					"value": "Approved"
				},
				{
					"name": "Expired",
					"value": "Expired"
				},
				{
					"name": "Issued",
					"value": "Issued"
				},
				{
					"name": "Pending Approval",
					"value": "Pending Approval"
				},
				{
					"name": "Suspended",
					"value": "Suspended"
				}
			],
			"routing": {
				"send": {
					"property": "lifecycleState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "XYZ Technology Ventures",
			"description": "The business name.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"type": "string",
			"default": "",
			"description": "The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).",
			"routing": {
				"send": {
					"property": "toDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"POST Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organisations/{partyId}/business-names/{productId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"DELETE Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "PUT /organisations/{partyId}/business-names/{productId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"type": "string",
			"default": "1979-01-13T09:05:06+10:00",
			"description": "The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).",
			"routing": {
				"send": {
					"property": "fromDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
			"description": "The resource ID. Defaults to UUID v4",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "Lifecycle State",
			"name": "lifecycleState",
			"type": "options",
			"default": "Pending Approval",
			"description": "The business name's lifecycle state.",
			"options": [
				{
					"name": "Approved",
					"value": "Approved"
				},
				{
					"name": "Expired",
					"value": "Expired"
				},
				{
					"name": "Issued",
					"value": "Issued"
				},
				{
					"name": "Pending Approval",
					"value": "Pending Approval"
				},
				{
					"name": "Suspended",
					"value": "Suspended"
				}
			],
			"routing": {
				"send": {
					"property": "lifecycleState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "XYZ Technology Ventures",
			"description": "The business name.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"type": "string",
			"default": "",
			"description": "The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).",
			"routing": {
				"send": {
					"property": "toDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Business Names"
					],
					"operation": [
						"PUT Organisations Business Names"
					]
				}
			}
		},
];
