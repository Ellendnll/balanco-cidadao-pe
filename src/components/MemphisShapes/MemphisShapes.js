import styles from './MemphisShapes.module.css';

const LINHAS = [0, 1, 2, 3, 4];
const COLUNAS = [0, 1, 2, 3];

// Formas decorativas do estilo Memphis (fundo do Hero)
export default function MemphisShapes() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles.circle} ${styles.spinSlow}`} />

      <div className={styles.dots}>
        {LINHAS.map((r) => (
          <div key={r} className={styles.dotRow}>
            {COLUNAS.map((c) => (
              <span key={c} className={styles.dot} />
            ))}
          </div>
        ))}
      </div>

      <svg className={styles.zigzag} width="120" height="40" viewBox="0 0 120 40">
        <polyline
          points="0,20 20,5 40,35 60,5 80,35 100,5 120,20"
          fill="none"
          stroke="#15803D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg className={`${styles.triangle} ${styles.float}`} width="60" height="60" viewBox="0 0 60 60">
        <polygon points="30,5 55,50 5,50" fill="none" stroke="#7C3AED" strokeWidth="4" />
      </svg>

      <div className={`${styles.square} ${styles.float}`} />
      <div className={styles.smallCircle} />
    </div>
  );
}
