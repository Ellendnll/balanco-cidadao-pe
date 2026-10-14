import { fontesFooter } from '../../data/dados';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>PE</span>
            <div>
              <div className={styles.brandTitle}>Governo de Pernambuco</div>
              <div className={styles.brandSub}>Balanço Cidadão 2024</div>
            </div>
          </div>
          <div className={styles.credits}>
            <p>Secretaria da Fazenda do Estado de Pernambuco — SEFAZ-PE</p>
            <p className={styles.small}>
              Dados referentes ao Exercício Fiscal 2024 • RREO e RGF publicados conforme LRF
            </p>
          </div>
        </div>

        <div className={styles.sources}>
         {fontesFooter.map((fonte) => (
            <a
              key={fonte.label}
              href={fonte.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.source}
            >
              {fonte.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
