import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="privacy-page">
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
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/privacy" className="nav-link active">Privacidade</Link>
          </nav>
        </div>
      </header>

      {/* Main Privacy Policy Container */}
      <div className="container">
        <div className="privacy-container">
          <h1>Política de Privacidade</h1>
          <div className="privacy-meta">Última atualização: Junho de 2026</div>

          <p>
            Esta política de privacidade descreve como o <strong>myPlayer</strong> coleta, utiliza e protege as informações quando você utiliza o aplicativo desktop. Estamos comprometidos em garantir a sua privacidade e a segurança dos seus dados.
          </p>

          <h2>1. Sobre o myPlayer</h2>
          <p>
            O myPlayer é um aplicativo desktop projetado para simplificar e melhorar o acesso, visualização, download e reprodução de arquivos de mídia armazenados em contas autorizadas do Google Drive, Telegram e do próprio sistema local.
          </p>

          <h2>2. Informações Coletadas</h2>
          <p>
            Para possibilitar a integração com os serviços em nuvem, o aplicativo pode solicitar autorização para acessar as seguintes informações do seu perfil:
          </p>
          <ul>
            <li>Nome completo e endereço de e-mail cadastrado.</li>
            <li>Foto de perfil pública da sua conta Google ou Telegram.</li>
            <li>Metadados e referências necessárias para listagem dos arquivos autorizados.</li>
            <li>Dados e arquivos de mídia que você explicitamente selecionar para download ou reprodução.</li>
          </ul>

          <h2>3. Como Utilizamos os Dados</h2>
          <p>
            As informações e dados coletados destinam-se única e exclusivamente às seguintes finalidades de funcionamento do aplicativo:
          </p>
          <ul>
            <li>Autenticação do usuário e estabelecimento de uma conexão segura (OAuth).</li>
            <li>Identificação e alternância de contas ativas no painel.</li>
            <li>Listagem, busca e navegação de arquivos dentro do aplicativo.</li>
            <li>Processamento de download seguro e reprodução de fluxos de vídeo ou áudio.</li>
          </ul>

          <h2>4. Compartilhamento e Venda de Dados</h2>
          <p>
            <strong>Nenhum dado é vendido, alugado, compartilhado ou comercializado.</strong> Todas as conexões de API ocorrem diretamente entre o aplicativo instalado em sua máquina local e os servidores oficiais do Google ou Telegram. O myPlayer não possui servidores intermediários que guardam ou rastreiam suas mídias.
          </p>

          <h2>5. Segurança e Armazenamento</h2>
          <p>
            Tokens de acesso (OAuth) e configurações locais são armazenados com segurança no seu próprio dispositivo utilizando os padrões recomendados do sistema operacional. Encorajamos os usuários a manterem seus sistemas atualizados e protegidos contra ameaças.
          </p>

          <h2>6. Permissões Solicitadas</h2>
          <p>
            Para o correto funcionamento da integração com o Google Drive e Telegram, as seguintes permissões de escopo podem ser exigidas:
          </p>
          <ul>
            <li><strong>openid, email, profile</strong>: Para identificar a conta e exibir seu nome no app.</li>
            <li><strong>Acesso ao Drive (Read-only ou completo)</strong>: Apenas para carregar os vídeos e áudios que você deseja reproduzir.</li>
          </ul>

          <h2>7. Revogação de Acesso</h2>
          <p>
            Você tem total autonomia sobre suas conexões. A revogação do acesso do aplicativo pode ser realizada a qualquer momento diretamente nas configurações de aplicativos autorizados da sua Conta Google ou do Telegram.
          </p>

          <h2>8. Fale Conosco</h2>
          <p>
            Se você tiver dúvidas, sugestões ou comentários sobre esta Política de Privacidade, entre em contato conosco através do e-mail listado abaixo.
          </p>

          <div className="privacy-back-btn">
            <Link to="/" className="button button-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: "4px"}}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

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