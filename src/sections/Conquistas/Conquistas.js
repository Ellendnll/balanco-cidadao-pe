import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { achievements } from '../../data/dados';
import styles from './Conquistas.module.css';

export default function Conquistas() {
  return (
    <section id="conquistas" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Conquistas 2024"
          title="O Que Foi Feito por Pernambuco"
          subtitle="Cada número representa uma vida transformada. Conheça os resultados concretos."
        />

        <div className={styles.grid}>
          {achievements.map((a) => (
            <article key={a.title} className={styles.card} style={{ borderColor: a.color }}>
              <div className={styles.header} style={{ background: a.bg }}>
                <span className={styles.icon}>{a.icon}</span>
                <div>
                  <div className={styles.tag} style={{ color: a.color }}>
                    RESULTADO
                  </div>
                  <h3 className={styles.title} style={{ color: a.color }}>
                    {a.title}
                  </h3>
                </div>
              </div>

              {/* "Pontinha" do balão de fala */}
              <div className={styles.bubbleWrap}>
                <span className={styles.bubbleTip} style={{ borderColor: a.color }} />
              </div>

              <p className={styles.desc}>{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
