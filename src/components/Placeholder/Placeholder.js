import styles from './Placeholder.module.css';

// Seção provisória: o responsável substitui pelo componente real.
export default function Placeholder({ id, titulo, responsavel }) {
  return (
    <section id={id} className={styles.section}>
      <p className={styles.titulo}>{titulo}</p>
      <p className={styles.texto}>
        Seção em construção{responsavel ? ` (${responsavel})` : ''}.
      </p>
    </section>
  );
}
