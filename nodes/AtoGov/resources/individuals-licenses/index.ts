import type { INodeProperties } from 'n8n-workflow';

export const individualsLicensesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					]
				}
			},
			"options": [
				{
					"name": "GET Individuals Licenses",
					"value": "GET Individuals Licenses",
					"action": "Retrieve a list of licenses",
					"description": "Retrieve a list of licenses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/licenses"
						}
					}
				},
				{
					"name": "POST Individuals Licenses",
					"value": "POST Individuals Licenses",
					"action": "Create a license",
					"description": "Create a license\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/licenses"
						}
					}
				},
				{
					"name": "DELETE Individuals Licenses",
					"value": "DELETE Individuals Licenses",
					"action": "Delete a license",
					"description": "Delete a license\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/licenses/{{$parameter[\"productId\"]}}"
						}
					}
				},
				{
					"name": "PUT Individuals Licenses",
					"value": "PUT Individuals Licenses",
					"action": "Update a license",
					"description": "Update a license\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/licenses/{{$parameter[\"productId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /individuals/{partyId}/licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"GET Individuals Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /individuals/{partyId}/licenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
					]
				}
			}
		},
		{
			"displayName": "License Type",
			"name": "licenseType",
			"type": "options",
			"default": "Australian Financial Services License",
			"description": "The license type.",
			"options": [
				{
					"name": "Australian Financial Services License",
					"value": "Australian Financial Services License"
				},
				{
					"name": "License 2 B",
					"value": "License 2B"
				}
			],
			"routing": {
				"send": {
					"property": "licenseType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"POST Individuals Licenses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /individuals/{partyId}/licenses/{productId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"DELETE Individuals Licenses"
					]
				}
			}
		},
		{
			"displayName": "PUT /individuals/{partyId}/licenses/{productId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
					]
				}
			}
		},
		{
			"displayName": "License Type",
			"name": "licenseType",
			"type": "options",
			"default": "Australian Financial Services License",
			"description": "The license type.",
			"options": [
				{
					"name": "Australian Financial Services License",
					"value": "Australian Financial Services License"
				},
				{
					"name": "License 2 B",
					"value": "License 2B"
				}
			],
			"routing": {
				"send": {
					"property": "licenseType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
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
						"Individuals Licenses"
					],
					"operation": [
						"PUT Individuals Licenses"
					]
				}
			}
		},
];
