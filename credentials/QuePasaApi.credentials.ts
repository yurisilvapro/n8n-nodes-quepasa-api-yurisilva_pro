import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class QuePasaApi implements ICredentialType {
  name = 'quePasaApi';
  displayName = 'QuePasa API';
  documentationUrl = 'https://github.com/nocodeleaks/quepasa';
  icon = 'file:quepasa.svg' as any;
  properties: INodeProperties[] = [
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: 'http://localhost:31000',
      placeholder: 'https://your-server.com',
      description: 'QuePasa server URL',
      required: true,
    },
    {
      displayName: 'Token',
      name: 'token',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      placeholder: 'Your API Token',
      description: 'API Token from QuePasa (X-QUEPASA-TOKEN header)',
      required: true,
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        'X-QUEPASA-TOKEN': '={{$credentials.token}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: '={{$credentials.baseUrl}}',
      url: '/info',
      headers: {
        'X-QUEPASA-TOKEN': '={{$credentials.token}}',
      },
    },
  };
}
