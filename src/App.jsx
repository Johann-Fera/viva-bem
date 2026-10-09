import './App.css'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Por Idades', href: '#etapas' },
  { label: 'Saúde da Criança', href: '#saude-crianca' },
  { label: 'Localizador SUS', href: '#localizador-sus' },
  { label: 'Vacinação & Prevenção', href: '#vacinacao-prevencao' },
]

const serviceCards = [
  {
    icon: '✱',
    title: 'SAMU 192',
    text: 'Urgências médicas e acidentes 24 horas',
  },
  {
    icon: '◴',
    title: 'Disque Saúde 136',
    text: 'Informações sobre serviços, medicamentos e vacinas',
  },
  {
    icon: '♧',
    title: 'CVV 188',
    text: 'Apoio emocional gratuito e orientação preventiva',
  },
]

const footerGroups = [
  {
    id: 'saude-crianca',
    title: 'Cuidado por Etapas',
    links: [
      'Saúde da Criança & Primeiros Anos',
      'Adolescência & Bem-Estar Mental',
      'Adultos & Saúde Cardiovascular',
      'Longevidade Ativa & 60+',
      'Saúde da Mulher e Pré-Natal',
    ],
  },
  {
    id: 'localizador-sus',
    title: 'Serviços Gratuitos SUS',
    links: [
      'Unidades Básicas de Saúde (UBS)',
      'Centros de Atenção Psicossocial (CAPS)',
      'Calendário Nacional de Vacinação',
      'Farmácia Popular do Brasil',
      'Programa Melhor em Casa',
    ],
  },
  {
    id: 'vacinacao-prevencao',
    title: 'Transparência & Ética',
    links: [
      'Diretrizes de Revisão Clínica',
      'Termos de Uso e Privacidade',
      'Política de Acessibilidade Web',
      'Fale Conosco / Ouvidoria',
      'Mapa do Site Cidadão',
    ],
  },
]

function App() {
  return (
    <main className="portal-shell">
      <header className="site-header">
        <div className="access-bar">
          <div className="access-left">
            <span>✚ Acessibilidade Cidadã</span>
            <button type="button" aria-label="Diminuir tamanho do texto">
              A-
            </button>
            <button type="button" aria-label="Restaurar tamanho do texto">
              A
            </button>
            <button type="button" aria-label="Aumentar tamanho do texto">
              A+
            </button>
            <button type="button" aria-label="Ativar alto contraste">
              ◐ Alto Contraste
            </button>
          </div>

          <div className="access-right">
            <span>☑ Validado pelo SUS & MS</span>
            <span>✣ SAMU 192</span>
            <span>☏ CVV 188</span>
            <span>☎ Disque Saúde 136</span>
          </div>
        </div>

        <section className="brand-row" aria-label="Barra principal">
          <a className="brand" href="#inicio" aria-label="VivaBem início">
            <span className="brand-mark">⚕</span>
            <span>
              <strong>VivaBem</strong>
              <small>Saúde Integral & Cidadania</small>
            </span>
          </a>

          <label className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Buscar doenças, UBS, vacinas, exames..."
              aria-label="Buscar no portal"
            />
          </label>

          <div className="profile-actions">
            <a href="#login">Entrar / Cadastro</a>
            <button type="button" className="profile-button">
              <span className="avatar">◉</span>
              Meu perfil
            </button>
          </div>
        </section>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <h1>
            Cuidar da sua saúde em cada fase da vida ficou mais{' '}
            <em>simples</em> e <em>acolhedor.</em>
          </h1>
          <p>
            Orientações claras, seguras e livres de complicação. Encontre com
            facilidade atendimento gratuito na sua região, aprenda hábitos
            preventivos e promova o bem-estar da sua família com respeito às
            suas necessidades.
          </p>

          <div className="hero-actions">
            <a href="#servicos" className="primary-action">
              <span>↗</span>
              Encontrar Serviços Gratuitos Perto de Mim
            </a>
            <a href="#etapas" className="secondary-action">
              <span>♙</span>
              Explorar por Faixa Etária
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          role="img"
          aria-label="Profissionais de saúde em atendimento comunitário"
        >
          <div className="clinic-scene">
            <div className="clinic-sign">UNIDADE DE SAÚDE DA FAMÍLIA</div>
            <div className="sun-glow" />
            <div className="people-group">
              <span className="person elder" />
              <span className="person child" />
              <span className="person adult" />
              <span className="person nurse" />
            </div>
            <div className="plant plant-one" />
            <div className="plant plant-two" />
          </div>

          <aside className="notice-card">
            <span className="notice-dot" />
            <div>
              <strong>Plantão Informativo Cidadão</strong>
              <p>
                Campanha Nacional de Vacinação Multivacinal ativa. Leve a
                caderneta à UBS mais próxima.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="quick-services" id="servicos" aria-label="Atendimento rápido">
        {serviceCards.map((card) => (
          <article className="service-card" key={card.title}>
            <span className="service-icon">{card.icon}</span>
            <div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer-section">
        <div className="footer-brand">
          <a className="brand" href="#inicio">
            <span className="brand-mark">⚕</span>
            <span>
              <strong>VivaBem Saúde</strong>
            </span>
          </a>
          <p>
            Compromisso ético com a saúde pública universal, medicina preventiva
            e esclarecimento transparente a serviço de todas as famílias do
            Brasil.
          </p>
          <strong className="curation">♡ Conteúdo com Curadoria Médica Familiar</strong>
        </div>

        <div className="footer-links" id="etapas">
          {footerGroups.map((group) => (
            <section id={group.id} key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a href="#inicio" key={link}>
                  {link}
                </a>
              ))}
            </section>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 VivaBem Saúde Cidadã. Informações baseadas em evidências
            científicas alinhadas às diretrizes do Ministério da Saúde e OMS.
          </span>
          <strong>
            As informações deste portal não substituem o diagnóstico e
            acompanhamento médico individual.
          </strong>
        </div>
      </footer>
    </main>
  )
}

export default App
