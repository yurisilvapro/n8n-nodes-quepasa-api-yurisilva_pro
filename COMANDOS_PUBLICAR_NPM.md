# 🚀 COMANDOS PARA PUBLICAR NO NPM

## 📋 Execute estes comandos no Git CMD:

### 1️⃣ Navegue para o diretório do projeto

```bash
cd "C:\Users\yuri_\Local Projects\n8n\n8n-quepasa-nodes-yurisilva_pro"
```

### 2️⃣ Verifique se está logado no npm

```bash
npm whoami
```

**Resultado esperado:** `yurisilva_pro`

Se não estiver logado, execute:
```bash
npm login
```

### 3️⃣ Teste antes de publicar (opcional)

```bash
npm publish --dry-run
```

Isso mostra o que será publicado **sem realmente publicar**.

### 4️⃣ PUBLIQUE NO NPM 🔥

```bash
npm publish --access public --otp=CODIGO_AQUI
```

**IMPORTANTE:**
- Abra seu **app autenticador** (Google Authenticator, Authy, etc.)
- Pegue o **código de 6 dígitos** para **npm**
- **Substitua `CODIGO_AQUI`** pelo código real
- **Execute RAPIDAMENTE** (código expira em ~30 segundos)

**Exemplo:**
```bash
npm publish --access public --otp=123456
```

---

## ✅ RESULTADO ESPERADO:

Se der certo, você verá:

```
npm notice Publishing to https://registry.npmjs.org/ with tag latest
+ n8n-nodes-quepasa@2.0.1
```

E pronto! 🎉

---

## 🌐 VERIFICAR PUBLICAÇÃO:

Após publicar, acesse:

**npm Registry:**  
https://www.npmjs.com/package/n8n-nodes-quepasa

**Testar instalação:**
```bash
npm view n8n-nodes-quepasa
```

---

## 🚨 POSSÍVEIS ERROS:

### Erro: EOTP (código expirou)
```
npm error code EOTP
npm error This operation requires a one-time password
```

**Solução:** Pegue um **novo código** do autenticador e execute novamente.

---

### Erro: E401 (não autenticado)
```
npm error code E401
npm error 401 Unauthorized
```

**Solução:** Execute `npm login` novamente.

---

### Erro: E403 (sem permissão)
```
npm error code E403
npm error 403 Forbidden
```

**Solução:** 
- Verifique se o pacote já existe: https://www.npmjs.com/package/n8n-nodes-quepasa
- Se já existe e não é seu, escolha outro nome

---

## 📊 INFORMAÇÕES DO PACOTE:

```json
{
  "name": "n8n-nodes-quepasa",
  "version": "2.0.1",
  "author": "Yuri Silva",
  "license": "MIT"
}
```

**Tamanho:** ~18.1 KB (compactado)  
**Arquivos:** 30  
**Repositório:** https://github.com/yurisilvapro/n8n-nodes-quepasa-api-yurisilva_pro

---

## 🎯 APÓS PUBLICAR:

### 1. Verifique no npm:
```bash
npm view n8n-nodes-quepasa
```

### 2. Teste a instalação:
```bash
mkdir test-install
cd test-install
npm init -y
npm install n8n-nodes-quepasa
```

### 3. Use no n8n:
- Abra n8n
- Settings → Community Nodes
- Instale: `n8n-nodes-quepasa`
- Restart n8n
- Procure por "QuePasa" nos nodes!

---

## 📞 ME AVISE:

Depois de executar o comando, me avise:
- ✅ **Sucesso:** Cole aqui o output do comando
- ❌ **Erro:** Cole aqui a mensagem de erro completa

---

**Data:** 22 de Janeiro de 2026  
**Status:** ⏳ Aguardando publicação npm  
**Comando:** `npm publish --access public --otp=CODIGO`

---

**🔥 BOA SORTE! Você está a um comando de distância! 🔥**
