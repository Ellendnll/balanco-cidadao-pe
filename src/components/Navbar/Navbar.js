import { useState } from 'react';
import { navLinks } from '../../data/dados';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.brand}>
          <span className={styles.logo}>PE</span>
          <span>
            <span className={styles.brandTitle}>Balanço Cidadão</span>
            <span className={styles.brandSub}>Pernambuco 2024</span>
          </span>
        </a>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </div>

      {menuAberto && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuAberto(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
