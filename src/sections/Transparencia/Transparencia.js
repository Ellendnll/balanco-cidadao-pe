import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useInView from '../../hooks/useInView';
import { timeline, fiscalIndicators } from '../../data/dados';
import shared from '../../styles/shared.module.css';
import styles from './Transparencia.module.css';

// Indicadores com "mín" no limite são pisos (ex.: saúde); os demais são tetos.
function statusDoIndicador(item) {
  const ehMinimo = item.limite.includes('mín');
  return ehMinimo ? 'Acima do mínimo exigido' : 'Dentro do limite';
}

export default function Transparencia() {
  const { ref: refTimeline, inView: timelineVisivel } = useInView(0.2);
  const { ref: refIndicadores, inView: indicadoresVisiveis } = useInView(0.2);
  return (
    <section id="transparencia" className={styles.transparencia}>
      <div className={shared.container}>
        <SectionTitle
          eyebrow="Transparência"
          title="Como o Estado prestou contas ao longo do ano"
          subtitle="Os marcos de 2024 e os limites da Lei de Responsabilidade Fiscal (LRF)."
        />

        <div className={styles.grade}>
          <ol className={styles.timeline} ref={refTimeline} aria-label="Linha do tempo de 2024">
            {timeline.map((item, i) => (
              <li
                key={item.mes}
                className={`${styles.marco} ${timelineVisivel ? styles.visivel : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className={styles.icone} aria-hidden="true">
                  {item.icon}
                </span>
                <div className={styles.marcoTexto}>
                  <span className={styles.mes}>{item.mes}</span>
                  <p>{item.evento}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.indicadores} ref={refIndicadores}>
            <h3 className={styles.subtitulo}>Limites da LRF</h3>
            {fiscalIndicators.map((item) => (
              <article
                key={item.label}
                className={`${styles.indicador} ${shared.borderBold} ${shared.cardHover}`}
              >
                <header className={styles.indicadorTopo}>
                  <span aria-hidden="true">{item.icon}</span>
                  <h4>{item.label}</h4>
                </header>

                <div className={styles.valores}>
                  <span className={styles.atual}>{item.atual}</span>
                  <span className={styles.limite}>limite: {item.limite}</span>
                </div>

                <div
                  className={styles.trilho}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={item.progresso}
                  aria-label={`${item.label}: ${item.atual}`}
                >
                  <div
                    className={styles.preenchimento}
                    style={{ width: indicadoresVisiveis ? `${item.progresso}%` : '0%' }}
                  />
                </div>

                <p className={styles.status}>{statusDoIndicador(item)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}