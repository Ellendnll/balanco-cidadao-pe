import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { quizQuestions } from '../../data/dados';
import shared from '../../styles/shared.module.css';
import styles from './Quiz.module.css';

const LETRAS = ['A', 'B', 'C', 'D'];

function mensagemFinal(acertos, total) {
  const taxa = acertos / total;
  if (taxa === 1) return 'Você gabaritou! Já entende bem para onde vai o dinheiro do Estado.';
  if (taxa >= 0.6) return 'Muito bem! Você já conhece boa parte do orçamento de Pernambuco.';
  return 'Bom começo! Volte às seções acima e tente de novo.';
}

export default function Quiz() {
  const [atual, setAtual] = useState(0);
  const [escolhida, setEscolhida] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const total = quizQuestions.length;
  const pergunta = quizQuestions[atual];
  const respondeu = escolhida !== null;
  const acertou = respondeu && escolhida === pergunta.correct;

  function responder(indice) {
    if (respondeu) return;
    setEscolhida(indice);
    if (indice === pergunta.correct) setAcertos((a) => a + 1);
  }

  function avancar() {
    if (atual + 1 === total) {
      setFinalizado(true);
    } else {
      setAtual(atual + 1);
      setEscolhida(null);
    }
  }

  function reiniciar() {
    setAtual(0);
    setEscolhida(null);
    setAcertos(0);
    setFinalizado(false);
  }

  function classeOpcao(indice) {
    if (!respondeu) return styles.opcao;
    if (indice === pergunta.correct) return `${styles.opcao} ${styles.correta}`;
    if (indice === escolhida) return `${styles.opcao} ${styles.errada}`;
    return `${styles.opcao} ${styles.apagada}`;
  }

  return (
    <section id="quiz" className={styles.quiz}>
      <div className={shared.container}>
        <SectionTitle
          eyebrow="Quiz"
          title="Quanto você sabe sobre o orçamento?"
          subtitle={`${total} perguntas rápidas sobre as contas de Pernambuco em 2024.`}
          dark
        />

        <div className={`${styles.cartao} ${shared.borderBold}`}>
          {finalizado ? (
            <div className={styles.resultado} role="status">
              <p className={styles.placar}>
                {acertos}/{total}
              </p>
              <p className={styles.mensagem}>{mensagemFinal(acertos, total)}</p>
              <button type="button" className={styles.botao} onClick={reiniciar}>
                Refazer o quiz
              </button>
            </div>
          ) : (
            <>
              <div className={styles.topo}>
                <span className={styles.contador}>
                  Pergunta {atual + 1} de {total}
                </span>
                <div
                  className={styles.barra}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={total}
                  aria-valuenow={atual + (respondeu ? 1 : 0)}
                  aria-label="Progresso do quiz"
                >
                  <div
                    className={styles.barraPreenchida}
                    style={{ width: `${((atual + (respondeu ? 1 : 0)) / total) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className={styles.pergunta}>{pergunta.question}</h3>

              <div className={styles.opcoes}>
                {pergunta.options.map((opcao, i) => (
                  <button
                    key={opcao}
                    type="button"
                    className={classeOpcao(i)}
                    onClick={() => responder(i)}
                    disabled={respondeu}
                  >
                    <span className={styles.letra}>{LETRAS[i]}</span>
                    <span>{opcao}</span>
                  </button>
                ))}
              </div>

              <div aria-live="polite">
                {respondeu && (
                  <div className={`${styles.feedback} ${acertou ? styles.feedbackOk : styles.feedbackErro}`}>
                    <strong>{acertou ? 'Acertou!' : 'Não foi dessa vez.'}</strong>
                    <p>{pergunta.explanation}</p>
                    <button type="button" className={styles.botao} onClick={avancar}>
                      {atual + 1 === total ? 'Ver resultado' : 'Próxima pergunta'}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}