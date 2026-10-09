import './App.css'
import logoMark from './assets/VivaBem Logo.png'
import phoneIcon from './assets/Container.png'
import emergencyIcon from './assets/Icon (11).png'
import headsetIcon from './assets/Icon (12).png'
import careIcon from './assets/Icon (13).png'
import shieldIcon from './assets/Icon (14).png'
import guideIcon from './assets/Icon (15).png'
import elderIcon from './assets/Icon (16).png'
import adultIcon from './assets/Icon (17).png'
import teenIcon from './assets/Icon (18).png'
import childIcon from './assets/Icon (19).png'
import accessibilityIcon from './assets/Icon (3).png'
import contrastIcon from './assets/Icon (4).png'
import verifiedIcon from './assets/Icon (5).png'
import searchIcon from './assets/Icon (8).png'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Por Idades', href: '#etapas', active: true },
  { label: 'Saúde da Criança', href: '#saude-crianca' },
  { label: 'Localizador SUS', href: '#localizador-sus' },
  { label: 'Vacinação', href: '#vacinacao-prevencao' },
  { label: 'Prevenção', href: '#prevencao' },
]

const ageCards = [
  {
    range: '0 a 11 anos',
    title: 'Primeira Infância & Crianças',
    text: 'Foco no desenvolvimento psicomotor saudável, nutrição afetiva e proteção ativa contra doenças imunopreveníveis.',
    icon: childIcon,
    color: 'teal',
    items: [
      'Aleitamento e Introdução Alimentar',
      'Caderneta Nacional de Vacinação',
      'Prevenção de Acidentes Domésticos',
      'Saúde Bucal dos Primeiros Dentes',
    ],
  },
  {
    range: '12 a 17 anos',
    title: 'Adolescentes & Jovens',
    text: 'Espaço confidencial para dúvidas do crescimento, suporte socioemocional, vida digital e respeito às transformações corporais.',
    icon: teenIcon,
    color: 'purple',
    items: [
      'Ansiedade Escolar e Relações',
      'Nutrição na Puberdade & Autoimagem',
      'Prevenção de ISTs & Vacina HPV',
      'Atendimento Sigiloso no SUS',
    ],
  },
  {
    range: '18 a 59 anos',
    title: 'Adultos & Vida Produtiva',
    text: 'Controle do ritmo de estresse, proteção cardiovascular e detecção precoce de condições crônicas assintomáticas.',
    icon: adultIcon,
    color: 'blue',
    items: [
      'Check-up Preventivo e Pressão Arterial',
      'Gestão do Estresse e Sono Reparador',
      'Rastreamento Câncer Colo de Útero / Mama',
      'Ergonomia e Saúde Ocupacional',
    ],
  },
  {
    range: '60+ anos',
    title: 'Longevidade & 60+',
    text: 'Preservação da autonomia, mobilidade motora, saúde da memória e fortalecimento dos vínculos comunitários na terceira idade.',
    icon: elderIcon,
    color: 'teal',
    items: [
      'Prevenção Prática de Quedas em Casa',
      'Estímulo Cognitivo e Memória Ativa',
      'Imunização Específica do Idoso',
      'Estatuto do Idoso e Medicamento Contínuo',
    ],
  },
]

const serviceCards = [
  {
    icon: emergencyIcon,
    title: 'SAMU 192',
    text: 'Urgências médicas e acidentes 24 horas',
  },
  {
    icon: headsetIcon,
    title: 'Disque Saúde 136',
    text: 'Informações sobre serviços, medicamentos e vacinas',
  },
  {
    icon: careIcon,
    title: 'CVV 188',
    text: 'Apoio emocional e prevenção do suicídio gratuito',
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
            <span>
              <img src={accessibilityIcon} alt="" className="tiny-icon" />
              Acessibilidade Cidadã
            </span>
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
              <img src={contrastIcon} alt="" className="tiny-icon" />
              Alto Contraste
            </button>
          </div>

          <div className="access-right">
            <span>
              <img src={verifiedIcon} alt="" className="tiny-icon" />
              Validado pelo SUS & MS
            </span>
            <span>
              <img src={emergencyIcon} alt="" className="tiny-icon" />
              SAMU 192
            </span>
            <span>
              <img src={careIcon} alt="" className="tiny-icon" />
              CVV 188
            </span>
            <span>
              <img src={phoneIcon} alt="" className="tiny-icon" />
              Disque Saúde 136
            </span>
          </div>
        </div>

        <section className="brand-row" aria-label="Barra principal">
          <a className="brand" href="#inicio" aria-label="VivaBem início">
            <span className="brand-mark">
              <img src={logoMark} alt="" />
            </span>
            <span>
              <strong>VivaBem</strong>
              <small>Saúde Integral & Cidadania</small>
            </span>
          </a>

          <label className="search-box">
            <img src={searchIcon} alt="" className="search-icon" />
            <input
              type="search"
              placeholder="Buscar doenças, UBS, vacinas, exames..."
              aria-label="Buscar no portal"
            />
          </label>

          <div className="profile-actions">
            <a href="#cadastro">Entrar / Cadastro</a>
            <button type="button" className="profile-button" aria-label="Abrir meu perfil">
              <span className="avatar">VB</span>
              Meu perfil
            </button>
          </div>
        </section>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a className={item.active ? 'active' : undefined} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <span className="page-top-anchor" id="inicio" aria-hidden="true" />
      <section className="age-section" id="etapas" aria-labelledby="age-title">
        <div className="age-intro">
          <div>
            <p className="eyebrow">Acompanhamento contínuo</p>
            <h1 id="age-title">Saúde sob Medida Para Cada Momento da Jornada</h1>
            <p>
              Cada ciclo biológico exige cuidados preventivos específicos. Escolha sua
              faixa etária para acessar guias validados, calendários e direitos garantidos
              pelo SUS.
            </p>
          </div>

          <a className="guide-link" href="#guias">
            <img src={guideIcon} alt="" />
            Guias Clínicos Prontos para Download
          </a>
        </div>

        <div className="age-grid" id="guias">
          {ageCards.map((card) => (
            <article className={`age-card ${card.color}`} key={card.title}>
              <div className="age-card-top">
                <span className="age-pill">{card.range}</span>
                <img src={card.icon} alt="" />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="quick-services" id="prevencao" aria-label="Atendimento rápido">
        {serviceCards.map((card) => (
          <article className="service-card" key={card.title}>
            <span className="service-icon">
              <img src={card.icon} alt="" />
            </span>
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
            <span className="brand-mark">
              <img src={logoMark} alt="" />
            </span>
            <span>
              <strong>VivaBem Saúde</strong>
            </span>
          </a>
          <p>
            Compromisso ético com a saúde pública universal, medicina preventiva e
            esclarecimento transparente a serviço de todas as famílias do Brasil.
          </p>
          <strong className="curation">
            <img src={shieldIcon} alt="" className="tiny-icon" />
            Conteúdo com Curadoria Médica Familiar
          </strong>
        </div>

        <div className="footer-links">
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
            © 2026 VivaBem Saúde Cidadã. Informações baseadas em evidências científicas
            alinhadas às diretrizes do Ministério da Saúde e OMS.
          </span>
          <strong>
            As informações deste portal não substituem o diagnóstico e acompanhamento
            médico individual.
          </strong>
        </div>
      </footer>
    </main>
  )
}

export default App
