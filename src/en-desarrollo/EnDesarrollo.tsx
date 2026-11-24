import styles from './EnDesarrollo.module.css'

const EMAIL = 'info@wapidesign.com'

/**
 * Página "en desarrollo" que está publicada hoy en wapidesign.com (antes index.html +
 * assets/style.css). Es lo que sale en producción mientras VITE_SITIO_NUEVO sea false.
 */
export default function EnDesarrollo() {
  return (
    <div className={styles.container}>
      <header className={styles['top-bar']}>
        <a href="/" aria-label="Ir al inicio — Wapi Design">
          <img src="/assets/images/logo-wapi.svg" alt="Logo de Wapi Design" className={styles.logo} width="150" height="40" />
        </a>
        <a href={`mailto:${EMAIL}`} className={`${styles.email} ${styles['desktop-only']}`}>
          {EMAIL}
        </a>
      </header>

      <main className={styles.message}>
        <h1>¡Hola! Nuestro nuevo sitio web está en desarrollo.</h1>
      </main>

      <footer className={styles.footer}>
        <a href={`mailto:${EMAIL}`} className={`${styles.email} ${styles['mobile-only']}`}>
          {EMAIL}
        </a>
      </footer>
    </div>
  )
}
