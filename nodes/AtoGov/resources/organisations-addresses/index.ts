import type { INodeProperties } from 'n8n-workflow';

export const organisationsAddressesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Addresses"
					]
				}
			},
			"options": [
				{
					"name": "GET Organisations Addresses",
					"value": "GET Organisations Addresses",
					"action": "Retrieve a list of addresses",
					"description": "Retrieve a list of addresses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/addresses"
						}
					}
				},
				{
					"name": "POST Organisations Addresses",
					"value": "POST Organisations Addresses",
					"action": "Create an address",
					"description": "Create an address\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/addresses"
						}
					}
				},
				{
					"name": "DELETE Organisations Addresses",
					"value": "DELETE Organisations Addresses",
					"action": "Delete an address",
					"description": "Delete an address\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				},
				{
					"name": "PUT Organisations Addresses",
					"value": "PUT Organisations Addresses",
					"action": "Update an address",
					"description": "Update an address\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organisations/{partyId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Addresses"
					],
					"operation": [
						"GET Organisations Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /organisations/{partyId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"POST Organisations Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organisations/{partyId}/addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Addresses"
					],
					"operation": [
						"DELETE Organisations Addresses"
					]
				}
			}
		},
		{
			"displayName": "PUT /organisations/{partyId}/addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
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
						"Organisations Addresses"
					],
					"operation": [
						"PUT Organisations Addresses"
					]
				}
			}
		},
];
