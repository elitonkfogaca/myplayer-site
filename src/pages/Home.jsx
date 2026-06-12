import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo-container">
            <img src="/logo_square.png" alt="myPlayer Logo" className="logo-img" />
            <span className="logo-text">
              my<span className="logo-highlight">Player</span>
            </span>
          </Link>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Recursos</a>
            <a href="#how-it-works" className="nav-link">Como Funciona</a>
            <Link to="/privacy" className="nav-link">Privacidade</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              NOVO: VERSÃO 1.0.0
            </div>
            <h1>
              Seu Hub de Vídeo <br />
              <span className="text-gradient">Unificado e Veloz</span>
            </h1>
            <p className="hero-description">
              O myPlayer é um aplicativo desktop moderno projetado para acessar,
              reproduzir e gerenciar seus vídeos e músicas armazenados no Google Drive,
              Telegram e arquivos locais — tudo em uma única interface rápida e elegante.
            </p>
            <div className="hero-actions">
              <a href="#how-it-works" className="button button-primary">
                Como Funciona
              </a>
              <a href="#features" className="button button-secondary">
                Ver Recursos
              </a>
            </div>
          </div>
          <div className="showcase-container">
            <div className="showcase-glow"></div>
            <img
              src="/logo_wide.png"
              alt="myPlayer Interface Mockup"
              className="showcase-img"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Recursos Principais</h2>
            <p>Tudo o que você precisa para uma experiência de entretenimento completa e sem interrupções.</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Conexão 100% Segura</h3>
              <p>
                Utiliza autenticação OAuth oficial do Google e Telegram. Suas credenciais nunca são expostas e seus arquivos ficam sempre protegidos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <h3>Streaming Instantâneo</h3>
              <p>
                Assista aos seus vídeos em alta definição ou ouça suas músicas diretamente da nuvem, sem necessidade de download prévio.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <h3>Download Rápido</h3>
              <p>
                Baixe seus arquivos favoritos localmente com apenas um clique para acessá-los mesmo quando estiver totalmente off-line.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                  <line x1="7" y1="2" x2="7" y2="22"/>
                  <line x1="17" y1="2" x2="17" y2="22"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <line x1="2" y1="7" x2="7" y2="7"/>
                  <line x1="2" y1="17" x2="7" y2="17"/>
                  <line x1="17" y1="17" x2="22" y2="17"/>
                  <line x1="17" y1="7" x2="22" y2="7"/>
                </svg>
              </div>
              <h3>Interface de Cinema</h3>
              <p>
                Controles intuitivos, reprodutor moderno, suporte a gestos e modo escuro nativo para garantir o máximo de imersão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Como Funciona?</h2>
            <p>Três passos simples para transformar sua forma de consumir mídia em nuvem.</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-num-circle">1</div>
              <h4>Faça o Vínculo</h4>
              <p>Conecte sua conta do Google Drive ou Telegram com total privacidade.</p>
            </div>

            <div className="step-card">
              <div className="step-num-circle">2</div>
              <h4>Escolha sua Mídia</h4>
              <p>Navegue pelas suas pastas ou canais salvos através do nosso explorador rápido.</p>
            </div>

            <div className="step-card">
              <div className="step-num-circle">3</div>
              <h4>Dê o Play</h4>
              <p>Assista em alta velocidade com decodificação de hardware e legendas automáticas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-text">
            &copy; {new Date().getFullYear()} myPlayer. Todos os direitos reservados.
          </div>
          <div className="footer-text">
            Dúvidas? Fale conosco: <a href="mailto:seuemail@dominio.com" className="footer-email">seuemail@dominio.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}