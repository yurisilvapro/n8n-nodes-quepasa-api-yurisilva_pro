# ⚠️ Nota Sobre Validação de Credenciais

## 📋 LIMITAÇÃO IDENTIFICADA

### Problema Reportado:
O teste de credenciais no n8n mostra **"Connection tested successfully"** mesmo com **token inválido**.

### Causa:
A API QuePasa pode retornar HTTP 200 (sucesso) mesmo quando o token é inválido, incluindo informações de erro no corpo da resposta em vez de usar códigos de status HTTP apropriados (401/403).

**Comportamento da API QuePasa:**
```
Token Válido:
  Status: 200 OK
  Body: { "connected": true, "phone": "551199999999", ... }

Token Inválido:
  Status: 200 OK (⚠️ deveria ser 401)
  Body: { "error": "invalid token", ... }
```

Como o n8n valida apenas o status HTTP (200 = sucesso), o teste passa mesmo com credenciais inválidas.

---

## ✅ SOLUÇÃO: COMO VALIDAR CORRETAMENTE

### Método 1: Teste com Operação Real (RECOMENDADO)

Após configurar as credenciais, **sempre teste com uma operação real**:

#### 1. Configure as Credenciais
```
Base URL: https://seu-servidor.com
Token: seu-token-aqui
```

#### 2. Crie um Workflow de Teste
```
[Manual Trigger] → [QuePasa: Check Status]
```

**Configuração do Node:**
- Resource: `Session`
- Operation: `Check Status`

#### 3. Execute o Workflow

**✅ Token Válido:**
```json
{
  "connected": true,
  "phone": "5511999999999",
  "user": "username",
  "version": "v4"
}
```

**❌ Token Inválido:**
```
Error: QuePasa API Error [401]: Unauthorized
```
ou
```
Error: QuePasa API Error [403]: Forbidden
```

---

### Método 2: Teste via Terminal

Teste diretamente com `curl`:

```bash
# Substitua os valores
BASE_URL="https://seu-servidor.com"
TOKEN="seu-token-aqui"

# Execute o teste
curl -X GET "${BASE_URL}/info" \
  -H "X-QUEPASA-TOKEN: ${TOKEN}" \
  -H "Accept: application/json"
```

**✅ Token Válido:**
```json
{
  "connected": true,
  "phone": "5511999999999"
}
```

**❌ Token Inválido:**
```json
{
  "error": "unauthorized",
  "message": "Invalid token"
}
```

---

## 🔧 VALIDAÇÃO MANUAL PASSO A PASSO

### Checklist de Validação:

1. **Base URL Correto?**
   - [ ] URL está acessível
   - [ ] Não tem `/v4/` no final
   - [ ] Porta correta (geralmente 31000)
   - [ ] Protocolo correto (http/https)

2. **Token Correto?**
   - [ ] Copiado completamente (sem espaços)
   - [ ] Token ativo (não expirado)
   - [ ] Token tem permissões necessárias

3. **Servidor Acessível?**
   - [ ] Servidor QuePasa está rodando
   - [ ] Rede/firewall permite conexão
   - [ ] SSL/TLS configurado (se HTTPS)

4. **Teste Real?**
   - [ ] Executou workflow de teste
   - [ ] Recebeu resposta com dados válidos
   - [ ] Sem erros 401/403

---

## 📝 EXEMPLO DE WORKFLOW DE VALIDAÇÃO

### Workflow Completo de Teste

```
┌─────────────────────────────────────────┐
│ 1. [Manual Trigger]                     │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│ 2. [QuePasa: Check Status]              │
│    Resource: Session                    │
│    Operation: Check Status              │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│ 3. [IF Node]                            │
│    Condition: {{ $json.connected }}     │
│    = true                               │
└─────┬───────────────────────┬───────────┘
      │                       │
      ▼ TRUE                  ▼ FALSE
┌───────────────┐      ┌─────────────────┐
│ [Set Node]    │      │ [Set Node]      │
│ Status: ✅    │      │ Status: ❌      │
│ Valid Token!  │      │ Invalid Token!  │
└───────────────┘      └─────────────────┘
```

---

## 🎯 MELHORIAS FUTURAS

### O que pode ser feito:

1. **No QuePasa API (Backend):**
   - Retornar HTTP 401/403 para token inválido
   - Implementar endpoint específico para validação

2. **No n8n Node (Este Pacote):**
   - ✅ Timeout de 10 segundos adicionado
   - ✅ SSL validation skip para desenvolvimento
   - ⏳ Validação customizada de resposta (limitação do n8n)

3. **Workaround Atual:**
   - Documentação clara sobre teste manual
   - Workflow de validação de exemplo

---

## 📊 RESUMO

| Aspecto | Status | Nota |
|---------|--------|------|
| Teste de Conexão n8n | ⚠️ Limitado | Pode passar com token inválido |
| Teste via Workflow Real | ✅ Confiável | Sempre valida corretamente |
| Teste via curl | ✅ Confiável | Valida diretamente na API |
| Documentação | ✅ Completa | Este guia + exemplos |

---

## ✅ RECOMENDAÇÃO FINAL

**SEMPRE faça um teste real após configurar credenciais:**

1. Configure Base URL e Token
2. ~~Clique em "Test Connection"~~ (pode dar falso positivo)
3. ✅ **Execute um workflow real** (Check Status, Send Message, etc.)
4. Verifique se recebe dados válidos sem erros 401/403

Se receber erro 401/403, o token está inválido.  
Se receber dados válidos, o token está correto! ✅

---

## 📞 REPORTAR PROBLEMA

Se após seguir este guia ainda tiver problemas:

1. **Teste via curl** e cole o resultado
2. **Screenshot** do erro no n8n
3. **Versão** do n8n e do pacote
4. **Base URL** (sem mostrar o token)

**Reporte em:**
- GitHub Issues: https://github.com/yurisilvapro/n8n-nodes-quepasa-api-yurisilva_pro/issues
- Email: yurisilvanegocios.me@gmail.com

---

**Data:** 22 de Janeiro de 2026  
**Versão:** 2.2.2  
**Status:** ⚠️ **LIMITAÇÃO DOCUMENTADA**
