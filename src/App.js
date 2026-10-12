import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Numeros from './sections/Numeros/Numeros';
import Orcamento from './sections/Orcamento/Orcamento';
import Conquistas from './sections/Conquistas/Conquistas';
import Quiz from './sections/Quiz/Quiz';
import Transparencia from './sections/Transparencia/Transparencia';

export default function App() {
  return (
    <div id="topo">
      <Navbar />
      <main>
        <Hero />
        <Numeros />
        <Orcamento />
        <Conquistas />
        <Quiz />
        <Transparencia />
      </main>
      <Footer />
    </div>
  );
}
