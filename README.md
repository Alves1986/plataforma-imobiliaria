# Áurea — Plataforma Imobiliária

Frontend operacional em Next.js + TypeScript para validar a visão de produto da plataforma Áurea antes da conexão com backend e APIs externas.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run lint
npm run build
```

## O que está ajustado no frontend

- Dashboard com KPIs, gráfico com períodos locais e portfólio.
- Navegação funcional entre todos os módulos da operação.
- Cadastro local de imóvel via modal.
- Busca e filtros locais por finalidade de imóvel.
- Favoritos com estado visual e feedback por toast.
- Pipeline de leads com criação e avanço entre etapas.
- Busca e filtro por status na tela de contratos.
- Simulador de comissão para locação e venda.
- Exportação local do extrato financeiro em CSV.
- Estados de vazio para buscas sem resultados.
- Feedback local para ações, filtros, relatórios, configurações e portais.
- Layout responsivo para desktop e mobile.

## Limites intencionais desta fase

Nenhum backend, banco de dados, autenticação ou API externa está conectado. Os dados são mockados e vivem apenas no estado da sessão do navegador; ao recarregar a página, a demonstração retorna aos dados iniciais.

As áreas de integração estão representadas na interface e documentadas para a próxima fase: persistência, autenticação, pagamentos, assinatura eletrônica, WhatsApp, armazenamento de documentos e auditoria.

## Deploy na Vercel

O projeto está preparado para deploy como aplicação Next.js. O `.env.example` contém apenas nomes reservados para integrações futuras; nenhuma credencial real é necessária para rodar esta versão.

Consulte [plan.md](./plan.md) e [TODO.md](./TODO.md) para a próxima evolução.
