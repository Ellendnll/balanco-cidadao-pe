# Balanço Cidadão — Pernambuco

Site interativo do Balanço Cidadão do Estado de Pernambuco (projeto acadêmico).
Create React App · JavaScript · CSS Modules · Recharts.

## Como rodar

```bash
npm install
npm start        # http://localhost:3000
npm run build    # versão de produção na pasta build/
```

## Estrutura

```
src/
├── App.js                  monta a página única rolável
├── index.js
├── styles/                 global.css (variáveis, fontes) e shared.module.css
├── data/dados.js           TODOS os números e textos (edite aqui)
├── utils/formatters.js     formatBi, formatNumero
├── hooks/                  useInView, useCountUp
├── components/             Navbar, Footer, StatCard, SectionTitle, MemphisShapes, ChartTooltip, Placeholder
└── sections/               Hero, Numeros, Orcamento, Conquistas, Quiz, Transparencia
```

Cada componente tem seu `Nome.js` e `Nome.module.css`.

## Divisão do grupo

| Seção | Pasta | Status |
|---|---|---|
| Home (Navbar + Hero) | `components/Navbar`, `sections/Hero` | pronto |
| Números | `sections/Numeros`, `components/StatCard` | pronto |
| Orçamento | `sections/Orcamento` | rascunho |
| Conquistas | `sections/Conquistas` | rascunho |
| Quiz | `sections/Quiz` | placeholder |
| Transparência | `sections/Transparencia` | placeholder |

Para trocar um placeholder, edite o `.js` da seção e mantenha o `id` (`quiz`, `transparencia`), pois o menu usa âncoras.

## Observação sobre os dados

Os valores (R$ 52,4 bi arrecadados etc.) vêm do protótipo gerado pela IA do Figma e são fictícios.
Antes de entregar, substitua por dados reais do BGE, RGF e RREO de Pernambuco em `src/data/dados.js`.
