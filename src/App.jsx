import './App.css'
import logoMark from './assets/VivaBem Logo.png'
import phoneIcon from './assets/Container.png'
import peopleIcon from './assets/Icon (10).png'
import emergencyIcon from './assets/Icon (11).png'
import headsetIcon from './assets/Icon (12).png'
import careIcon from './assets/Icon (13).png'
import shieldIcon from './assets/Icon (14).png'
import guideIcon from './assets/Icon (15).png'
import elderIcon from './assets/Icon (16).png'
import adultIcon from './assets/Icon (17).png'
import teenIcon from './assets/Icon (18).png'
import childIcon from './assets/Icon (19).png'
import vaccineVialIcon from './assets/Icon (20).png'
import serviceToolIcon from './assets/Icon (21).png'
import coldChainIcon from './assets/Icon (22).png'
import doseIcon from './assets/Icon (23).png'
import calendarIcon from './assets/Icon (24).png'
import personIcon from './assets/Icon (25).png'
import medicalPlusIcon from './assets/Icon (26).png'
import signalIcon from './assets/Icon (27).png'
import clockIcon from './assets/Icon (28).png'
import callIcon from './assets/Icon (29).png'
import pinIcon from './assets/Icon (30).png'
import routeIcon from './assets/Icon (31).png'
import accessPhoneIcon from './assets/Icon (32).png'
import accessibilityIcon from './assets/Icon (3).png'
import contrastIcon from './assets/Icon (4).png'
import verifiedIcon from './assets/Icon (5).png'
import searchIcon from './assets/Icon (8).png'
import sendIcon from './assets/Icon (9).png'
import familyHero from './assets/family-hero.png'

const navItems = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Por Idades', href: '#etapas' },
  { label: 'Saúde da Criança', href: '#saude-crianca' },
  { label: 'Localizador SUS', href: '#localizador-sus' },
  { label: 'Vacinação', href: '#vacinacao' },
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

const vaccineStock = [
  {
    icon: vaccineVialIcon,
    title: 'Influenza Trivalente (Gripe)',
    details: 'Lote Fiocruz 2025/B • Câmara fria a 4,2°C',
    status: '180 doses disponíveis',
    tone: 'teal',
  },
  {
    icon: coldChainIcon,
    title: 'Dengue (Qdenga)',
    details: 'Público de 10 a 14 anos prioritário',
    status: '45 doses disponíveis',
    tone: 'blue',
  },
  {
    icon: doseIcon,
    title: 'Covid-19 Bivalente / XBB',
    details: 'Grupos prioritários e reforços regulares',
    status: '95 doses disponíveis',
    tone: 'teal',
  },
  {
    icon: medicalPlusIcon,
    title: 'BCG & Pentavalente Pediátrica',
    details: 'Calendário básico da infância',
    status: 'Estoque Pleno (>250)',
    tone: 'muted',
  },
]

const nearbyUnits = [
  ['UBS Jardim Paulista', 'Av. Brigadeiro Luís Antônio, 2800 • 2,1 km'],
  ['AMA/UBS Integrada Paraíso', 'Rua Tomás Carvalhal, 130 • 2,7 km'],
]

const serviceCards = [
  {
    icon: emergencyIcon,
    title: 'SAMU 192',
    text: 'Urgências médicas, traumas e socorro 24 horas',
  },
  {
    icon: headsetIcon,
    title: 'Disque Saúde 136',
    text: 'Informações sobre UBS, medicamentos e vacinas',
  },
  {
    icon: careIcon,
    title: 'CVV 188',
    text: 'Apoio emocional confidencial e gratuito',
  },
]

const footerGroups = [
  {
    id: 'saude-crianca',
    title: 'Cuidado por Etapas',
    links: [
      'Saúde da Criança & Primeiros Anos',
      'Adolescência & Bem-Estar Mental',
      'Adultos & Saúde Preventiva',
      'Longevidade Ativa & 60+',
      'Visão Geral por Ciclos de Vida',
    ],
  },
  {
    id: 'localizador-sus',
    title: 'Serviços e Ferramentas',
    links: [
      'Localizador de UBS, UPA e CAPS',
      'Calendário Nacional de Vacinação',
      'Carteira SUS Digital & Agendamento',
      'Biblioteca e Guias Clínicos',
      'Central do Cidadão',
    ],
  },
  {
    id: 'vacinacao-prevencao',
    title: 'Acesso & Cidadania',
    links: [
      'Acessar / Criar Conta gov.br',
      'Diretrizes de Revisão Clínica',
      'Termos de Uso e Privacidade',
      'Política de Acessibilidade Web (eMAG)',
      'Ouvidoria Geral do SUS',
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
            <a className={item.active ? 'active' : undefined} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <h1>
            Cuidar da sua saúde em cada fase da vida ficou mais <em>simples</em> e{' '}
            <em>acolhedor.</em>
          </h1>
          <p>
            Orientações claras, seguras e livres de complicação. Encontre com facilidade
            atendimento gratuito na sua região, aprenda hábitos preventivos e promova o
            bem-estar da sua família com respeito às suas necessidades.
          </p>

          <div className="hero-actions">
            <a href="#vacinacao" className="primary-action">
              <img src={sendIcon} alt="" className="button-icon" />
              Ver Calendário Nacional de Vacinação
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
                Campanha Nacional de Vacinação Multivacinal ativa. Leve a caderneta à UBS
                mais próxima.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="vaccine-section" id="vacinacao" aria-labelledby="vaccine-title">
        <div className="vaccine-hero">
          <div className="vaccine-copy">
            <h1 id="vaccine-title">
              Vacinação é Cuidado: Calendário Nacional, Campanhas e Doses Gratuitas no SUS
            </h1>
            <p>
              O Sistema Único de Saúde garante proteção em todos os ciclos de vida.
              Nenhuma vacina básica requer agendamento ou encaminhamento médico: basta
              comparecer à sala de vacina da sua Unidade Básica de Saúde (UBS) com um
              documento.
            </p>

            <div className="vaccine-actions">
              <label className="vaccine-search">
                <img src={searchIcon} alt="" />
                <input
                  type="search"
                  placeholder="Busque por vacina (Ex: HPV, Febre Amarela, Gripe)"
                  aria-label="Buscar vacina"
                />
              </label>
              <a href="#etapas" className="vaccine-button primary">
                <img src={calendarIcon} alt="" />
                Ver por Idade
              </a>
              <a href="#localizador-sus" className="vaccine-button ghost">
                <img src={pinIcon} alt="" />
                UBS Mais Próxima
              </a>
            </div>
          </div>

          <aside className="network-card" aria-label="Rede Nacional SUS">
            <div className="network-top">
              <strong>Rede Nacional SUS</strong>
              <span>
                <img src={medicalPlusIcon} alt="" />
              </span>
            </div>
            <b>38.000+</b>
            <p>Salas de vacinas ativas com climatização contínua</p>
            <div className="guarantee-card">
              <img src={shieldIcon} alt="" />
              <div>
                <strong>Direito Garantido</strong>
                <p>
                  Perdeu a carteirinha? A UBS recupera seu histórico no e-SUS e emite uma
                  nova na hora.
                </p>
              </div>
            </div>
            <div className="network-tags">
              <span>100% Gratuito</span>
              <span>Sem Guia Médica</span>
              <span>Livre Demanda</span>
            </div>
          </aside>
        </div>

        <div className="stock-head">
          <div>
            <p className="live-badge">
              <img src={signalIcon} alt="" />
              Monitoramento em tempo real • Rede de frio
            </p>
            <h2>Estoque de Vacinas na sua Região</h2>
            <p>
              Transparência viva: dados sincronizados com os termômetros e sensores
              digitais da câmara fria das unidades de saúde.
            </p>
          </div>
          <button type="button" className="location-button">
            <img src={routeIcon} alt="" />
            Alterar Minha Localização
          </button>
        </div>

        <div className="stock-layout">
          <article className="stock-card">
            <div className="unit-head">
              <span className="unit-icon">
                <img src={serviceToolIcon} alt="" />
              </span>
              <div>
                <h3>UBS Vila Mariana — Geraldo de Paula Souza</h3>
                <p>
                  <img src={pinIcon} alt="" />
                  Rua Dr. Arnaldo, 925 • A 1,2 km de você
                </p>
              </div>
              <strong>Sua Referência</strong>
            </div>

            <p className="open-row">
              <span>Sala Aberta até 19:00</span>
              Tempo médio de fila: ~8 min
            </p>

            <div className="dose-list">
              <h4>Disponibilidade instantânea de doses</h4>
              {vaccineStock.map((item) => (
                <div className="dose-row" key={item.title}>
                  <span className={`dose-icon ${item.tone}`}>
                    <img src={item.icon} alt="" />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.details}</p>
                  </div>
                  <b>{item.status}</b>
                </div>
              ))}
            </div>

            <div className="stock-footer">
              <p>
                <img src={coldChainIcon} alt="" />
                Temperatura verificada há 4 min pela Rede de Frio
              </p>
              <a href="#localizador-sus">Como Chegar à Unidade</a>
            </div>
          </article>

          <div className="map-column">
            <article className="map-card" aria-label="Mapa de unidades próximas">
              <div className="map-art">
                <span className="map-pin main">São Paulo</span>
                <span className="map-pin one">Perdizes</span>
                <span className="map-pin two">Paraíso</span>
                <span className="map-pin three">Vila Mariana</span>
              </div>
              <div className="map-caption">
                <div>
                  <strong>3 Postos com Sala de Vacina Climatizada</strong>
                  <p>Num raio de 3 km do seu CEP</p>
                </div>
                <a href="#localizador-sus">Ampliar</a>
              </div>
            </article>

            <article className="nearby-card">
              <h3>Outras unidades vizinhas</h3>
              {nearbyUnits.map(([name, address]) => (
                <div className="nearby-row" key={name}>
                  <div>
                    <strong>{name}</strong>
                    <p>{address}</p>
                  </div>
                  <span>Estoque OK</span>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

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
            Conteúdo com Revisão Médica e Multiprofissional
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
            As orientações deste portal não substituem o diagnóstico médico presencial.
          </strong>
        </div>
      </footer>
    </main>
  )
}

export default App
