import MemphisShapes from '../../components/MemphisShapes/MemphisShapes';
import { heroStats } from '../../data/dados';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <MemphisShapes />

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.badge}>📊 EXERCÍCIO FISCAL 2024</div>
            <h1 className={styles.title}>
              Balanço
              <span className={styles.gold}>Cidadão</span>
              <span className={styles.orange}>Pernambuco</span>
            </h1>
            <p className={styles.text}>
              O dinheiro público é seu. Veja de forma simples e transparente como o Estado
              arrecadou e investiu os recursos de Pernambuco em 2024.
            </p>
            <div className={styles.actions}>
              <a href="#numeros" className={styles.primary}>
                Explorar os Números →
              </a>
              <a href="#quiz" className={styles.secondary}>
                Fazer o Quiz 🎯
              </a>
            </div>
          </div>

          <div className={styles.panel}>
            {heroStats.map((item) => (
              <div key={item.label} className={styles.stat}>
                <span className={styles.statIcon}>{item.icon}</span>
                <div>
                  <div className={styles.statLabel}>{item.label}</div>
                  <div className={styles.statValue} style={{ color: item.color }}>
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FFF8EE" />
      </svg>
    </section>
  );
}
