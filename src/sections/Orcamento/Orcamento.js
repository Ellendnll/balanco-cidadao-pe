import { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ChartTooltip from '../../components/ChartTooltip/ChartTooltip';
import { revenueData, expenditureData, resumo } from '../../data/dados';
import { formatBi } from '../../utils/formatters';
import styles from './Orcamento.module.css';

// Rótulo com o valor no fim de cada barra
function BarLabel({ x = 0, y = 0, width = 0, height = 0, value = 0 }) {
  return (
    <text
      x={x + width + 8}
      y={y + height / 2}
      dominantBaseline="middle"
      fill="#1A1A2E"
      fontSize={12}
      fontFamily="Space Mono"
      fontWeight="bold"
    >
      {formatBi(value)}
    </text>
  );
}

export default function Orcamento() {
  const [aba, setAba] = useState('receita');

  return (
    <section id="orcamento" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle eyebrow="Orçamento 2024" title="De Onde Vem e Para Onde Vai?" />

        <div className={styles.tabs} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={aba === 'receita'}
            className={`${styles.tab} ${aba === 'receita' ? styles.tabReceita : ''}`}
            onClick={() => setAba('receita')}
          >
            💰 Receitas
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={aba === 'despesa'}
            className={`${styles.tab} ${aba === 'despesa' ? styles.tabDespesa : ''}`}
            onClick={() => setAba('despesa')}
          >
            🏗️ Despesas
          </button>
        </div>

        {aba === 'receita' && (
          <div className={styles.receita}>
            <div>
              <h3 className={styles.subtitle}>Receitas do Estado</h3>
              <p className={styles.intro}>
                Total arrecadado:{' '}
                <strong className={styles.destaqueLaranja}>R$ 52,4 bilhões</strong>. O ICMS é a
                principal fonte — é pago toda vez que alguém compra algo em Pernambuco.
              </p>
              <div className={styles.barras}>
                {revenueData.map((d) => (
                  <div key={d.name}>
                    <div className={styles.barraTopo}>
                      <span>{d.name}</span>
                      <span className={styles.mono} style={{ color: d.color }}>
                        {formatBi(d.value)}
                      </span>
                    </div>
                    <div className={styles.trilho}>
                      <div
                        className={styles.preenchimento}
                        style={{
                          width: `${(d.value / resumo.totalArrecadado) * 100}%`,
                          background: d.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.grafico}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={3}
                  >
                    {revenueData.map((d) => (
                      <Cell key={d.name} fill={d.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {aba === 'despesa' && (
          <div>
            <p className={styles.introCentro}>
              Total investido: <strong className={styles.destaqueVerde}>R$ 50,1 bilhões</strong> —
              veja como foi dividido entre as áreas essenciais.
            </p>

            <div className={styles.graficoBarras}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={expenditureData}
                  layout="vertical"
                  margin={{ left: 10, right: 90, top: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="area"
                    type="category"
                    width={120}
                    tick={{ fontFamily: 'Nunito', fontSize: 12, fontWeight: 700 }}
                  />
                  <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                  <Bar dataKey="valor" radius={[0, 8, 8, 0]} label={<BarLabel />}>
                    {expenditureData.map((d) => (
                      <Cell key={d.area} fill={d.cor} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.cards}>
              {expenditureData.slice(0, 4).map((d) => (
                <div key={d.area} className={styles.card}>
                  <div className={styles.cardEmoji}>{d.emoji}</div>
                  <div className={styles.cardArea}>{d.area}</div>
                  <div className={styles.cardValor} style={{ color: d.cor }}>
                    {formatBi(d.valor)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
