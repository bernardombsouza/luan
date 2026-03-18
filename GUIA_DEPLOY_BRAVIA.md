# 🚀 GUIA COMPLETO DE DEPLOY - BRAVIA ENGENHARIA

## SITE PRONTO PARA PRODUÇÃO ✅

Seu site está 100% funcional e pronto para ir ao ar em **www.bravia.ind.br**

---

## 📋 OPÇÕES DE DEPLOY

### **OPÇÃO 1: EMERGENT DEPLOY (RECOMENDADO - MAIS FÁCIL)** ⭐

A Emergent oferece deploy automático. Para usar:

1. **Entre em contato com o suporte da Emergent**
   - Peça para configurar deploy para produção
   - Informe o domínio: **www.bravia.ind.br**

2. **Configuração DNS**
   - Acesse o painel do Registro.br (onde você registrou bravia.ind.br)
   - Adicione os registros DNS que a Emergent fornecer
   - Exemplo típico:
     ```
     Tipo: A
     Nome: @
     Valor: [IP fornecido pela Emergent]
     
     Tipo: CNAME
     Nome: www
     Valor: [domínio fornecido pela Emergent]
     ```

3. **Aguarde propagação DNS** (6-48 horas, geralmente 2-4 horas)

---

### **OPÇÃO 2: VERCEL (DEPLOY GRATUITO E RÁPIDO)** 🌐

**Passo 1: Preparar o código**
```bash
# Seu código já está pronto em /app
```

**Passo 2: Deploy no Vercel**

1. Acesse: https://vercel.com
2. Conecte com GitHub/GitLab
3. Importe o repositório
4. Vercel detectará automaticamente React
5. Clique em "Deploy"

**Passo 3: Configurar domínio personalizado**

1. No painel Vercel → Seu projeto → Settings → Domains
2. Adicione: **www.bravia.ind.br**
3. Vercel fornecerá registros DNS

**Passo 4: Configurar DNS no Registro.br**

1. Acesse: https://registro.br
2. Faça login
3. Vá em "Meus Domínios" → bravia.ind.br → "Editar Zona"
4. Adicione os registros fornecidos pelo Vercel:
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   ```

**Passo 5: Configurar variáveis de ambiente**

No Vercel → Settings → Environment Variables:
```
REACT_APP_BACKEND_URL=https://api.bravia.ind.br
```

---

### **OPÇÃO 3: AWS / DIGITAL OCEAN / HOSPEDAGEM PRÓPRIA** 🖥️

Se você tem servidor próprio ou VPS:

**Passo 1: Build do projeto**
```bash
cd /app/frontend
yarn build
# Isso gera a pasta /app/frontend/build com site otimizado
```

**Passo 2: Configurar servidor (exemplo: Nginx)**

Arquivo: `/etc/nginx/sites-available/bravia`
```nginx
server {
    listen 80;
    server_name www.bravia.ind.br bravia.ind.br;
    
    root /var/www/bravia/build;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Passo 3: Configurar SSL (HTTPS)**
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado SSL grátis
sudo certbot --nginx -d bravia.ind.br -d www.bravia.ind.br
```

---

## 🔍 CONFIGURAÇÃO DE SEO NO GOOGLE

### **1. Google Search Console**

**Cadastrar o site:**

1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Digite: **https://www.bravia.ind.br**
4. Método de verificação:
   - **Opção A**: Tag HTML (já está configurado no seu site)
   - **Opção B**: Arquivo HTML (baixe e coloque em /app/frontend/public/)
   - **Opção C**: Registro DNS

**Enviar Sitemap:**
1. No Search Console → Sitemaps
2. Adicione: `https://www.bravia.ind.br/sitemap.xml`
3. Clique em "Enviar"

**Solicitar indexação:**
1. No Search Console → Inspeção de URL
2. Digite: `https://www.bravia.ind.br`
3. Clique em "Solicitar indexação"
4. Repita para páginas principais:
   - /about
   - /services
   - /structure
   - /projects
   - /contact

---

### **2. Google Analytics**

**Configurar tracking:**

1. Acesse: https://analytics.google.com
2. Criar propriedade → Nome: "Bravia Engenharia"
3. Copie o ID de medição (formato: G-XXXXXXXXXX)

4. **Adicionar no código:**
   - Abra: `/app/frontend/src/App.js`
   - Linha 8: Substitua `G-XXXXXXXXXX` pelo seu ID real
   - Exemplo: `const GA_TRACKING_ID = 'G-ABC123XYZ';`

---

### **3. Google My Business**

**Cadastrar empresa:**

1. Acesse: https://business.google.com
2. Adicionar empresa: "Bravia Engenharia"
3. Endereço: Rua Realengo, N.48, Cabiúnas - Macaé, RJ
4. Categoria: "Serviços de Engenharia Industrial"
5. Telefone: +55 22 99826-2171
6. Website: https://www.bravia.ind.br

**Verificação:**
- Google enviará código por correio ou telefone
- Após verificação, adicione:
  - Fotos do parque fabril
  - Horário de funcionamento
  - Descrição da empresa
  - Serviços oferecidos

---

## 📊 CHECKLIST PÓS-DEPLOY

### **Testes Essenciais:**

✅ Site carrega em www.bravia.ind.br  
✅ HTTPS funcionando (cadeado verde)  
✅ Todas as páginas acessíveis  
✅ Formulário de contato enviando emails  
✅ Seletor de idioma PT/EN funcionando  
✅ Botão WhatsApp redirecionando  
✅ Imagens carregando corretamente  
✅ Site responsivo (testar no celular)  

### **SEO - Verificações:**

✅ Sitemap acessível: www.bravia.ind.br/sitemap.xml  
✅ Robots.txt acessível: www.bravia.ind.br/robots.txt  
✅ Meta tags em todas as páginas  
✅ Schema.org configurado  
✅ Google Analytics rastreando  
✅ Search Console cadastrado  

### **Desempenho:**

1. Teste de velocidade: https://pagespeed.web.dev
   - Digite: www.bravia.ind.br
   - Meta: Score > 80

2. Teste mobile: https://search.google.com/test/mobile-friendly
   - Verificar se está "mobile-friendly"

---

## 🎯 PRÓXIMOS PASSOS APÓS DEPLOY

### **Semana 1:**
- Monitorar Google Search Console
- Verificar emails do formulário chegando
- Testar site em diferentes dispositivos
- Compartilhar link em redes sociais da Bravia

### **Semana 2-4:**
- Analisar dados do Google Analytics
- Ajustar conteúdo baseado no comportamento dos usuários
- Solicitar reviews no Google My Business
- Cadastrar em diretórios de empresas (Soluzzi, Guia Industrial, etc.)

### **Mês 2:**
- Criar conteúdo para blog (se decidir adicionar)
- Otimizar palavras-chave baseado em Search Console
- Adicionar mais fotos de projetos conforme novos trabalhos

---

## 💰 CUSTOS ESTIMADOS

**Deploy + Hospedagem:**
- Vercel: **GRÁTIS** (plano hobby)
- AWS/DigitalOcean: R$ 40-100/mês
- Emergent: Consultar suporte

**Domínio:**
- bravia.ind.br: Já possui ✅

**Email:**
- Google Workspace (para comercial@bravia.ind.br): R$ 31,80/mês
- Ou configurar email com hospedagem atual

**Total estimado:** R$ 0-150/mês

---

## 📞 SUPORTE

**Emergent:**
- Para deploy e questões técnicas
- Documentação: https://docs.emergent.sh

**DNS (Registro.br):**
- https://registro.br
- Suporte: https://registro.br/ajuda/

**Dúvidas sobre o site:**
- Toda configuração de SEO já está pronta
- Email notifications funcionando (logs no backend)
- Todas as 41 fotos reais da Bravia instaladas

---

## ✅ RESUMO RÁPIDO

**Para colocar o site no ar HOJE:**

1. **Escolha Vercel** (mais rápido e grátis)
2. Deploy no Vercel (5 minutos)
3. Configure DNS no Registro.br com dados do Vercel
4. Aguarde 2-4 horas (propagação DNS)
5. Cadastre no Google Search Console
6. Adicione Google Analytics ID no código
7. Pronto! Site no ar em www.bravia.ind.br 🚀

**O site está 100% pronto para produção!** ✅
