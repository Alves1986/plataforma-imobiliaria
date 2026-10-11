# Áurea — Plataforma Imobiliária

MVP local de uma plataforma imobiliária digital, baseado no documento arquitetural anexado e nas referências de design, engenharia e testes selecionadas no GitHub.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

O projeto está preparado para deploy como uma aplicação Next.js estática/interativa, sem dependência de servidor local ou serviços Manus. Para publicar:

1. Crie um repositório no GitHub e envie este diretório.
2. No painel da Vercel, selecione **Add New Project** e importe o repositório.
3. Mantenha o framework **Next.js** e use os comandos definidos em `vercel.json` (`npm ci` para instalação e `npm run build` para compilação).
4. Publique o projeto. O domínio `.vercel.app` será criado automaticamente; depois você pode associar um domínio próprio nas configurações do projeto.

O arquivo `.env.example` lista as variáveis reservadas para a futura conexão com banco de dados, autenticação, armazenamento, assinatura eletrônica e pagamentos. Nenhuma credencial real está incluída.

## Verificações

```bash
npm run lint
npm run build
```

## Escopo atual

A primeira entrega implementa o dashboard operacional da Fase 1 — Locação & Captação: KPIs, atividade recente, imóveis em destaque, pipeline de leads e simulador de capacidade de locação. Dados ainda são locais/mockados para validar experiência e arquitetura de interface.

## Próximos passos

Consulte [plan.md](./plan.md) e [TODO.md](./TODO.md) para a arquitetura modular e os próximos resultados.
