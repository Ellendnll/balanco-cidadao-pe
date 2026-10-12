import { formatBi } from '../../utils/formatters';
import styles from './ChartTooltip.module.css';

// Tooltip usada nos gráficos do Recharts
export default function ChartTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const nome = item.name === 'valor' ? item.payload.area : item.name;

  return (
    <div className={styles.tooltip}>
      <p className={styles.name}>{nome}</p>
      <p className={styles.value}>{formatBi(item.value)}</p>
    </div>
  );
}
