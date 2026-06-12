import type { INodeProperties } from 'n8n-workflow';

export const individualsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					]
				}
			},
			"options": [
				{
					"name": "GET Individuals",
					"value": "GET Individuals",
					"action": "Retrieve a list of individuals",
					"description": "Retrieve a list of individuals\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/individuals"
						}
					}
				},
				{
					"name": "POST Individuals",
					"value": "POST Individuals",
					"action": "Create an individual",
					"description": "Create an individual\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/individuals"
						}
					}
				},
				{
					"name": "DELETE Individuals",
					"value": "DELETE Individuals",
					"action": "Delete an individual",
					"description": "Delete an individual with the specified identifier\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}"
						}
					}
				},
				{
					"name": "PUT Individuals",
					"value": "PUT Individuals",
					"action": "Update an individual",
					"description": "Update an individual\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/individuals/{{$parameter[\"partyId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /individuals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"GET Individuals"
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
						"Individuals"
					],
					"operation": [
						"GET Individuals"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"description": "The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateOfBirth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"GET Individuals"
					]
				}
			}
		},
		{
			"displayName": "Place Of Birth",
			"name": "placeOfBirth",
			"description": "The individual's place of birth, for example, `Tamworth`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "placeOfBirth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"GET Individuals"
					]
				}
			}
		},
		{
			"displayName": "POST /individuals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"POST Individuals"
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"Canberra\",\n    \"country\": \"Australia\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"line1\": \"Level 7\",\n    \"line2\": \"21 Genge Street\",\n    \"line3\": \"\",\n    \"name\": \"Kembery Building\",\n    \"postalCode\": \"2601\",\n    \"suburb\": \"Civic\",\n    \"toDate\": \"\",\n    \"addressType\": \"Principal Place of Residence\"\n  }\n]",
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1979-01-13",
			"description": "The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"POST Individuals"
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "Male",
			"description": "The individual's gender.",
			"options": [
				{
					"name": "Female",
					"value": "Female"
				},
				{
					"name": "Male",
					"value": "Male"
				},
				{
					"name": "Not Applicable",
					"value": "Not Applicable"
				},
				{
					"name": "Not Known",
					"value": "Not Known"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"POST Individuals"
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"displayName": "Names",
			"name": "names",
			"type": "json",
			"default": "[\n  {\n    \"direction\": \"left-to-right\",\n    \"familyName\": \"Ferguson\",\n    \"formalSalutation\": \"Mr Robert Ferguson\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"givenName\": \"Robert\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"informalSalutation\": \"Rob\",\n    \"middleName\": \"James\",\n    \"namePrefix\": \"Mr\",\n    \"nameSuffix\": \"\",\n    \"nameType\": \"Principal Name\",\n    \"toDate\": \"\"\n  }\n]",
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Place Of Birth",
			"name": "placeOfBirth",
			"type": "string",
			"default": "Tamworth",
			"description": "The individual's place of birth, for example, `Tamworth`.",
			"routing": {
				"send": {
					"property": "placeOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"POST Individuals"
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
						"Individuals"
					],
					"operation": [
						"POST Individuals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /individuals/{partyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"DELETE Individuals"
					]
				}
			}
		},
		{
			"displayName": "PUT /individuals/{partyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"Canberra\",\n    \"country\": \"Australia\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"id\": {\n      \"0\": \"1\",\n      \"1\": \"2\",\n      \"2\": \"3\",\n      \"3\": \"e\",\n      \"4\": \"4\",\n      \"5\": \"5\",\n      \"6\": \"6\",\n      \"7\": \"7\",\n      \"8\": \"-\",\n      \"9\": \"e\",\n      \"10\": \"8\",\n      \"11\": \"9\",\n      \"12\": \"b\",\n      \"13\": \"-\",\n      \"14\": \"1\",\n      \"15\": \"2\",\n      \"16\": \"d\",\n      \"17\": \"3\",\n      \"18\": \"-\",\n      \"19\": \"a\",\n      \"20\": \"4\",\n      \"21\": \"5\",\n      \"22\": \"6\",\n      \"23\": \"-\",\n      \"24\": \"4\",\n      \"25\": \"2\",\n      \"26\": \"6\",\n      \"27\": \"6\",\n      \"28\": \"5\",\n      \"29\": \"5\",\n      \"30\": \"4\",\n      \"31\": \"4\",\n      \"32\": \"0\",\n      \"33\": \"0\",\n      \"34\": \"0\",\n      \"35\": \"0\"\n    },\n    \"line1\": \"Level 7\",\n    \"line2\": \"21 Genge Street\",\n    \"line3\": \"\",\n    \"name\": \"Kembery Building\",\n    \"postalCode\": \"2601\",\n    \"suburb\": \"Civic\",\n    \"toDate\": \"\",\n    \"addressType\": \"Principal Place of Residence\"\n  }\n]",
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1979-01-13",
			"description": "The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "Male",
			"description": "The individual's gender.",
			"options": [
				{
					"name": "Female",
					"value": "Female"
				},
				{
					"name": "Male",
					"value": "Male"
				},
				{
					"name": "Not Applicable",
					"value": "Not Applicable"
				},
				{
					"name": "Not Known",
					"value": "Not Known"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
		{
			"displayName": "Names",
			"name": "names",
			"type": "json",
			"default": "[\n  {\n    \"direction\": \"left-to-right\",\n    \"familyName\": \"Ferguson\",\n    \"formalSalutation\": \"Mr Robert Ferguson\",\n    \"fromDate\": \"1979-01-13T09:05:06+10:00\",\n    \"givenName\": \"Robert\",\n    \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n    \"informalSalutation\": \"Rob\",\n    \"middleName\": \"James\",\n    \"namePrefix\": \"Mr\",\n    \"nameSuffix\": \"\",\n    \"nameType\": \"Principal Name\",\n    \"toDate\": \"\"\n  }\n]",
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Place Of Birth",
			"name": "placeOfBirth",
			"type": "string",
			"default": "Tamworth",
			"description": "The individual's place of birth, for example, `Tamworth`.",
			"routing": {
				"send": {
					"property": "placeOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
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
						"Individuals"
					],
					"operation": [
						"PUT Individuals"
					]
				}
			}
		},
];
