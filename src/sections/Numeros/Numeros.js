import SectionTitle from '../../components/SectionTitle/SectionTitle';
import StatCard from '../../components/StatCard/StatCard';
import useInView from '../../hooks/useInView';
import { statCards } from '../../data/dados';
import styles from './Numeros.module.css';

export default function Numeros() {
  const { ref, inView } = useInView();

  return (
    <section id="numeros" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Os Números que Importam"
          title="O Que o Estado Fez com Seu Dinheiro"
          subtitle="Cada real arrecadado foi investido na vida das pessoas. Confira os resultados de 2024."
        />

        <div className={styles.grid}>
          {statCards.map((card) => (
            <StatCard key={card.label} {...card} trigger={inView} />
          ))}
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <span className={styles.bannerIcon}>📈</span>
            <div>
              <div className={styles.bannerEyebrow}>Resultado do Exercício</div>
              <div className={styles.bannerTitle}>Superávit de R$ 2,3 bilhões</div>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.bannerEyebrow}>EQUILÍBRIO FISCAL MANTIDO</div>
            <div className={styles.bannerRating}>Nota de Crédito A+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
