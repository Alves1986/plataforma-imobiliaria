# Plano — Plataforma Imobiliária Áurea

## Direção

Construir o MVP em **Next.js + TypeScript + Tailwind**, com foco no ciclo que gera receita primeiro: captação → locação → assinatura → cobrança. A primeira entrega local é um dashboard operacional navegável que valida a linguagem visual e os fluxos de operação antes da conexão com PostgreSQL e integrações externas.

## Estrutura do projeto

```text
src/
  app/
    layout.tsx              # Metadados, idioma e shell global
    page.tsx                # Dashboard MVP e interações locais
    globals.css             # Sistema visual responsivo
public/
  manus-routes.json         # Manifesto de rotas da aplicação
plan.md                     # Decisões e desenho do produto
TODO.md                     # Próximos resultados implementáveis
```

A próxima evolução deve separar os domínios em `src/modules/identity`, `src/modules/properties`, `src/modules/crm`, `src/modules/leases`, `src/modules/contracts`, `src/modules/finance` e `src/modules/audit`, com `src/components` para componentes compartilhados e `src/lib` para validação, acesso a dados e integrações.

## MVP implementado

- Dashboard com KPIs: imóveis ativos, leads, conversão e receita prevista.
- Performance operacional com gráfico de leads convertidos.
- Atividade recente e portfólio de imóveis em destaque.
- Busca local de imóveis e ação de favoritos.
- Pipeline de leads com estados de novo lead, visita e proposta.
- Simulador de capacidade de locação com regra de transparência de 30% da renda bruta.
- Responsividade para desktop e mobile.
- Manifesto de rotas e metadados em português brasileiro.

## Design

- **Movimento:** editorial tech para operações imobiliárias; a precisão de um backoffice com o cuidado de uma marca de hospitalidade.
- **Princípios:** clareza antes de densidade; confiança por meio de dados; calor humano nos fluxos; ação sempre visível.
- **Cores:** carvão esverdeado para estrutura e segurança, oliva para operação saudável, areia/dourado para confiança e momentos de decisão, papel quente para reduzir fadiga visual.
- **Layout:** sidebar persistente e tela editorial com blocos assimétricos; o dashboard alterna leitura de cima para baixo com cartões de ação curta.
- **Assinaturas:** marca tipográfica serifada, acentos dourados discretos e indicadores em formato de cápsula.
- **Interação:** feedback imediato e reversível, toast para ações, modal curto para simulação e busca sem navegação desnecessária.
- **Animação:** transições de 200ms, elevação mínima em botões e nenhuma animação decorativa que concorra com dados.
- **Tipografia:** Playfair Display para títulos com confiança editorial; DM Sans para operação; DM Mono para IDs, datas e microdados.
- **Essência:** a central de operação que transforma imóveis e relações em decisões mais claras. Personalidade: confiável, criteriosa, humana.
- **Voz:** direta, acolhedora e sem jargão. Exemplos: “Ajude seu cliente a tomar a melhor decisão.” / “Aqui está o resumo da sua operação hoje.”
- **Marca:** monograma A com seta ascendente, representando patrimônio em movimento.
- **Cor proprietária:** oliva Áurea `#778A73`.

## Referências aplicadas

- Princípios de simplicidade, mudanças cirúrgicas e execução orientada a objetivos do `andrej-karpathy-skills`.
- Direção de gosto e revisão visual do `impeccable` / `awesome-design-md`.
- Microinterações e timing com base no `motion-design-skill`.
- Estratégia futura de testes E2E com `playwright` e desenvolvimento por etapas inspirado em `superpowers`.

## Evolução técnica

1. Extrair módulos e componentes compartilhados.
2. Adicionar persistência PostgreSQL com migrations para `Usuario`, `Imovel`, `Proposta`, `Contrato`, `Lead` e `AuditEvent`.
3. Implementar autenticação por e-mail/celular, papéis e permissões.
4. Conectar CRM, assinatura eletrônica, cobrança e notificações.
5. Cobrir fluxos críticos com testes unitários e Playwright.
