import useCountUp from '../../hooks/useCountUp';
import { formatNumero } from '../../utils/formatters';
import styles from './StatCard.module.css';

export default function StatCard({ label, value, decimals = 0, unit, color, icon, trigger }) {
  const count = useCountUp(value, { duration: 1800, decimals, trigger });

  return (
    <div className={styles.card}>
      <div className={styles.corner} style={{ background: color }} />
      <div className={styles.icon}>{icon}</div>
      <div className={styles.unit}>{unit}</div>
      <div className={styles.value} style={{ color }}>
        {formatNumero(count, decimals)}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
