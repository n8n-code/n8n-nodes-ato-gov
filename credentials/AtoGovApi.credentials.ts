import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AtoGovApi implements ICredentialType {
        name = 'N8nDevAtoGovApi';

        displayName = 'Ato Gov API';

        icon: Icon = { light: 'file:../nodes/AtoGov/ato-gov.png', dark: 'file:../nodes/AtoGov/ato-gov.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '//api.abr.ato.gov.au/',
                        required: true,
                        placeholder: '//api.abr.ato.gov.au/',
                        description: 'The base URL of your Ato Gov API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
