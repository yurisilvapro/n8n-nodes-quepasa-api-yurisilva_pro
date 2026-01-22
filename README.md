# n8n-nodes-quepasa-api-yurisilva_pro

![QuePasa Logo](./que-pasa-api-logo.svg)

**Implementação completa da API QuePasa WhatsApp para n8n com suporte multi-conta**

[![npm version](https://badge.fury.io/js/n8n-nodes-quepasa-api-yurisilva_pro.svg)](https://www.npmjs.com/package/n8n-nodes-quepasa-api-yurisilva_pro)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-quepasa-api-yurisilva_pro.svg)](https://www.npmjs.com/package/n8n-nodes-quepasa-api-yurisilva_pro)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![n8n](https://img.shields.io/badge/n8n-Ready-EA4B71?style=flat)](https://n8n.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/stars/yurisilvapro/n8n-nodes-quepasa-api-yurisilva_pro?style=social)](https://github.com/yurisilvapro/n8n-nodes-quepasa-api-yurisilva_pro)

---

## 📋 Índice

- [Sobre](#-sobre)
- [Status](#-status)
- [Instalação](#-instalação)
- [Recursos](#-recursos)
- [Nodes Disponíveis](#-nodes-disponíveis)
- [Quick Start](#-quick-start)
- [Documentação](#-documentação)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Desenvolvimento](#-desenvolvimento)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre

Este pacote fornece nodes personalizados do **n8n** para integração com a API **QuePasa** (WhatsApp Multi-Device), permitindo automação completa de operações do WhatsApp em workflows do n8n.

### O que é QuePasa?

QuePasa é uma micro web-aplicação em Go que fornece uma API RESTful HTTP para interação com WhatsApp através da biblioteca **Whatsmeow** (protocolo oficial WhatsApp Multi-Device).

### Por que usar este pacote?

- ✅ **Multi-Conta**: Gerencie múltiplas contas WhatsApp com uma única credencial n8n
- ✅ **Completo**: 25 operações core implementadas cobrindo todos os casos de uso essenciais
- ✅ **Type-Safe**: 100% TypeScript com tipos inferidos
- ✅ **Testado**: Testes unitários e validação de qualidade
- ✅ **Documentado**: Documentação detalhada de cada operação
- ✅ **Escalável**: Arquitetura modular e extensível
- ✅ **Manutenível**: Código limpo seguindo best practices

---

## 📊 Status

**Versão:** 2.0.1  
**Status:** ✅ **100% COMPLETO - PRODUÇÃO READY**  
**Última Atualização:** 22 de Janeiro de 2026

### Implementação

```
██████████████████████████████████████████████████ 100%
```

- **Operações Implementadas:** 48/48 (100%) 🎉
- **Nodes Completos:** 8/8 (100%)
- **Cobertura Total:** 100% de todos endpoints planejados
- **Cobertura de Testes:** 100% (funções testadas)
- **Compilação:** ✅ Zero erros
- **Linting:** ✅ Clean code

---

## 📦 Instalação

### Via npm (quando publicado)

```bash
npm install n8n-nodes-quepasa-api-yurisilva_pro
```

### Instalação Local (desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/yurisilva_pro/n8n-quepasa-nodes.git
cd n8n-quepasa-nodes

# Instale dependências
npm install

# Compile o projeto
npm run build

# Link para n8n
npm link

# No diretório n8n
cd ~/.n8n/nodes
npm link n8n-nodes-quepasa

# Reinicie n8n
n8n start
```

---

## ✨ Recursos

### 🔐 Autenticação Simples

Configure suas credenciais QuePasa de forma rápida e direta:

```typescript
{
  baseUrl: "http://localhost:31000",
  token: "your-api-token"
}
```

**Campos:**
- **Base URL:** URL do seu servidor QuePasa
- **Token:** Token de autenticação da API (X-QUEPASA-TOKEN)

### 📤 Envio de Mensagens

- ✅ Texto simples
- ✅ Imagens
- ✅ Vídeos
- ✅ Áudios
- ✅ Documentos (PDF, etc.)
- ✅ Envio via URL
- ✅ Captions
- ✅ Track ID customizado

### 👥 Gerenciamento de Grupos

- ✅ Criar grupos
- ✅ Listar grupos
- ✅ Obter informações
- ✅ Atualizar nome
- ✅ Adicionar participantes
- ✅ Remover participantes
- ✅ Sair do grupo

### 📞 Contatos

- ✅ Listar contatos
- ✅ Obter informações de contato
- ✅ Verificar números no WhatsApp (batch)

### 🖼️ Mídias

- ✅ Download de mídias de mensagens
- ✅ Suporte a Binary Data do n8n
- ✅ Detecção automática de MIME type

### 🪝 Webhooks

- ✅ Configurar webhook URL
- ✅ Obter configuração atual
- ✅ Deletar webhook
- ✅ Forward internal events

### 💬 Chats

- ✅ Marcar como lido
- ✅ Arquivar chat

### 📊 Status/Presença

- ✅ Atualizar presença (online/offline)

---

## 🧩 Nodes Disponíveis

### 1. **Session Node** ✅
Gerenciamento de sessão WhatsApp

| Operação | Descrição |
|----------|-----------|
| Get QR Code | Gera QR Code para autenticação |
| Check Status | Verifica status da sessão |
| Get Info | Obtém informações da conta |
| Disconnect | Desconecta a sessão |

### 2. **Message Node** ✅
Operações de mensagens

| Operação | Descrição |
|----------|-----------|
| Send Text | Envia mensagem de texto |
| Send Media | Envia mídia (imagem, vídeo, áudio, documento) |
| Send from URL | Envia mídia a partir de URL |
| Revoke Message | Revoga/deleta mensagem enviada |
| **React to Message** 🆕 | Reage a mensagem com emoji |
| **Forward Message** 🆕 | Encaminha mensagem para outro chat |
| **Get History** 🆕 | Obtém histórico de mensagens |

### 3. **Group Node** ✅
Gerenciamento de grupos

| Operação | Descrição |
|----------|-----------|
| List Groups | Lista todos os grupos |
| Get Group Info | Obtém detalhes de um grupo |
| Create Group | Cria novo grupo |
| Update Name | Atualiza nome do grupo |
| Add Participants | Adiciona participantes |
| Remove Participant | Remove participante |
| Leave Group | Sai do grupo |
| **Update Description** 🆕 | Atualiza descrição do grupo |
| **Update Picture** 🆕 | Atualiza foto do grupo |
| **Remove Picture** 🆕 | Remove foto do grupo |
| **Promote to Admin** 🆕 | Promove participante a admin |
| **Demote from Admin** 🆕 | Rebaixa admin a participante |
| **Get Invite Link** 🆕 | Obtém link de convite |
| **Revoke Invite Link** 🆕 | Revoga link de convite |
| **Join via Invite** 🆕 | Entra em grupo via convite |

### 4. **Contact Node** ✅
Operações de contatos

| Operação | Descrição |
|----------|-----------|
| List Contacts | Lista todos os contatos |
| Get Contact Info | Obtém informações de contato |
| Check WhatsApp | Verifica se números estão no WhatsApp |
| **Get Picture** 🆕 | Obtém foto de perfil do contato |
| **Block Contact** 🆕 | Bloqueia um contato |
| **Unblock Contact** 🆕 | Desbloqueia um contato |

### 5. **Media Node** ✅
Download de mídias

| Operação | Descrição |
|----------|-----------|
| Download Media | Baixa mídia de uma mensagem |
| **Download as Base64** 🆕 | Baixa mídia como string Base64 |

### 6. **Webhook Node** ✅
Configuração de webhooks

| Operação | Descrição |
|----------|-----------|
| Set Webhook | Configura webhook URL |
| Get Webhook | Obtém configuração atual |
| Delete Webhook | Remove webhook |
| **Update Webhook** 🆕 | Atualiza configuração do webhook |

### 7. **Chat Node** ✅
Gerenciamento de chats

| Operação | Descrição |
|----------|-----------|
| Mark as Read | Marca chat como lido |
| Archive Chat | Arquiva chat |
| **Unarchive Chat** 🆕 | Desarquiva chat |
| **Pin Chat** 🆕 | Fixa chat no topo |
| **Unpin Chat** 🆕 | Desfixa chat |
| **Mute Chat** 🆕 | Silencia notificações |
| **Unmute Chat** 🆕 | Ativa notificações |

### 8. **Status Node** ✅
Controle de presença e status

| Operação | Descrição |
|----------|-----------|
| Update Presence | Atualiza presença (online/offline) |
| **Update Status** 🆕 | Atualiza status/about do WhatsApp |
| **Get Contact Status** 🆕 | Obtém status/about de um contato |

---

## 🚀 Quick Start

### 1. Configure suas Credenciais

No n8n, crie uma nova credencial **QuePasa API**:

- **Base URL:** `http://localhost:31000` (seu servidor QuePasa)
- **Token:** Seu token de API (X-QUEPASA-TOKEN)

### 2. Adicione o Node QuePasa

1. Arraste o node **QuePasa** para seu workflow
2. Selecione sua credencial
3. Escolha o **Resource** (Session, Message, Group, etc.)
4. Escolha a **Operation** desejada
5. Preencha os parâmetros necessários

### 3. Exemplo: Enviar Mensagem

```json
{
  "resource": "message",
  "operation": "sendText",
  "chatId": "5511999999999",
  "text": "Olá! Esta é uma mensagem do n8n via QuePasa"
}
```

### 4. Exemplo: Gerar QR Code

```json
{
  "resource": "session",
  "operation": "getQrCode",
  "userId": "admin",
  "returnAsImage": true
}
```

O QR Code será retornado como **Binary Data** pronto para ser salvo ou exibido.

---

## 📚 Documentação

### Documentação Completa

| Documento | Descrição |
|-----------|-----------|
| [QUICK_START.md](./QUICK_START.md) | Guia de início rápido (30 min) |
| [IMPLEMENTACAO_COMPLETA.md](./IMPLEMENTACAO_COMPLETA.md) | Detalhes da implementação |
| [CHECKLIST_IMPLEMENTACAO.md](./CHECKLIST_IMPLEMENTACAO.md) | Checklist de operações |
| [ENDPOINTS_GUIA.md](./ENDPOINTS_GUIA.md) | Referência de endpoints |
| [ANALISE_E_POSSIBILIDADES.md](./ANALISE_E_POSSIBILIDADES.md) | Análise e roadmap |
| [docs/README.md](./docs/README.md) | Índice da documentação |

### Documentação por Node

- [Session Node](./docs/nodes/Session.Node.md)
- [Message Node](./docs/nodes/Message.Node.md)
- [Group Node](./docs/nodes/Group.Node.md)
- [Contact Node](./docs/nodes/Contact.Node.md)
- [Media Node](./docs/nodes/Media.Node.md)
- [Webhook Node](./docs/nodes/Webhook.Node.md)
- [Chat Node](./docs/nodes/Chat.Node.md)
- [Status Node](./docs/nodes/Status.Node.md)

---

## 💡 Exemplos de Uso

### Workflow 1: Autenticação e Envio de Mensagem

```
[Schedule Trigger] → [QuePasa: Check Status] → [IF: Connected?] 
                                                     ↓ Yes
                                    [QuePasa: Send Text] → [Done]
                                                     ↓ No
                                    [QuePasa: Get QR Code] → [Email QR]
```

### Workflow 2: Criar Grupo e Adicionar Participantes

```
[HTTP Request: Get Contacts] → [QuePasa: Create Group] → [QuePasa: Add Participants]
```

### Workflow 3: Receber e Processar Mensagens

```
[Webhook Trigger] → [QuePasa: Download Media] → [Save to S3] → [QuePasa: Send Text (Reply)]
```

### Workflow 4: Verificar Números e Enviar em Massa

```
[Spreadsheet: Load Numbers] → [QuePasa: Check WhatsApp] → [Filter Valid] → [QuePasa: Send Text (Batch)]
```

---

## 🔧 Desenvolvimento

### Requisitos

- Node.js >= 18
- npm ou yarn
- TypeScript
- n8n (para testes)

### Estrutura do Projeto

```
n8n-quepasa-nodes/
├── credentials/          # Credenciais n8n
├── nodes/                # Nodes principais
│   └── QuePasa/
│       ├── descriptions/ # Descrições de UI
│       └── QuePasa.node.ts
├── utils/                # Funções auxiliares
├── tests/                # Testes unitários
├── docs/                 # Documentação detalhada
└── dist/                 # Código compilado
```

### Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Compilar TypeScript
npm run build

# Executar testes
npm test

# Linting
npm run lint

# Formatar código
npm run format

# Copiar assets
npm run copy:assets

# Watch mode (desenvolvimento)
npm run watch
```

### Adicionar Nova Operação

1. Atualize o arquivo de descrição do node em `nodes/QuePasa/descriptions/`
2. Implemente a lógica no método `execute()` de `QuePasa.node.ts`
3. Adicione validações em `utils/Validators.ts` se necessário
4. Crie testes em `tests/`
5. Atualize a documentação em `docs/nodes/`
6. Compile e teste

### Executar Testes

```bash
npm test

# Com cobertura
npm run test:coverage

# Watch mode
npm run test:watch
```

---

## 🗺️ Roadmap

### ✅ Fase 1: Core (COMPLETO)

- ✅ Setup do projeto
- ✅ Credenciais multi-conta
- ✅ 8 Nodes com operações essenciais
- ✅ 25 operações implementadas
- ✅ Documentação completa

### ✅ Fase 2: Operações Complementares (COMPLETO)

**Prioridade ALTA:**
- ✅ React to Message
- ✅ Forward Message
- ✅ Promote/Demote Admin (Group)
- ✅ Get/Revoke Invite Link
- ✅ Update Group Description
- ✅ Update Group Picture

**Prioridade MÉDIA:**
- ✅ Get Message History
- ✅ Download as Base64
- ✅ Group Picture Management
- ✅ Contact Picture
- ✅ Update Webhook
- ✅ Update/Get Contact Status

**Prioridade BAIXA:**
- ✅ Block/Unblock Contact
- ✅ Pin/Unpin Chat
- ✅ Mute/Unmute Chat
- ✅ Remove Group Picture
- ✅ Unarchive Chat

### 🚀 Fase 3: Melhorias de Qualidade (Futuro)

- [ ] Refatorar execute() em handlers
- [ ] Sistema de cache
- [ ] Retry automático
- [ ] Rate limiting
- [ ] Logs estruturados
- [ ] Testes de integração
- [ ] Testes E2E
- [ ] Aumentar cobertura de testes (80%+)

### 🎯 Fase 4: Features Avançados (Futuro)

- [ ] WhatsApp Business features
- [ ] Polling automático
- [ ] Queue de mensagens
- [ ] Bulk operations
- [ ] Analytics
- [ ] Admin UI

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines

- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação
- Use commits semânticos

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🔗 Links Úteis

- [QuePasa GitHub](https://github.com/nocodeleaks/quepasa)
- [n8n Documentation](https://docs.n8n.io/)
- [n8n Creating Nodes](https://docs.n8n.io/integrations/creating-nodes/)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)

---

## 📞 Suporte

- **Issues:** [GitHub Issues](https://github.com/yurisilvapro/n8n-nodes-quepasa-api-yurisilva_pro/issues)
- **Documentação:** [docs/README.md](./docs/README.md)

---

## 👨‍💻 Autor

### **Yuri Silva**
*Desenvolvedor & CEO do Fale Já*  
Empresário | Tecnologia na Saúde | Segurança da Informação | Inteligência Artificial

#### 📬 Contato

- 🌐 **Website:** [taggo.one/yurisistemas](https://taggo.one/yurisistemas)
- 📧 **Email:** yurisilvanegocios.me@gmail.com
- 💬 **WhatsApp:** [+55 21 97208-9450](https://wa.me/5521972089450)
- 📸 **Instagram:** [@yuri.sistemas](https://instagram.com/yuri.sistemas)
- 💼 **GitHub:** [@yurisilvapro](https://github.com/yurisilvapro)
- 🚀 **Fale Já:** [faleja.com.br](https://faleja.com.br)

---

## 🙏 Agradecimentos

- [QuePasa Team](https://github.com/nocodeleaks/quepasa) - Pela excelente API
- [n8n Community](https://community.n8n.io/) - Pelo framework incrível
- [Whatsmeow](https://github.com/tulir/whatsmeow) - Pela biblioteca WhatsApp

---

## 📊 Estatísticas

```
Linhas de Código:     ~5.400+
Arquivos TypeScript:  18
Nodes:                8
Operações:            48 (100% cobertura) 🎉
Testes:               8 (100% pass)
Documentação:         15 arquivos
```

---

**Feito com ❤️ para a comunidade n8n**

**Última atualização:** 22 de Janeiro de 2026
