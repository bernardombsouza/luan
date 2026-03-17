# Bravia Engenharia - Site Institucional

## Problem Statement Original
Criar um site institucional moderno, responsivo e profissional para a empresa Bravia Engenharia, com foco no setor industrial de petróleo e gás.

## Arquitetura
- **Frontend**: React com i18next (PT/EN)
- **Backend**: FastAPI + MongoDB
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

## What's Been Implemented (15 Jan 2025)
### Frontend Completo
- ✅ Sistema de internacionalização (PT/EN)
- ✅ Header com navegação e seletor de idioma
- ✅ Página Home com hero, stats, serviços, sobre, clientes, CTA
- ✅ Página Sobre com história, missão/visão/valores, certificações
- ✅ Página Serviços com cards e accordions detalhados
- ✅ Página Estrutura com facilities e maquinário
- ✅ Página Projetos com filtros por categoria
- ✅ Página Contato com formulário detalhado e mapa
- ✅ Footer com links rápidos e informações
- ✅ WhatsAppButton flutuante
- ✅ Design profissional com cores da marca

### Backend Integrado
- ✅ API para formulário de contato (`POST /api/contact`)
- ✅ Modelo MongoDB para ContactForm com campos detalhados
- ✅ Endpoint para listar contatos (`GET /api/contacts`)
- ✅ Validação de email com EmailStr
- ✅ Timestamps e status tracking

### Imagens
- ✅ 13 imagens de alta qualidade do Unsplash/Pexels
- ✅ Offshore platforms, soldagem industrial, fabricação, maquinário

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

## Prioritized Backlog
### P0 - Concluído ✅
- [x] Frontend completo com todas as páginas
- [x] Sistema bilíngue PT/EN
- [x] Backend com formulário de contato
- [x] Design profissional com cores da marca
- [x] Responsividade mobile/desktop

### P1 - Próximas Tarefas
- [ ] Testing do formulário de contato end-to-end
- [ ] Validação de todos os campos do formulário
- [ ] Email notification ao receber contato
- [ ] Admin dashboard para visualizar contatos

### P2 - Melhorias Futuras
- [ ] Blog/Notícias
- [ ] Área de downloads (catálogos, certificados)
- [ ] Chat online
- [ ] Sistema de orçamento online
- [ ] Integração com Google Analytics
- [ ] SEO optimization completo

## Next Tasks
1. ✅ Testar formulário de contato com backend
2. Deploy para produção
3. Configurar email notifications
4. Otimização de imagens
5. SEO metadata
