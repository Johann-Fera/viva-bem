import { useEffect, useState } from 'react'
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
  { label: 'Início', href: '#/', page: 'home' },
  { label: 'Por Idades', href: '#/idades', page: 'idades' },
  { label: 'Saúde da Criança', href: '#/saude-crianca', page: 'saude-crianca' },
  { label: 'Localizador SUS', href: '#/localizador-sus', page: 'localizador-sus' },
  { label: 'Vacinação', href: '#/vacinacao', page: 'vacinacao' },
  { label: 'Prevenção', href: '#/prevencao', page: 'prevencao' },
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

const careFilters = [
  ['UBS / Posto de Saúde', medicalPlusIcon],
  ['Vacinação Atualizada', vaccineVialIcon],
  ['CAPS / Saúde Mental', careIcon],
  ['Academia da Saúde & Práticas', peopleIcon],
  ['Odontologia Gratuita (CEO)', shieldIcon],
  ['Saúde da Mulher & Pré-Natal', personIcon],
]

const susUnits = [
  {
    type: 'ATENÇÃO PRIMÁRIA À SAÚDE',
    title: 'UBS Vila Mariana - Dr. Geraldo',
    distance: '850m de você',
    hours: 'Seg a Sex: 07:00 às 19:00 (Sábados até 12h)',
    address: 'Rua Domingos de Morais, 1820 - Vila Mariana',
    phone: '(11) 5084-2190',
    tags: ['Vacinação', 'Farmácia Popular', 'Pré-Natal', 'Dentista'],
    tone: 'teal',
    icon: medicalPlusIcon,
  },
  {
    type: 'SAÚDE MENTAL & ESCUTA ACOLHEDORA',
    title: 'CAPS II Adulto Esperança',
    distance: '1.4 km de você',
    hours: 'Seg a Sex: 08:00 às 18:00 (Acolhimento imediato)',
    address: 'Av. Lins de Vasconcelos, 1140 - Cambuci',
    phone: '(11) 3277-4402',
    tags: ['Sem Encaminhamento', 'Psicologia', 'Oficinas Terapêuticas'],
    tone: 'purple',
    icon: careIcon,
  },
  {
    type: 'PRÁTICAS INTEGRATIVAS & EXERCÍCIO',
    title: 'Polo Academia da Saúde Ibirapuera',
    distance: '600m de você',
    hours: 'Seg a Sex: 06:30 às 11:30 | 16:00 às 19:30',
    address: 'Praça Cidade de Milão, s/n - Aclimação',
    phone: '(11) 5081-3318',
    tags: ['Lian Gong', 'Alongamento 60+', 'Educador Físico SUS'],
    tone: 'blue',
    icon: peopleIcon,
  },
]

const preventionSteps = [
  {
    number: '1',
    title: 'Documento de Identificação',
    text: 'Leve qualquer documento oficial com foto (RG, CNH, Carteira de Trabalho) ou certidão de nascimento no caso de bebês e crianças pequenas. O CPF agiliza o registro no prontuário eletrônico.',
    note: 'Válido para brasileiros e estrangeiros',
    tone: 'teal',
  },
  {
    number: '2',
    title: 'Caderneta ou Cartão SUS',
    text: 'Se tiver a caderneta física em mãos, leve para registro manual. Perdeu a caderneta? Não deixe de ir: a equipe da UBS emite uma segunda via gratuitamente na hora e localiza suas doses anteriores no e-SUS.',
    note: 'Histórico resgatado digitalmente',
    tone: 'teal',
  },
  {
    number: '3',
    title: 'Sem Pedido Médico e Sem Agendamento',
    text: 'A imunização é de livre demanda. Você não precisa passar por consulta prévia nem apresentar receita de médico para as vacinas de rotina e campanhas ativas.',
    note: 'Atendimento direto na Sala de Vacinas',
    tone: 'blue',
  },
]

const mythCards = [
  {
    tag: 'MITO COMUM',
    meta: 'Dúvida frequente',
    title: '"Criança com coriza ou resfriado leve não pode tomar vacina?"',
    fact: 'Sintomas leves como coriza, tosse discreta ou febre baixa não contraindicam a vacinação. O adiamento só é necessário em caso de febre alta persistente ou doença aguda grave.',
    text: 'Não perca a viagem à UBS por causa de um resfriado corriqueiro. A equipe da sala de vacinas avalia a criança na hora com carinho.',
  },
  {
    tag: 'MITO COMUM',
    meta: 'Aplicação combinada',
    title: '"Tomar mais de uma vacina no mesmo dia sobrecarrega o organismo?"',
    fact: 'O sistema imune humano lida diariamente com milhões de antígenos. A aplicação simultânea é segura, recomendada pela OMS e acelera a proteção.',
    text: 'Tomar a vacina da Gripe junto com a de Covid-19 ou vacinas pediátricas conjuntas não aumenta o risco de efeitos adversos.',
  },
  {
    tag: 'MITO COMUM',
    meta: 'SUS x Clínicas Privadas',
    title: '"As vacinas do SUS têm qualidade ou eficácia inferior às particulares?"',
    fact: 'As vacinas do SUS seguem o padrão ouro internacional. Produzidas por centros de excelência como Butantan e Fiocruz, passam por rigorosos testes da ANVISA.',
    text: 'O Programa Nacional de Imunizações do Brasil é referência mundial e erradicou a varíola e a poliomielite em território nacional.',
  },
]

const neonatalCards = [
  ['Teste do Pezinho (PNTN)', 'Pequena gotinha de sangue do calcanhar capaz de detectar fenilcetonúria, hipotireoidismo congênito, anemia falciforme, fibrose cística, hiperplasia adrenal congênita e deficiência de biotinidase.'],
  ['Teste do Olhinho (Reflexo Vermelho)', 'Avaliação oftalmológica com foco luminoso antes da alta. Identifica de forma precoce catarata congênita, glaucomas congênitos, retinoblastoma e infecções oculares.'],
  ['Teste da Orelhinha (Emissões Otoacústicas)', 'Exame realizado preferencialmente com o bebê dormindo. Detecta perdas auditivas congênitas garantindo reabilitação linguística antes dos 6 meses.'],
  ['Teste do Coraçãozinho (Oximetria)', 'Mede os níveis de oxigênio no sangue da mãozinha e no pezinho da criança antes da alta hospitalar. Identifica cardiopatias congênitas críticas silenciosas antes de sintomas graves.'],
  ['Teste da Linguinha (Frênulo Lingual)', 'Avaliação fonoaudiológica que identifica alterações no frênulo da língua para orientar mamadas, prevenir dor precoce e desmame precoce.'],
]

const infantVaccineCards = [
  ['Ao nascer', ['Primeira Proteção Imediata', 'BCG protege contra formas graves da tuberculose', 'Hepatite B previne transmissão no primeiro contato']],
  ['2 meses', ['Mês Decisivo de Imunização', 'Pentavalente', 'VIP', 'Pneumocócica 10V', 'Rotavírus humano']],
  ['3 meses', ['Proteção contra Meningite', 'Meningocócica C protege contra meningite bacteriana e meningococcemia']],
  ['4 meses', ['Segundas Doses Fundamentais', 'Pentavalente', 'VIP', 'Pneumocócica 10V', 'Rotavírus humano']],
  ['5 meses', ['Consolidação do 1º Semestre', 'Meningocócica C', 'Reforço do acompanhamento da Caderneta']],
  ['6 meses', ['Fim do Primeiro Ano', 'Rotina de reforços', 'Influenza em campanha anual']],
]

const nutritionMilestones = [
  ['Até os 6 Meses', 'Exclusivo', 'Leite materno exclusivo demanda livre, sem água, chás ou sucos.'],
  ['Introdução aos 6 Meses', 'Comida de verdade', 'Pratos com alimentos naturais, textura amassada e evolução gradual.'],
  ['Zero Açúcar até 2 Anos', 'Proteção metabólica', 'Evite açúcar, ultraprocessados e bebidas adoçadas.'],
  ['Vitamina D & Ferro no SUS', 'Apoio preventivo', 'Suplementação orientada pela UBS conforme acompanhamento.'],
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

const getCurrentPage = () => {
  const hash = window.location.hash.replace(/^#\/?/, '')

  if (hash.startsWith('idades') || hash.startsWith('etapas')) {
    return 'idades'
  }

  if (hash.startsWith('vacinacao')) {
    return 'vacinacao'
  }

  if (hash.startsWith('saude-crianca')) {
    return 'saude-crianca'
  }

  if (hash.startsWith('localizador-sus')) {
    return 'localizador-sus'
  }

  if (hash.startsWith('prevencao')) {
    return 'prevencao'
  }

  if (hash.startsWith('cadastro')) {
    return 'cadastro'
  }

  if (hash.startsWith('login')) {
    return 'login'
  }

  return 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleRouteChange = () => setCurrentPage(getCurrentPage())

    window.addEventListener('hashchange', handleRouteChange)
    return () => window.removeEventListener('hashchange', handleRouteChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

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
          <a className="brand" href="#/" aria-label="VivaBem início">
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
            <a href="#/login">Entrar / Cadastro</a>
            <a className="profile-button" href="#/login">
              <img src={personIcon} alt="" />
              Meu perfil
            </a>
          </div>
        </section>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              className={item.page === currentPage ? 'active' : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {currentPage === 'home' && (
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
            <a href="#/vacinacao" className="primary-action">
              <img src={sendIcon} alt="" className="button-icon" />
              Ver Calendário Nacional de Vacinação
            </a>
            <a href="#/idades" className="secondary-action">
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
      )}

      {currentPage === 'vacinacao' && (
      <section className="vaccine-section standalone-page" id="vacinacao" aria-labelledby="vaccine-title">
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
              <a href="#/idades" className="vaccine-button primary">
                <img src={calendarIcon} alt="" />
                Ver por Idade
              </a>
              <a href="#/localizador-sus" className="vaccine-button ghost">
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
              <a href="#/localizador-sus">Como Chegar à Unidade</a>
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
                <a href="#/localizador-sus">Ampliar</a>
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
      )}

      {currentPage === 'idades' && (
      <section className="age-section standalone-page" id="etapas" aria-labelledby="age-title">
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
      )}

      {currentPage === 'localizador-sus' && (
        <section className="locator-page standalone-page" aria-labelledby="locator-title">
          <div className="page-heading">
            <h1 id="locator-title">Encontre Atendimento Gratuito no seu Bairro ou Município</h1>
            <p>
              Descubra onde tomar vacinas, consultar médico de família, retirar remédios
              gratuitos ou participar de grupos de bem-estar.
            </p>
          </div>

          <div className="locator-search-panel">
            <div className="locator-search-row">
              <label className="locator-input">
                <img src={searchIcon} alt="" />
                <input aria-label="Localização" defaultValue="Vila Mariana, São Paulo - SP" />
              </label>
              <button type="button" className="soft-button">
                <img src={routeIcon} alt="" />
                Usar Minha Localização
              </button>
              <button type="button" className="solid-button">Buscar</button>
            </div>

            <div className="filter-head">
              <strong>Filtrar por tipo de cuidado essencial:</strong>
              <span>Selecione para refinar</span>
            </div>
            <div className="care-filter-list">
              {careFilters.map(([label, icon], index) => (
                <button className={index === 0 ? 'selected' : undefined} type="button" key={label}>
                  <img src={icon} alt="" />
                  {label}
                </button>
              ))}
            </div>
            <div className="locator-status">
              <span>
                <img src={verifiedIcon} alt="" />
                Exibindo unidades com estoque ativo de medicamentos básicos e vacinas
              </span>
              <strong>3 unidades públicas encontradas no raio de 2km</strong>
            </div>
          </div>

          <div className="unit-grid">
            {susUnits.map((unit) => (
              <article className={`unit-card ${unit.tone}`} key={unit.title}>
                <div className="unit-card-top">
                  <span className="unit-card-icon">
                    <img src={unit.icon} alt="" />
                  </span>
                  <b>{unit.distance}</b>
                </div>
                <p className="unit-type">{unit.type}</p>
                <h2>{unit.title}</h2>
                <div className="unit-info">
                  <span><img src={clockIcon} alt="" />{unit.hours}</span>
                  <span><img src={pinIcon} alt="" />{unit.address}</span>
                  <span><img src={callIcon} alt="" />{unit.phone}</span>
                </div>
                <div className="unit-tags">
                  {unit.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="unit-actions">
                  <a href="#/localizador-sus">
                    <img src={routeIcon} alt="" />
                    Como Chegar
                  </a>
                  <button type="button" aria-label={`Ligar para ${unit.title}`}>
                    <img src={callIcon} alt="" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {currentPage === 'prevencao' && (
        <section className="prevention-page standalone-page" aria-labelledby="prevention-title">
          <div className="center-heading">
            <p className="eyebrow">Acesso universal & descomplicado</p>
            <h1 id="prevention-title">Como Vacinar: Seus Direitos e 3 Passos Simples</h1>
            <p>
              A vacinação no SUS é um direito de todos e um dever do Estado. Nenhuma pessoa
              pode ser impedida de vacinar por falta de comprovante de residência ou caderneta
              física antiga.
            </p>
          </div>

          <div className="steps-grid">
            {preventionSteps.map((step) => (
              <article className={`step-card ${step.tone}`} key={step.number}>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
                <strong>
                  <img src={verifiedIcon} alt="" />
                  {step.note}
                </strong>
              </article>
            ))}
          </div>

          <aside className="citizen-banner">
            <div>
              <p className="eyebrow">Garantia cidadã SUS</p>
              <h2>Você sabia? Toda criança tem direito à caderneta física no nascimento</h2>
              <p>
                A Caderneta da Criança é distribuída pelas maternidades públicas e privadas com
                apoio do Ministério da Saúde. Ela acompanha não só vacinas, mas marcos de
                desenvolvimento, crescimento, visão e audição.
              </p>
            </div>
            <a href="#/saude-crianca">Baixar Caderneta em PDF (MS)</a>
          </aside>

          <section className="myths-section">
            <p className="eyebrow">Ciência, evidência e cuidado</p>
            <h2>Mitos e Fatos sobre Vacinação no Brasil</h2>
            <p>
              Desmistificamos as dúvidas mais frequentes das famílias com informações de
              especialistas da Sociedade Brasileira de Imunizações e Fiocruz.
            </p>
            <div className="myth-grid">
              {mythCards.map((card) => (
                <article className="myth-card" key={card.title}>
                  <div className="myth-meta">
                    <span>{card.tag}</span>
                    <b>{card.meta}</b>
                  </div>
                  <h3>{card.title}</h3>
                  <div className="fact-box">
                    <img src={verifiedIcon} alt="" />
                    <p>{card.fact}</p>
                  </div>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
      )}

      {currentPage === 'saude-crianca' && (
        <section className="child-page standalone-page" aria-labelledby="child-title">
          <div className="child-hero">
            <div>
              <p className="eyebrow">Saúde da criança</p>
              <h1 id="child-title">As 5 Triagens Neonatais Essenciais</h1>
              <p>
                Resultados ainda na maternidade ou na primeira semana na UBS. Exames não
                invasivos ou de simples punção que protegem o bebê contra sequelas graves
                preveníveis.
              </p>
            </div>
            <strong>
              <img src={shieldIcon} alt="" />
              100% cobertos pelo SUS
            </strong>
          </div>

          <div className="screening-grid">
            {neonatalCards.map(([title, text], index) => (
              <article className={index === 5 ? 'dark' : undefined} key={title}>
                <span className="screening-icon">
                  <img src={index % 2 === 0 ? childIcon : medicalPlusIcon} alt="" />
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
                <small>{index === 0 ? 'Fazer até o 5º dia de vida' : 'Resultado rápido e orientação familiar'}</small>
              </article>
            ))}
            <article className="dark">
              <span className="screening-icon">
                <img src={guideIcon} alt="" />
              </span>
              <h2>Perdeu o prazo na maternidade?</h2>
              <p>
                Não se preocupe: a sua Unidade Básica de Saúde agenda uma coleta tardia ou
                avalia se testes complementares são necessários.
              </p>
              <small>Localizar sala de vacina e triagem mais próxima</small>
            </article>
          </div>

          <section className="infant-vaccine-section">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">PNI - Programa Nacional de Imunizações</p>
                <h2>Calendário Nacional de Vacinação Infantil</h2>
                <p>
                  Vacinas protegem contra mais de 20 doenças fatais. Veja a trilha do tempo do
                  nascimento aos 4 anos de idade.
                </p>
              </div>
              <span>Todas as idades (0 a 4 anos)</span>
            </div>
            <div className="infant-grid">
              {infantVaccineCards.map(([age, items]) => (
                <article key={age}>
                  <strong>{age}</strong>
                  <h3>{items[0]}</h3>
                  <ul>
                    {items.slice(1).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="nutrition-section">
            <p className="eyebrow">Guia alimentar para crianças brasileiras</p>
            <h2>Nutrição e a Janela de Ouro dos Primeiros 1.000 Dias</h2>
            <p>
              Do início da gestação ao 2º aniversário: o período que programa o metabolismo,
              a imunidade e o paladar para toda a vida adulta.
            </p>
            <div className="nutrition-grid">
              {nutritionMilestones.map(([age, title, text]) => (
                <article key={age}>
                  <b>{age}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="booklet-section">
            <div>
              <h2>Caderneta da Criança: Passaporte para uma Vida Plena</h2>
              <p>
                Entregue gratuitamente nas maternidades públicas e privadas no ato do nascimento.
                Muito mais que um comprovante de vacinas, ela acompanha crescimento, marcos de
                desenvolvimento, visão, audição, saúde bucal e orientações familiares.
              </p>
            </div>
            <a className="booklet-card purple" href="#/saude-crianca">Baixar PDF Menina 10 MB</a>
            <a className="booklet-card teal" href="#/saude-crianca">Baixar PDF Menino 10 MB</a>
          </section>
        </section>
      )}

      {(currentPage === 'login' || currentPage === 'cadastro') && (
        <section className="auth-page standalone-page" aria-labelledby="auth-title">
          <div className="auth-card">
            <div className="auth-tabs">
              <a className={currentPage === 'login' ? 'active' : undefined} href="#/login">
                <img src={accessPhoneIcon} alt="" />
                Entrar (Já tenho conta)
              </a>
              <a className={currentPage === 'cadastro' ? 'active' : undefined} href="#/cadastro">
                <img src={personIcon} alt="" />
                Criar Nova Conta (1º Acesso)
              </a>
            </div>

            <div className="auth-divider">
              <span>Ou acesse com seus dados cadastrais</span>
            </div>

            <form className="auth-form">
              {currentPage === 'cadastro' && (
                <>
                  <label>
                    Insira seu nome completo
                    <input type="text" placeholder="Insira seu nome completo" />
                  </label>
                  <label>
                    Insira seu CPF
                    <input type="text" placeholder="000.000.000-00" />
                  </label>
                  <label>
                    Insira seu e-mail
                    <input type="email" placeholder="email@gmail.com" />
                  </label>
                </>
              )}

              {currentPage === 'login' && (
                <label>
                  CPF ou E-mail*
                  <input type="text" placeholder="Insira seu CPF ou E-mail" />
                </label>
              )}

              <label>
                <span>
                  Sua Senha VivaBem *
                  {currentPage === 'login' && <a href="#/login">Esqueci minha senha</a>}
                </span>
                <input type="password" placeholder="Digite sua senha cadastrada" />
              </label>

              <button type="button" className="solid-button auth-submit">
                Acessar Meu Painel VivaBem
                <img src={sendIcon} alt="" />
              </button>
            </form>
          </div>
        </section>
      )}

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
          <a className="brand" href="#/">
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
                <a href="#/" key={link}>
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
