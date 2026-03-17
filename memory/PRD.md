# Bravia Engenharia - Site Institucional

## Problem Statement Original
Criar um site institucional moderno, responsivo e profissional para a empresa Bravia Engenharia, com foco no setor industrial de petróleo e gás.

## Arquitetura
- **Frontend**: React com i18next (PT/EN), react-helmet-async (SEO)
- **Backend**: FastAPI + MongoDB + Email notifications
- **Componentes**: Shadcn UI
- **Cores**: Azul petróleo (#004E89) + Cinza carvão (#2D3748)

## User Personas
- **Gerentes de Procurement**: Buscando fornecedores certificados para projetos offshore
- **Engenheiros de Projeto**: Procurando parceiros técnicos especializados
- **Tomadores de Decisão**: Avaliando empresas por certificações e portfolio

## Core Requirements
### Páginas
- Home (Hero, Serviços, Clientes, CTA)
- Sobre Nós (História, Missão/Visão/Valores, Certificações)
- Serviços (Detalhamento com accordions)
- Estrutura (Parque fabril, maquinário)
- Projetos (Portfolio filtrado)
- Contato (Formulário detalhado + mapa)

### Funcionalidades
- ✅ Seletor de idioma PT/EN
- ✅ Botão WhatsApp flutuante (+55 22 99826-2171)
- ✅ Formulário de contato com campos: empresa, nome, email, telefone, serviço, área, mensagem
- ✅ Navegação responsiva
- ✅ Header com scroll effect
- ✅ Footer completo
- ✅ Notificações por email (comercial@bravia.ind.br)
- ✅ SEO otimizado (meta tags, schema, sitemap)
- ✅ Google Analytics (pronto para configurar ID)

## What's Been Implemented

### Iteration 1 (15 Jan 2025)
- ✅ Frontend completo bilíngue (PT/EN)
- ✅ Backend com formulário de contato
- ✅ Design profissional com cores da marca
- ✅ 6 páginas completas

### Iteration 2 (15 Jan 2025) - Melhorias e Apontamentos do PDF
- ✅ **Correções de texto**: "Galvanização a quente" (título do card), "Serviços Offshore" (ajustado itens)
- ✅ **Email notifications**: Sistema de notificação automática para comercial@bravia.ind.br quando receber contatos
- ✅ **SEO completo**:
  - Meta tags (title, description, keywords, OG, Twitter)
  - Schema.org markup (Organization schema)
  - Sitemap.xml criado
  - Robots.txt configurado
  - React Helmet Async integrado
- ✅ **Google Analytics**: Código integrado (pronto para adicionar tracking ID)
- ✅ **Testes**: Formulário de contato testado com sucesso (backend + email notification)

## API Contracts
### POST /api/contact
```json
{
  "company": "string",
  "name": "string",
  "email": "string (EmailStr)",
  "phone": "string (optional)",
  "service": "string",
  "area": "string",
  "message": "string"
}
```

Response:
```json
{
  "id": "uuid",
  "company": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "service": "string",
  "area": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "pending"
}
```

### GET /api/contacts
Returns array of ContactForm objects

## Database Schema
### contacts collection
```
{
  id: string (uuid),
  company: string,
  name: string,
  email: string (validated),
  phone: string (optional),
  service: string,
  area: string,
  message: string,
  created_at: datetime,
  status: string (default: "pending")
}
```

## SEO Implementation
- **Meta Tags**: Title, Description, Keywords, OG (Facebook), Twitter Cards
- **Schema.org**: Organization markup com dados completos da empresa
- **Sitemap**: /sitemap.xml com todas as páginas (prioridades configuradas)
- **Robots.txt**: Configurado para permitir todos os crawlers
- **Canonical URLs**: Implementados em todas as páginas
- **Google Analytics**: Script integrado (tracking ID: G-XXXXXXXXXX - substituir pelo real)

## Email Notification System
- **Trigger**: Quando formulário de contato é submetido
- **Destinatário**: comercial@bravia.ind.br
- **Conteúdo**: Email HTML formatado com:
  - Dados da empresa e contato
  - Serviço de interesse e área de atuação
  - Mensagem completa
  - Data/hora do contato
- **Status**: Logs detalhados no backend (pronto para SMTP em produção)

## Prioritized Backlog
### P0 - Concluído ✅
- [x] Frontend completo com todas as páginas
- [x] Sistema bilíngue PT/EN
- [x] Backend com formulário de contato
- [x] Email notifications
- [x] SEO completo (meta tags, sitemap, schema)
- [x] Google Analytics integrado
- [x] Design profissional com cores da marca
- [x] Responsividade mobile/desktop
- [x] Correções dos apontamentos do PDF

### P1 - Próximas Tarefas
- [ ] Configurar SMTP real para envio de emails (atualmente em log)
- [ ] Adicionar tracking ID real do Google Analytics
- [ ] Otimização de imagens (compressão adicional)
- [ ] Admin dashboard para visualizar contatos

### P2 - Melhorias Futuras
- [ ] Blog/Notícias
- [ ] Área de downloads (catálogos, certificados)
- [ ] Chat online
- [ ] Sistema de orçamento online
- [ ] Integração com CRM
- [ ] Métricas de conversão

## Configuration Notes
### Google Analytics
Para ativar o Google Analytics, substitua `G-XXXXXXXXXX` em `/app/frontend/src/App.js` pelo tracking ID real.

### Email SMTP
Para ativar envio real de emails, adicione no `/app/backend/.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-app
```
E descomente o código de envio em `send_email_notification()` no `server.py`.

## Next Tasks
1. ✅ Testar formulário de contato - CONCLUÍDO
2. ✅ Adicionar notificações por email - CONCLUÍDO
3. ✅ Otimizar SEO (meta tags, sitemap) - CONCLUÍDO
4. ✅ Configurar Google Analytics - CONCLUÍDO
5. Configurar SMTP para envio real de emails
6. Adicionar tracking ID real do Google Analytics
7. Deploy para produção (www.bravia.ind.br)
