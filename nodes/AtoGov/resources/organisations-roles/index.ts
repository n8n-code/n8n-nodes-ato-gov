import type { INodeProperties } from 'n8n-workflow';

export const organisationsRolesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					]
				}
			},
			"options": [
				{
					"name": "GET Organisations Roles",
					"value": "GET Organisations Roles",
					"action": "Retrieve a list of roles",
					"description": "Retrieve a list of roles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/roles"
						}
					}
				},
				{
					"name": "POST Organisations Roles",
					"value": "POST Organisations Roles",
					"action": "Create a role",
					"description": "Create a role\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/roles"
						}
					}
				},
				{
					"name": "DELETE Organisations Roles",
					"value": "DELETE Organisations Roles",
					"action": "Delete a role",
					"description": "Delete a role\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/roles/{{$parameter[\"roleId\"]}}"
						}
					}
				},
				{
					"name": "PUT Organisations Roles",
					"value": "PUT Organisations Roles",
					"action": "Update a role",
					"description": "Update a role\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organisations/{{$parameter[\"partyId\"]}}/roles/{{$parameter[\"roleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organisations/{partyId}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"GET Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /organisations/{partyId}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"type": "string",
			"default": "2016-01-13T09:05:06+10:00",
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
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
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
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "Party Role Type",
			"name": "partyRoleType",
			"type": "options",
			"default": "Employee",
			"description": "The party's role type.",
			"options": [
				{
					"name": "Director",
					"value": "Director"
				},
				{
					"name": "Employee",
					"value": "Employee"
				},
				{
					"name": "Member",
					"value": "Member"
				},
				{
					"name": "Partner",
					"value": "Partner"
				},
				{
					"name": "Trustee",
					"value": "Trustee"
				}
			],
			"routing": {
				"send": {
					"property": "partyRoleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Related Party ID",
			"name": "relatedPartyId",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
			"routing": {
				"send": {
					"property": "relatedPartyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "Related Party Role Type",
			"name": "relatedPartyRoleType",
			"type": "options",
			"default": "Employer",
			"description": "The related party's role type.",
			"options": [
				{
					"name": "Association",
					"value": "Association"
				},
				{
					"name": "Company",
					"value": "Company"
				},
				{
					"name": "Employer",
					"value": "Employer"
				},
				{
					"name": "Organisation",
					"value": "Organisation"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trust",
					"value": "Trust"
				}
			],
			"routing": {
				"send": {
					"property": "relatedPartyRoleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Relationship Type",
			"name": "relationshipType",
			"type": "options",
			"default": "Employment",
			"description": "The relationship type.",
			"options": [
				{
					"name": "Directorship",
					"value": "Directorship"
				},
				{
					"name": "Employment",
					"value": "Employment"
				},
				{
					"name": "Membership",
					"value": "Membership"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trusteeship",
					"value": "Trusteeship"
				}
			],
			"routing": {
				"send": {
					"property": "relationshipType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
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
						"Organisations Roles"
					],
					"operation": [
						"POST Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organisations/{partyId}/roles/{roleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"DELETE Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "PUT /organisations/{partyId}/roles/{roleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"type": "string",
			"default": "2016-01-13T09:05:06+10:00",
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
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
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
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "Party Role Type",
			"name": "partyRoleType",
			"type": "options",
			"default": "Employee",
			"description": "The party's role type.",
			"options": [
				{
					"name": "Director",
					"value": "Director"
				},
				{
					"name": "Employee",
					"value": "Employee"
				},
				{
					"name": "Member",
					"value": "Member"
				},
				{
					"name": "Partner",
					"value": "Partner"
				},
				{
					"name": "Trustee",
					"value": "Trustee"
				}
			],
			"routing": {
				"send": {
					"property": "partyRoleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Related Party ID",
			"name": "relatedPartyId",
			"type": "string",
			"default": "123e4567-e89b-12d3-a456-426655440000",
			"routing": {
				"send": {
					"property": "relatedPartyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
		{
			"displayName": "Related Party Role Type",
			"name": "relatedPartyRoleType",
			"type": "options",
			"default": "Employer",
			"description": "The related party's role type.",
			"options": [
				{
					"name": "Association",
					"value": "Association"
				},
				{
					"name": "Company",
					"value": "Company"
				},
				{
					"name": "Employer",
					"value": "Employer"
				},
				{
					"name": "Organisation",
					"value": "Organisation"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trust",
					"value": "Trust"
				}
			],
			"routing": {
				"send": {
					"property": "relatedPartyRoleType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Relationship Type",
			"name": "relationshipType",
			"type": "options",
			"default": "Employment",
			"description": "The relationship type.",
			"options": [
				{
					"name": "Directorship",
					"value": "Directorship"
				},
				{
					"name": "Employment",
					"value": "Employment"
				},
				{
					"name": "Membership",
					"value": "Membership"
				},
				{
					"name": "Partnership",
					"value": "Partnership"
				},
				{
					"name": "Trusteeship",
					"value": "Trusteeship"
				}
			],
			"routing": {
				"send": {
					"property": "relationshipType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
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
						"Organisations Roles"
					],
					"operation": [
						"PUT Organisations Roles"
					]
				}
			}
		},
];
