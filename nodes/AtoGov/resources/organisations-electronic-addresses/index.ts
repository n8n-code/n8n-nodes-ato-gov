import type { INodeProperties } from 'n8n-workflow';

export const organisationsElectronicAddressesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					]
				}
			},
			"options": [
				{
					"name": "GET Organisations Electronic Addresses",
					"value": "GET Organisations Electronic Addresses",
					"action": "Retrieve a list of electronic addresses",
					"description": "Retrieve a list of electronic addresses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/electronic-addresses"
						}
					}
				},
				{
					"name": "POST Organisations Electronic Addresses",
					"value": "POST Organisations Electronic Addresses",
					"action": "Create an electronic address",
					"description": "Create an electronic address\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/electronic-addresses"
						}
					}
				},
				{
					"name": "DELETE Organisations Electronic Addresses",
					"value": "DELETE Organisations Electronic Addresses",
					"action": "Delete an electronic address",
					"description": "Delete an electronic address\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/electronic-addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				},
				{
					"name": "PUT Organisations Electronic Addresses",
					"value": "PUT Organisations Electronic Addresses",
					"action": "Update an electronic address",
					"description": "Update an electronic address\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/electronic-addresses/{{$parameter[\"addressId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organisations/{partyId}/electronic-addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"GET Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /organisations/{partyId}/electronic-addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Area Code",
			"name": "areaCode",
			"type": "string",
			"default": "02",
			"description": "The area code, for example, \"02\".",
			"routing": {
				"send": {
					"property": "areaCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Country Prefix",
			"name": "countryPrefix",
			"type": "string",
			"default": "61",
			"description": "The country prefix, for example, \"61\".",
			"routing": {
				"send": {
					"property": "countryPrefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Electronic Address Type",
			"name": "electronicAddressType",
			"type": "options",
			"default": "Landline",
			"description": "The electronic address type.",
			"options": [
				{
					"name": "Email",
					"value": "Email"
				},
				{
					"name": "Fax",
					"value": "Fax"
				},
				{
					"name": "Landline",
					"value": "Landline"
				},
				{
					"name": "Mobile",
					"value": "Mobile"
				},
				{
					"name": "Website",
					"value": "Website"
				}
			],
			"routing": {
				"send": {
					"property": "electronicAddressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address, for example, \"robert.ferguson@ato.gov.au\".",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Extension",
			"name": "extension",
			"type": "string",
			"default": "",
			"description": "The extension number, for example, \"4453\".",
			"routing": {
				"send": {
					"property": "extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "62164453",
			"description": "The number, for example, \"62164453\".",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "The website address, for example, \"https://ato.gov.au\".",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"POST Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organisations/{partyId}/electronic-addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"DELETE Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "PUT /organisations/{partyId}/electronic-addresses/{addressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Area Code",
			"name": "areaCode",
			"type": "string",
			"default": "02",
			"description": "The area code, for example, \"02\".",
			"routing": {
				"send": {
					"property": "areaCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Country Prefix",
			"name": "countryPrefix",
			"type": "string",
			"default": "61",
			"description": "The country prefix, for example, \"61\".",
			"routing": {
				"send": {
					"property": "countryPrefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Electronic Address Type",
			"name": "electronicAddressType",
			"type": "options",
			"default": "Landline",
			"description": "The electronic address type.",
			"options": [
				{
					"name": "Email",
					"value": "Email"
				},
				{
					"name": "Fax",
					"value": "Fax"
				},
				{
					"name": "Landline",
					"value": "Landline"
				},
				{
					"name": "Mobile",
					"value": "Mobile"
				},
				{
					"name": "Website",
					"value": "Website"
				}
			],
			"routing": {
				"send": {
					"property": "electronicAddressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email address, for example, \"robert.ferguson@ato.gov.au\".",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Extension",
			"name": "extension",
			"type": "string",
			"default": "",
			"description": "The extension number, for example, \"4453\".",
			"routing": {
				"send": {
					"property": "extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "62164453",
			"description": "The number, for example, \"62164453\".",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
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
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "The website address, for example, \"https://ato.gov.au\".",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Electronic Addresses"
					],
					"operation": [
						"PUT Organisations Electronic Addresses"
					]
				}
			}
		},
];
