import type { INodeProperties } from 'n8n-workflow';

export const organisationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					]
				}
			},
			"options": [
				{
					"name": "GET Organisations",
					"value": "GET Organisations",
					"action": "Retrieve a list of organisations",
					"description": "Retrieve a list of organisations\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organisations"
						}
					}
				},
				{
					"name": "POST Organisations",
					"value": "POST Organisations",
					"action": "Create an organisation",
					"description": "Create an organisation\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organisations"
						}
					}
				},
				{
					"name": "DELETE Organisations",
					"value": "DELETE Organisations",
					"action": "Delete an organisation",
					"description": "Delete an organisation with the specified identifier\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}"
						}
					}
				},
				{
					"name": "PUT Organisations",
					"value": "PUT Organisations",
					"action": "Update an organisation",
					"description": "Update an organisation\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organisations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"GET Organisations"
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
						"Organisations"
					],
					"operation": [
						"GET Organisations"
					]
				}
			}
		},
		{
			"displayName": "Registered Identifier",
			"name": "registeredIdentifier",
			"description": "The registered identifier, for example, `ACN` or `ABN`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "registeredIdentifier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"GET Organisations"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"description": "The identifier, for example, `123456789`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "identifier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"GET Organisations"
					]
				}
			}
		},
		{
			"displayName": "POST /organisations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
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
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"Canberra\",\n    \"country\": \"Australia\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"line1\": \"Level 7\",\n    \"line2\": \"21 Genge Street\",\n    \"line3\": \"\",\n    \"name\": \"Kembery Building\",\n    \"postalCode\": \"2601\",\n    \"suburb\": \"Civic\",\n    \"toDate\": \"\",\n    \"addressType\": \"Principal Place of Business\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"displayName": "Electronic Addresses",
			"name": "electronicAddresses",
			"type": "json",
			"default": "[\n  {\n    \"areaCode\": \"02\",\n    \"countryPrefix\": \"61\",\n    \"electronicAddressType\": \"Landline\",\n    \"email\": \"\",\n    \"extension\": \"\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"number\": \"62164453\",\n    \"toDate\": \"\",\n    \"url\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "electronicAddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Establishment Date",
			"name": "establishmentDate",
			"type": "string",
			"default": "1928-03-03",
			"description": "The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
			"routing": {
				"send": {
					"property": "establishmentDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
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
						"Organisations"
					],
					"operation": [
						"POST Organisations"
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
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Legal Entity Type",
			"name": "legalEntityType",
			"type": "options",
			"default": "Company",
			"description": "The organisation's legal entity type.",
			"options": [
				{
					"name": "Company",
					"value": "Company"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trust",
					"value": "Trust"
				},
				{
					"name": "Joint Venture",
					"value": "Joint Venture"
				}
			],
			"routing": {
				"send": {
					"property": "legalEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"displayName": "Names",
			"name": "names",
			"type": "json",
			"default": "[\n  {\n    \"fromDate\": \"1928-03-03T09:05:06+10:00\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"name\": \"321 Technology Ventures\",\n    \"toDate\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "names",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"displayName": "Registered Identifiers",
			"name": "registeredIdentifiers",
			"type": "json",
			"default": "[\n  {\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"identifier\": \"123456789\",\n    \"identifierType\": \"ACN\",\n    \"toDate\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "registeredIdentifiers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"POST Organisations"
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
						"Organisations"
					],
					"operation": [
						"POST Organisations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organisations/{partyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"DELETE Organisations"
					]
				}
			}
		},
		{
			"displayName": "PUT /organisations/{partyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"Canberra\",\n    \"country\": \"Australia\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"line1\": \"Level 7\",\n    \"line2\": \"21 Genge Street\",\n    \"line3\": \"\",\n    \"name\": \"Kembery Building\",\n    \"postalCode\": \"2601\",\n    \"suburb\": \"Civic\",\n    \"toDate\": \"\",\n    \"addressType\": \"Principal Place of Business\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"displayName": "Electronic Addresses",
			"name": "electronicAddresses",
			"type": "json",
			"default": "[\n  {\n    \"areaCode\": \"02\",\n    \"countryPrefix\": \"61\",\n    \"electronicAddressType\": \"Landline\",\n    \"email\": \"\",\n    \"extension\": \"\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"number\": \"62164453\",\n    \"toDate\": \"\",\n    \"url\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "electronicAddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Establishment Date",
			"name": "establishmentDate",
			"type": "string",
			"default": "1928-03-03",
			"description": "The organisation's establishment date, for example, `1928-03-03` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
			"routing": {
				"send": {
					"property": "establishmentDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
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
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
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
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Legal Entity Type",
			"name": "legalEntityType",
			"type": "options",
			"default": "Company",
			"description": "The organisation's legal entity type.",
			"options": [
				{
					"name": "Company",
					"value": "Company"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trust",
					"value": "Trust"
				},
				{
					"name": "Joint Venture",
					"value": "Joint Venture"
				}
			],
			"routing": {
				"send": {
					"property": "legalEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"displayName": "Names",
			"name": "names",
			"type": "json",
			"default": "[\n  {\n    \"fromDate\": \"1928-03-03T09:05:06+10:00\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"name\": \"321 Technology Ventures\",\n    \"toDate\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "names",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
		{
			"displayName": "Registered Identifiers",
			"name": "registeredIdentifiers",
			"type": "json",
			"default": "[\n  {\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"identifier\": \"123456789\",\n    \"identifierType\": \"ACN\",\n    \"toDate\": \"\"\n  }\n]",
			"routing": {
				"send": {
					"property": "registeredIdentifiers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
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
						"Organisations"
					],
					"operation": [
						"PUT Organisations"
					]
				}
			}
		},
];
