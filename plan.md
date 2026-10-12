# Plano — Plataforma Imobiliária Áurea

## Direção

Construir o MVP em **Next.js + TypeScript + Tailwind**, com foco no ciclo que gera receita primeiro: captação → locação → assinatura → cobrança. A fase atual valida a linguagem visual e todos os fluxos operacionais no navegador, sem backend ou integrações externas.

## Estrutura do projeto

```text
src/
  app/
    layout.tsx              # Metadados, idioma e shell global
    page.tsx                # Dashboard e módulos com estado local
    globals.css             # Sistema visual responsivo
public/
  manus-routes.json         # Manifesto de rotas da aplicação
plan.md                     # Decisões e desenho do produto
TODO.md                     # Próximos resultados de integração
```

## Frontend entregue

A aplicação possui dashboard, imóveis, CRM, contratos, financeiro, condomínios, relatórios, configurações e simulador. A navegação é funcional e cada módulo tem ações locais: cadastro de imóvel, busca e filtros, favoritos, criação e avanço de leads, busca/filtro de contratos, simulação de comissão, exportação CSV e feedback visual.

Os dados são mockados e vivem somente no estado da sessão. Isso é intencional: a interface está preparada para receber serviços reais, mas não há conexão com banco, autenticação ou API externa nesta fase.

## Design

A direção combina operação de backoffice com hospitalidade: carvão esverdeado para estrutura, oliva para operação saudável, areia/dourado para confiança, papel quente para reduzir fadiga visual e tipografia editorial nos títulos. A interação usa feedback imediato, estados reversíveis, modais curtos, filtros visíveis e responsividade para desktop e mobile.

## Próxima evolução técnica

Separar domínios em `src/modules/identity`, `src/modules/properties`, `src/modules/crm`, `src/modules/leases`, `src/modules/contracts`, `src/modules/finance` e `src/modules/audit`, com `src/components` para componentes compartilhados e `src/lib` para validação, acesso a dados e integrações. Em seguida, conectar PostgreSQL, autenticação, armazenamento, assinatura, cobrança e notificações, preservando os contratos de dados já representados pelos componentes.
