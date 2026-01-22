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
      displayName: 'Accounts',
      name: 'accounts',
      type: 'fixedCollection',
      typeOptions: {
        multipleValues: true,
      },
      default: {},
      placeholder: 'Add Account',
      description: 'Configure multiple QuePasa accounts',
      options: [
        {
          name: 'account',
          displayName: 'Account',
          values: [
            {
              displayName: 'Account Name',
              name: 'name',
              type: 'string',
              default: '',
              placeholder: 'My WhatsApp Account',
              description: 'Friendly name to identify this account',
              required: true,
            },
            {
              displayName: 'Base URL',
              name: 'baseUrl',
              type: 'string',
              default: 'http://localhost:31000',
              placeholder: 'http://localhost:31000',
              description: 'QuePasa server URL for this account',
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
              description: 'API Token for this account',
              required: true,
            },
          ],
        },
      ],
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
      baseURL: '={{$credentials.accounts?.account?.[0]?.baseUrl}}',
      url: '/info',
      headers: {
        'X-QUEPASA-TOKEN': '={{$credentials.accounts?.account?.[0]?.token}}',
      },
    },
  };
}
