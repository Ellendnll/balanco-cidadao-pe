import styles from './SectionTitle.module.css';

/**
 * Cabeçalho padrão das seções: etiqueta (eyebrow), título e subtítulo.
 * `dark` = versão para fundo escuro.
 */
export default function SectionTitle({ eyebrow, title, subtitle, dark = false }) {
  return (
    <header className={styles.header}>
      <div className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ''}`}>{eyebrow}</div>
      <h2 className={`${styles.title} ${dark ? styles.titleDark : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`${styles.subtitle} ${dark ? styles.subtitleDark : ''}`}>{subtitle}</p>
      )}
    </header>
  );
}
