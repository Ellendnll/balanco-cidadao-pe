// ATENÇÃO: valores de exemplo vindos do protótipo do Figma Make.
// Antes de entregar o trabalho, substitua pelos dados reais do BGE, RREO e RGF
// (Portal da Transparência / SEFAZ-PE).

export const resumo = {
  orcamentoAutorizado: 56.8,
  totalArrecadado: 52.4,
  totalInvestido: 50.1,
  superavit: 2.3,
};

export const heroStats = [
  { label: 'Orçamento Autorizado', val: 'R$ 56,8 bi', icon: '📜', color: '#F59E0B' },
  { label: 'Total Arrecadado', val: 'R$ 52,4 bi', icon: '💰', color: '#15803D' },
  { label: 'Total Investido', val: 'R$ 50,1 bi', icon: '🏗️', color: '#E84B10' },
  { label: 'Superávit Fiscal', val: 'R$ 2,3 bi', icon: '📈', color: '#0D9488' },
];

export const navLinks = [
  { href: '#numeros', label: 'Números' },
  { href: '#orcamento', label: 'Orçamento' },
  { href: '#conquistas', label: 'Conquistas' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#transparencia', label: 'Transparência' },
];

export const statCards = [
  { label: 'Total Arrecadado', value: 52.4, decimals: 1, unit: 'Bilhões R$', color: '#15803D', icon: '💰' },
  { label: 'Total Investido', value: 50.1, decimals: 1, unit: 'Bilhões R$', color: '#E84B10', icon: '🏗️' },
  { label: 'Escolas Beneficiadas', value: 1247, decimals: 0, unit: 'Unidades', color: '#7C3AED', icon: '🏫' },
  { label: 'Municípios Atendidos', value: 185, decimals: 0, unit: 'Municípios', color: '#F59E0B', icon: '📍' },
];

export const revenueData = [
  { name: 'ICMS', value: 24.2, color: '#E84B10' },
  { name: 'FPE Federal', value: 8.6, color: '#15803D' },
  { name: 'Receitas Diversas', value: 11.7, color: '#F59E0B' },
  { name: 'IPVA', value: 2.1, color: '#0D9488' },
  { name: 'Outros Tributos', value: 5.8, color: '#7C3AED' },
];

export const expenditureData = [
  { area: 'Educação', valor: 11.2, cor: '#15803D', emoji: '📚' },
  { area: 'Saúde', valor: 9.8, cor: '#E84B10', emoji: '🏥' },
  { area: 'Segurança', valor: 6.5, cor: '#DC2626', emoji: '🛡️' },
  { area: 'Infraestrutura', valor: 5.2, cor: '#F59E0B', emoji: '🏗️' },
  { area: 'Assistência Social', valor: 4.1, cor: '#0D9488', emoji: '🤝' },
  { area: 'Dívida Pública', valor: 5.8, cor: '#7C3AED', emoji: '💳' },
  { area: 'Outros', valor: 7.5, cor: '#EC4899', emoji: '📋' },
];

export const achievements = [
  {
    icon: '🏫',
    title: '1.247 Escolas Reformadas',
    desc: 'Reforma e ampliação de escolas da rede pública estadual, beneficiando 620 mil estudantes em todo Pernambuco.',
    color: '#15803D',
    bg: '#DCFCE7',
  },
  {
    icon: '🚑',
    title: '38 UPAs Ampliadas',
    desc: 'Unidades de Pronto Atendimento com mais leitos, equipamentos modernos e atendimento 24h para toda a população.',
    color: '#E84B10',
    bg: '#FEF3C7',
  },
  {
    icon: '🛣️',
    title: '4.800 km de Estradas',
    desc: 'Recuperação e pavimentação de rodovias estaduais, conectando municípios do Sertão ao Litoral pernambucano.',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    icon: '💧',
    title: '340 mil Famílias com Água',
    desc: 'Ampliação do acesso à água potável no Agreste e Sertão, com cisternas e adutoras do São Francisco.',
    color: '#0D9488',
    bg: '#CCFBF1',
  },
  {
    icon: '💼',
    title: '82 mil Empregos Gerados',
    desc: 'Novos postos de trabalho formais via programas de qualificação e atração de empresas ao estado.',
    color: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '🌿',
    title: '15 Parques Criados',
    desc: 'Novas áreas de conservação ambiental e parques urbanos para lazer, protegendo a biodiversidade da Caatinga.',
    color: '#15803D',
    bg: '#DCFCE7',
  },
];

export const quizQuestions = [
  {
    question: 'Qual área recebeu o maior investimento do Estado em 2024?',
    options: ['Segurança Pública', 'Educação', 'Infraestrutura', 'Saúde'],
    correct: 1,
    explanation:
      'A Educação recebeu R$ 11,2 bilhões — o maior investimento, correspondendo a 22% do orçamento total.',
  },
  {
    question: 'Qual é o principal imposto que o Estado arrecada?',
    options: ['IPVA', 'ITCMD', 'ICMS', 'ISS'],
    correct: 2,
    explanation:
      'O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) representa 46% da receita total de Pernambuco.',
  },
  {
    question: 'Quantas famílias passaram a ter acesso à água potável em 2024?',
    options: ['100 mil', '200 mil', '340 mil', '500 mil'],
    correct: 2,
    explanation:
      '340 mil famílias no Agreste e Sertão foram beneficiadas com cisternas e adutoras do São Francisco.',
  },
  {
    question: 'Quantos estudantes foram beneficiados pelo Pé-de-Meia em Pernambuco até novembro de 2024?',
    options: ['Cerca de 50 mil', 'Cerca de 120 mil', 'Cerca de 250 mil', 'Cerca de 400 mil'],
    correct: 2,
    explanation:
      'O programa beneficiou 257,2 mil estudantes em Pernambuco.',
  },
  {
    question: 'Quantos estudantes da rede pública foram atendidos pelo Programa Nacional de Alimentação Escolar em Pernambuco entre janeiro e outubro de 2024?',
    options: ['Cerca de 500 mil', 'Cerca de 900 mil', 'Cerca de 1,5 milhão', 'Cerca de 2,5 milhões'],
    correct: 2,
    explanation:
      'O PNAE atendeu 1,6 milhão de estudantes em aproximadamente 6 mil escolas.',
  },
  {
    question: 'Quantas cirurgias foram realizadas em Pernambuco pelo Programa Nacional de Redução de Filas entre fevereiro e setembro de 2024?',
    options: ['12,5 mil', '28 mil', '55,2 mil', '80 mil'],
    correct: 2,
    explanation:
      'Foram realizadas 55,2 mil cirurgias no estado no período.',
  },
  {
    question: 'Quantos empreendimentos do Novo PAC haviam sido entregues ou concluídos em Pernambuco até o fim de 2024?',
    options: ['48', '112', '219', '854'],
    correct: 2,
    explanation:
      'Dos 1.444 empreendimentos listados no Novo PAC para Pernambuco, 219 estavam entregues ou concluídos até o fim de 2024.',
  },
  {
    question: 'Quanto Pernambuco recebeu do Governo Federal em 2024, somando transferências ao Estado, municípios e cidadãos?',
    options: ['Mais de R$ 20 bilhões', 'Mais de R$ 40 bilhões', 'Mais de R$ 70 bilhões', 'Mais de R$ 100 bilhões'],
    correct: 2,
    explanation:
      'O total superou R$ 72,8 bilhões em transferências federais.',
  },
];

export const timeline = [
  { mes: 'Jan', evento: 'LOA sancionada — R$ 56,8 bi autorizados pelo Governo', icon: '📜' },
  { mes: 'Mar', evento: 'Arrecadação supera meta em 4,2% no 1º trimestre', icon: '📈' },
  { mes: 'Jun', evento: 'Nota de crédito A+ mantida pela agência Fitch Ratings', icon: '⭐' },
  { mes: 'Set', evento: 'RREO 3º bimestre: despesa social atinge 92% do previsto', icon: '🏛️' },
  { mes: 'Dez', evento: 'Fechamento: superávit de R$ 2,3 bi e RREO aprovado', icon: '✅' },
];

export const fiscalIndicators = [
  { label: 'Limite da Dívida (LRF)', limite: '200%', atual: '158%', progresso: 79, icon: '💳' },
  { label: 'Gasto com Pessoal', limite: '60% máx', atual: '49,7%', progresso: 83, icon: '👥' },
  { label: 'Investimento Mínimo em Saúde', limite: '12% mín', atual: '19,6%', progresso: 100, icon: '🏥' },
];

export const saibaMaisLinks = [
  { label: '📂 Portal da Transparência', variant: 'white' },
  { label: '📊 RREO e RGF', variant: 'dark' },
  { label: '📜 LOA 2024', variant: 'gold' },
];

export const fontesFooter = ['📊 Receita Federal', '🏛️ TCE-PE', '📋 STN', '🔍 CGE-PE'];
