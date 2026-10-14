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
├── data/dados.js           TODOS os números/dados e textos
├── utils/formatters.js     formatBi, formatNumero
├── hooks/                  useInView, useCountUp
├── components/             Navbar, Footer, StatCard, SectionTitle, MemphisShapes, ChartTooltip, Placeholder
└── sections/               Hero, Numeros, Orcamento, Conquistas, Quiz, Transparencia, SaibaMais
```

Cada componente tem seu `Nome.js` e `Nome.module.css`.

## Divisão do grupo

| Seção | Pasta | Responsável | Status |
|---|---|---|---|
| Home (Navbar + Hero) | `components/Navbar`, `sections/Hero` | Ellen | pronto |
| Números | `sections/Numeros`, `components/StatCard` | Ellen | pronto |
| Orçamento | `sections/Orcamento` | Ellen | pronto |
| Conquistas | `sections/Conquistas` | Carolina | pronto |
| Quiz | `sections/Quiz` | Rogerr | pronto |
| Transparência | `sections/Transparencia` | Rogerr | pronto |
| Saiba mais | `sections/SaibaMais` | Thaiane | pronto |


Cada seção tem o `id` usado pelo menu como âncora (`orcamento`, `conquistas`, `quiz`, `transparencia`). Se editar uma seção, mantenha o `id`.

O componente `Placeholder` continua disponível em `components/`, mas nenhuma seção o usa no momento.

## Observação sobre os dados

Os valores de orçamento (R$ 52,4 bi arrecadados etc.) vêm do design do Figma e são fictícios. Ainda falta trocá-los por dados oficiais do BGE, RGF e RREO de Pernambuco. Pórem as perguntas do quiz são dados reais.
