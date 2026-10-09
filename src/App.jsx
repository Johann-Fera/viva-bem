import './App.css'
import logoMark from './assets/VivaBem Logo.png'
import phoneIcon from './assets/Container.png'
import peopleIcon from './assets/Icon (10).png'
import emergencyIcon from './assets/Icon (11).png'
import headsetIcon from './assets/Icon (12).png'
import careIcon from './assets/Icon (13).png'
import shieldIcon from './assets/Icon (14).png'
import accessibilityIcon from './assets/Icon (3).png'
import contrastIcon from './assets/Icon (4).png'
import verifiedIcon from './assets/Icon (5).png'
import searchIcon from './assets/Icon (8).png'
import sendIcon from './assets/Icon (9).png'
import familyHero from './assets/family-hero.png'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Por Idades', href: '#etapas' },
  { label: 'Saúde da Criança', href: '#saude-crianca' },
  { label: 'Localizador SUS', href: '#localizador-sus' },
  { label: 'Vacinação & Prevenção', href: '#vacinacao-prevencao' },
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
              <img src={sendIcon} alt="" className="button-icon" />
              Encontrar Serviços Gratuitos Perto de Mim
            </a>
            <a href="#etapas" className="secondary-action">
              <img src={peopleIcon} alt="" className="button-icon" />
              Explorar por Faixa Etária
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={familyHero}
            alt="Família conversando com uma profissional de saúde em uma unidade de atendimento"
            className="family-photo"
          />

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
            Compromisso ético com a saúde pública universal, medicina preventiva
            e esclarecimento transparente a serviço de todas as famílias do
            Brasil.
          </p>
          <strong className="curation">
            <img src={shieldIcon} alt="" className="tiny-icon" />
            Conteúdo com Curadoria Médica Familiar
          </strong>
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
