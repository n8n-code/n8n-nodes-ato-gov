import type { INodeProperties } from 'n8n-workflow';

export const individualsAddressesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					]
				}
			},
			"options": [
				{
					"name": "GET Individuals Addresses",
					"value": "GET Individuals Addresses",
					"action": "Retrieve a list of addresses",
					"description": "Retrieve a list of addresses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/addresses"
						}
					}
				},
				{
					"name": "POST Individuals Addresses",
					"value": "POST Individuals Addresses",
					"action": "Create an address",
					"description": "Create an address\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/addresses"
						}
					}
				},
				{
					"name": "DELETE Individuals Addresses",
					"value": "DELETE Individuals Addresses",
					"action": "Delete an address",
					"description": "Delete an address\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				},
				{
					"name": "PUT Individuals Addresses",
					"value": "PUT Individuals Addresses",
					"action": "Update an address",
					"description": "Update an address\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}/addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /individuals/{partyId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"GET Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /individuals/{partyId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "Canberra",
			"description": "The city.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "Australia",
			"description": "The country.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
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
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
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
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 1",
			"name": "line1",
			"type": "string",
			"default": "Level 7",
			"description": "The address line 1.",
			"routing": {
				"send": {
					"property": "line1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 2",
			"name": "line2",
			"type": "string",
			"default": "21 Genge Street",
			"description": "The address line 2.",
			"routing": {
				"send": {
					"property": "line2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 3",
			"name": "line3",
			"type": "string",
			"default": "",
			"description": "The address line 3.",
			"routing": {
				"send": {
					"property": "line3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Kembery Building",
			"description": "The address name.",
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
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "2601",
			"description": "The postal code.",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Suburb",
			"name": "suburb",
			"type": "string",
			"default": "Civic",
			"description": "The suburb.",
			"routing": {
				"send": {
					"property": "suburb",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
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
						"Individuals Addresses"
					],
					"operation": [
						"POST Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /individuals/{partyId}/addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"DELETE Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "PUT /individuals/{partyId}/addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "Canberra",
			"description": "The city.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "Australia",
			"description": "The country.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
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
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
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
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 1",
			"name": "line1",
			"type": "string",
			"default": "Level 7",
			"description": "The address line 1.",
			"routing": {
				"send": {
					"property": "line1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 2",
			"name": "line2",
			"type": "string",
			"default": "21 Genge Street",
			"description": "The address line 2.",
			"routing": {
				"send": {
					"property": "line2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Line 3",
			"name": "line3",
			"type": "string",
			"default": "",
			"description": "The address line 3.",
			"routing": {
				"send": {
					"property": "line3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Kembery Building",
			"description": "The address name.",
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
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "2601",
			"description": "The postal code.",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
		{
			"displayName": "Suburb",
			"name": "suburb",
			"type": "string",
			"default": "Civic",
			"description": "The suburb.",
			"routing": {
				"send": {
					"property": "suburb",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
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
						"Individuals Addresses"
					],
					"operation": [
						"PUT Individuals Addresses"
					]
				}
			}
		},
];
