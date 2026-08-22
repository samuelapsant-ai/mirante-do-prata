/* STYLE NOTE — Casa Mirante / “Refúgio Topográfico”
   Biofílica Brazilian hospitality: deep forest, limestone, clay accents, topographic
   linework, asymmetric photo windows and clear direct-reservation conversion. */
import { type FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleGauge,
  Coffee,
  Flame,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Send,
  Sparkles,
  Star,
  Trees,
  UsersRound,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import "./casa-mirante.css";

const contactNumber = "5521981487000";
const whatsappUrl = `https://wa.me/${contactNumber}`;

const navItems = [
  { label: "A casa", href: "#a-casa" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

const comfortItems = [
  { icon: <UsersRound />, value: "10", label: "hóspedes" },
  { icon: <BedDouble />, value: "4", label: "quartos" },
  { icon: <BedDouble />, value: "7", label: "camas" },
  { icon: <Bath />, value: "6", label: "banheiros" },
];

const highlights = [
  { icon: <Waves />, title: "Dias de água e horizonte", copy: "Piscina, ofurô e uma vista que faz a rotina ficar distante." },
  { icon: <Flame />, title: "Calor de serra", copy: "Sauna a lenha, duchas e espaços feitos para desacelerar sem pressa." },
  { icon: <Coffee />, title: "A casa para ficar", copy: "Cozinha equipada, área de churrasqueira e ambiente para reunir quem importa." },
];

function CasaMark() {
  return (
    <a className="cm-mark" href="#inicio" aria-label="Casa Mirante do Prata — início">
      <img src="/assets/casa-mirante-mark.png" alt="" aria-hidden="true" />
      <span>
        <strong>Casa Mirante</strong>
        <small>do Prata</small>
      </span>
    </a>
  );
}

export default function CasaMiranteDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content") || "";
    document.title = "Casa Mirante do Prata | Vale das Videiras";
    description?.setAttribute("content", "Casa de serra para até 10 hóspedes no Vale das Videiras, em Araras, Petrópolis/RJ.");
    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
    };
  }, []);

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "Olá! Gostaria de consultar disponibilidade na Casa Mirante do Prata.",
      "",
      `Nome: ${form.get("name") || ""}`,
      `Check-in: ${form.get("checkin") || ""}`,
      `Check-out: ${form.get("checkout") || ""}`,
      `Hóspedes: ${form.get("guests") || ""}`,
      `Ocasião: ${form.get("occasion") || ""}`,
      "",
      `Mensagem: ${form.get("message") || ""}`,
    ].join("\n");
    setFormSent(true);
    window.open(`${whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="cm-site" id="inicio">
      <header className="cm-header">
        <div className="cm-header__inner">
          <CasaMark />
          <nav className="cm-nav" aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="cm-header__cta" href="#disponibilidade">Consultar datas <ArrowUpRight size={15} /></a>
          <button className="cm-menu" type="button" aria-label="Abrir menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="cm-mobile-nav" aria-label="Navegação mobile">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ChevronRight size={17} /></a>)}
            <a href="#disponibilidade" onClick={closeMenu}>Consultar datas <ArrowDownRight size={17} /></a>
          </nav>
        )}
      </header>

      <section className="cm-hero" aria-labelledby="cm-hero-title">
        <img className="cm-hero__image" src="/assets/casa-mirante-hero.jpg" alt="Ofurô da Casa Mirante do Prata com a serra ao fundo" />
        <div className="cm-hero__scrim" />
        <img className="cm-hero__art" src="/assets/casa-mirante-topographic.png" alt="" aria-hidden="true" />
        <div className="cm-hero__copy">
          <p className="cm-eyebrow"><Sparkles size={13} /> VALE DAS VIDEIRAS · ARARAS, PETRÓPOLIS</p>
          <h1 id="cm-hero-title">Quando a serra pede pausa,<br /><em>a casa abre as portas.</em></h1>
          <p className="cm-hero__lead">Uma casa para compartilhar dias de natureza, conforto e tempo bem vivido.</p>
          <div className="cm-hero__actions">
            <a className="cm-button cm-button--light" href="#disponibilidade">Consultar disponibilidade <ArrowDownRight size={18} /></a>
            <a className="cm-text-link cm-text-link--light" href="#a-casa">Conheça a casa <ChevronDown size={16} /></a>
          </div>
        </div>
        <div className="cm-hero__badge" aria-label="Casa de serra para até dez hóspedes">
          <Mountain size={18} />
          <span>CASA DE SERRA</span>
          <strong>ATÉ 10<br />HÓSPEDES</strong>
          <span>VALE DAS VIDEIRAS</span>
        </div>
        <a className="cm-hero__scroll" href="#a-casa">Desça para descobrir <ChevronDown size={16} /></a>
      </section>

      <section className="cm-trail" aria-label="Resumo da hospedagem">
        <p><Trees size={16} /> Refúgio de paz e aconchego na serra</p>
        <span />
        <p><MapPin size={16} /> Araras · Petrópolis, RJ</p>
        <span />
        <p><CircleGauge size={16} /> Consulta de datas pelo WhatsApp</p>
      </section>

      <section className="cm-intro cm-section" id="a-casa">
        <div className="cm-intro__title cm-reveal">
          <p className="cm-kicker">A CASA MIRANTE</p>
          <h2>Uma pausa que<br /><em>tem lugar para todos.</em></h2>
        </div>
        <div className="cm-intro__body cm-reveal">
          <p className="cm-lead">Em meio ao verde do Vale das Videiras, a Casa Mirante recebe famílias e grupos que desejam trocar a agenda cheia por dias de conversa, água, ar puro e horizonte.</p>
          <p>São ambientes pensados para ficar: quartos confortáveis, espaços de convivência e uma área externa onde a serra sempre participa da experiência.</p>
          <a className="cm-text-link" href="#galeria">Ver a casa em detalhes <ArrowDownRight size={16} /></a>
        </div>
        <div className="cm-intro__ribbon" aria-label="Dados da casa">
          {comfortItems.map((item) => <div key={item.label}>{item.icon}<strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="cm-experience" id="experiencias">
        <div className="cm-experience__image cm-reveal">
          <img src="/assets/casa-mirante-mountains.jpg" alt="Vista das montanhas a partir da Casa Mirante do Prata" />
          <span>O verde muda de cor o dia inteiro.</span>
        </div>
        <div className="cm-experience__content cm-reveal">
          <p className="cm-kicker">A EXPERIÊNCIA DA SERRA</p>
          <h2>Espaço para<br /><em>respirar diferente.</em></h2>
          <p>O conforto da casa encontra a natureza em pequenos rituais: uma manhã com vista, um mergulho sem relógio, um almoço demorado e o fim de tarde perto de quem você trouxe.</p>
          <div className="cm-highlights">
            {highlights.map((item) => <article key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="cm-feature cm-section">
        <div className="cm-feature__copy cm-reveal">
          <p className="cm-kicker cm-kicker--clay">ESTRUTURA PARA CURTIR A CASA</p>
          <h2>Seu tempo de descanso<br /><em>não precisa de roteiro.</em></h2>
          <p>Entre na água, faça um churrasco, reúna a família, prepare algo na cozinha ou simplesmente escolha sua janela favorita. A proposta é ter liberdade para viver o seu próprio fim de semana.</p>
          <div className="cm-tags"><span>Vista para montanhas</span><span>Piscina</span><span>Sauna a lenha</span><span>Ofurô</span><span>Churrasqueira</span><span>Sinuca</span><span>Wi‑Fi</span></div>
          <a className="cm-button cm-button--dark" href="#disponibilidade">Planejar uma estadia <ArrowDownRight size={17} /></a>
        </div>
        <div className="cm-feature__visual cm-reveal">
          <img src="/assets/casa-mirante-arch-detail.png" alt="" aria-hidden="true" />
          <div className="cm-feature__quote"><span>“</span><p>O descanso começa antes de chegar: começa quando a viagem já tem um destino.</p></div>
        </div>
      </section>

      <section className="cm-gallery cm-section" id="galeria">
        <div className="cm-gallery__head cm-reveal">
          <div><p className="cm-kicker">PELOS CANTOS DA CASA</p><h2>Descobertas que<br /><em>pedem mais tempo.</em></h2></div>
          <p>Um pouco da casa, do verde e das pausas que esperam por você no Vale das Videiras.</p>
        </div>
        <div className="cm-gallery__grid">
          <figure className="cm-gallery__main cm-reveal"><img src="/assets/casa-mirante-hero.jpg" alt="Área de hidromassagem com vista para montanhas" /><figcaption>Entre água quente e serra.</figcaption></figure>
          <figure className="cm-gallery__mountain cm-reveal"><img src="/assets/casa-mirante-mountains.jpg" alt="Paisagem montanhosa vista da Casa Mirante" /><figcaption>Janelas para o vale.</figcaption></figure>
          <div className="cm-gallery__note cm-reveal"><span>CASA MIRANTE<br />DO PRATA</span><p>A casa vira o cenário. O resto pode esperar.</p><i>Araras · Petrópolis, RJ</i></div>
          <figure className="cm-gallery__suite cm-reveal"><img src="/assets/casa-mirante-suite.jpg" alt="Suíte da Casa Mirante do Prata" /><figcaption>Quartos para descansar com calma.</figcaption></figure>
          <figure className="cm-gallery__facade cm-reveal"><img src="/assets/casa-mirante-facade.jpg" alt="Fachada externa da Casa Mirante do Prata" /></figure>
        </div>
        <p className="cm-gallery__note-small">Prévia demonstrativa com fotos públicas encaminhadas pelo proprietário. A seleção final de fotos será confirmada antes da publicação oficial.</p>
      </section>

      <section className="cm-proof cm-section" aria-label="Avaliação pública">
        <div className="cm-proof__score"><Star size={18} fill="currentColor" /><strong>4,92</strong><small>DE 5 NO AIRBNB</small></div>
        <blockquote>“Uma casa com estrutura para reunir quem você gosta e espaço de sobra para a serra fazer o resto.”</blockquote>
        <p>51 avaliações públicas no anúncio consultado · Dados sujeitos à atualização da plataforma</p>
      </section>

      <section className="cm-location" id="localizacao">
        <img src="/assets/casa-mirante-facade.jpg" alt="Fachada da Casa Mirante entre árvores" />
        <div className="cm-location__wash" />
        <div className="cm-location__content cm-section cm-reveal">
          <p className="cm-kicker cm-kicker--light">VALE DAS VIDEIRAS</p>
          <h2>Uma casa para<br /><em>chegar sem pressa.</em></h2>
          <p>Em Araras, Petrópolis/RJ, a Casa Mirante oferece o ponto de partida para um fim de semana perto do verde, das montanhas e de bons encontros.</p>
          <a className="cm-text-link cm-text-link--light" href="https://maps.google.com/?q=Casa+Mirante+do+Prata+Araras+Petropolis" target="_blank" rel="noreferrer">Ver no mapa <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="cm-inquiry cm-section" id="disponibilidade">
        <div className="cm-inquiry__intro cm-reveal">
          <p className="cm-kicker">CONSULTE SUA ESTADIA</p>
          <h2>Escolha suas datas.<br /><em>O descanso começa aqui.</em></h2>
          <p>Envie os detalhes da sua viagem e a Casa Mirante responde pelo WhatsApp com disponibilidade e próximos passos.</p>
          <div className="cm-inquiry__contact"><Phone size={17} /><a href={`https://wa.me/${contactNumber}`} target="_blank" rel="noreferrer">+55 21 98148-7000</a></div>
        </div>
        <form className="cm-form cm-reveal" onSubmit={handleInquiry}>
          <label>Seu nome<input name="name" required placeholder="Como podemos te chamar?" /></label>
          <div className="cm-form__two"><label>Check-in<input name="checkin" type="date" /></label><label>Check-out<input name="checkout" type="date" /></label></div>
          <div className="cm-form__two"><label>Hóspedes<select name="guests" defaultValue=""><option value="" disabled>Selecione</option>{Array.from({ length: 10 }, (_, index) => <option key={index + 1}>{index + 1} {index === 0 ? "hóspede" : "hóspedes"}</option>)}</select></label><label>Ocasião<input name="occasion" placeholder="Família, amigos, descanso..." /></label></div>
          <label>Conte um pouco sobre a viagem<textarea name="message" rows={4} placeholder="Queremos aproveitar a serra para..." /></label>
          <button className="cm-button cm-button--clay" type="submit">Consultar pelo WhatsApp <Send size={16} /></button>
          {formSent && <p className="cm-form__confirmation">Abrimos uma mensagem com seus dados no WhatsApp. Se ela não aparecer, use o número acima.</p>}
          <p className="cm-form__small">Nesta prévia, a consulta abre o WhatsApp da Casa Mirante. O lançamento final pode integrar calendário e sistema de reservas, se desejado.</p>
        </form>
      </section>

      <footer className="cm-footer">
        <div className="cm-footer__inner cm-section"><CasaMark /><p>Casa de serra para viver o Vale das Videiras com calma.</p><div><a href="https://www.instagram.com/casamirantedoprata/" target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></div>
        <div className="cm-footer__bottom cm-section"><span>Araras · Petrópolis, RJ</span><span>Prévia de site para Casa Mirante do Prata</span></div>
      </footer>
    </main>
  );
}
