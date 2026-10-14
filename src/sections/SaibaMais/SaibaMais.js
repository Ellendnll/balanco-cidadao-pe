import styles from './SaibaMais.module.css';

// Para trocar um link, mude só o valor de "url".
const links = [
  {
    label: 'Portal da Transparência',
    icone: '📁',
    estilo: 'claro',
    url: 'https://transparencia.pe.gov.br/',
  },
  {
    label: 'RREO e RGF',
    icone: '📊',
    estilo: 'escuro',
    url: 'https://transparencia.pe.gov.br/responsabilidade-fiscal/relatorios-fiscais/',
  },
  {
    label: 'LOA 2024',
    icone: '📒',
    estilo: 'ambar',
    url: 'https://transparencia.pe.gov.br/responsabilidade-fiscal/planejamento-e-orcamento/lei-orcamentaria-anual-loa/',
  },
];

export default function SaibaMais() {
  return (
    <section id="saiba-mais" className={styles.section}>
      <div className={styles.conteudo}>
        <span className={styles.lupa} aria-hidden="true">
          🔍
        </span>
        <h2 className={styles.titulo}>Quer Saber Mais?</h2>
        <p className={styles.texto}>
          Toda a documentação fiscal de Pernambuco é pública. Acesse os relatórios completos no
          Portal da Transparência do Estado.
        </p>

        <div className={styles.botoes}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.botao} ${styles[item.estilo]}`}
            >
              <span aria-hidden="true">{item.icone}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}