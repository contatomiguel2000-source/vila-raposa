import Image from "next/image";
import { Header, Logo } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { VisitForm } from "@/components/VisitForm";
import { IconInstagram, IconPhone, IconPin, IconClock, IconStar, IconWhatsapp } from "@/components/Icons";
import { extras, faqs, nav, programs, projects, school, stats, testimonials, values, whatsappLink, why } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

const icons: Record<string, React.ReactNode> = {
  users: <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 10c0-3.3 3.1-6 7-6s7 2.7 7 6M17 3.5a4 4 0 0 1 0 7.5M22 21c0-2.6-1.8-4.8-4.3-5.6" />,
  heart: <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />,
  puzzle: <path d="M9 3h6v3a2 2 0 1 0 4 0V3h2v6h-3a2 2 0 1 0 0 4h3v8h-6v-3a2 2 0 1 0-4 0v3H3v-6h3a2 2 0 1 0 0-4H3V3z" />,
  home: <path d="M3 11 12 3l9 8v10H3zM9 21v-6h6v6" />,
  judo: <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 9l6 2 6-2M12 11v5l-4 6M12 16l4 6M8 13l-3 3" />,
  book: <path d="M4 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4zm16 0h-4a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h5z" />,
  ballet: <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 8v6M6 11c2-2 10-2 12 0M12 14l-5 3h10zM10 17l-1 5M14 17l1 5" />,
  robot: <path d="M5 8h14v11H5zM12 4v4M9 13h.01M15 13h.01M9 16h6M2 12v3M22 12v3" />,
  coin: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15 9c-.5-1-1.6-1.5-3-1.5-1.9 0-3 .9-3 2.2 0 3 6 1.6 6 4.6 0 1.3-1.2 2.2-3 2.2-1.5 0-2.6-.6-3.1-1.6M12 6v1.5M12 16.5V18" />,
};

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {icons[name]}
    </svg>
  );
}

function SectionHead({ tag, title, text, tagColor = "bg-coral-soft", center = true }: { tag: string; title: React.ReactNode; text?: string; tagColor?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-[42rem] text-center" : "max-w-[30rem]"}>
      <span className={`tag ${tagColor}`}>🦊 {tag}</span>
      <h2 className="t-h2 mt-4">{title}</h2>
      {text && <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}

function Stars() {
  return (
    <span className="flex text-sun">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4 drop-shadow-[1px_1px_0_#231f4b]" />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="overflow-hidden pb-16 pt-40 md:pt-44">
          <div className={`${wrap} grid items-center gap-12 md:grid-cols-2`}>
            <Reveal>
              <span className="tag bg-sun-soft">☀ Berçário & Educação Infantil</span>
              <h1 className="t-hero mt-5">
                Onde a infância é vivida com <span className="text-coral">amor</span>, <span className="text-sky">cuidado</span> &{" "}
                <span className="text-mint">respeito</span>.
              </h1>
              <p className="mt-5 max-w-[30rem] text-[1.08rem] leading-relaxed text-muted">
                No Vila Raposa, cada criança é acolhida em sua individualidade, com afeto, segurança e experiências que tornam a aprendizagem significativa.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#turmas" className="btn bg-sun">Conheça as turmas →</a>
                <a href="#visita" className="btn bg-white">Agende uma visita →</a>
              </div>
              <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 flex w-fit items-center gap-3 text-[0.9rem] font-semibold">
                <Stars />
                <span>
                  <strong>{school.rating}</strong> no Google · {school.reviewCount} avaliações de famílias
                </span>
              </a>
            </Reveal>

            <Reveal delay={150} className="relative mx-auto w-full max-w-[30rem]">
              <div className="absolute -right-2 -top-6 h-40 w-40 rounded-full bg-sun md:h-52 md:w-52" aria-hidden />
              <div className="absolute -bottom-4 -left-3 h-36 w-44 rounded-[45%_55%_60%_40%] bg-sky" aria-hidden />
              <div className="card relative aspect-[4/5] overflow-hidden !rounded-t-[999px] bg-white">
                {/* Reel do Instagram (berçário com balões), recortado e comprimido, sem áudio */}
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={asset("/video/bercario-baloes.mp4")}
                  poster={asset("/img/bercario-baloes-poster.webp")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Bebês do berçário brincando com balões"
                />
              </div>
              <span className="tag absolute left-1 top-1/3 -rotate-12 bg-mint-soft !text-[0.85rem] !normal-case !tracking-normal md:-left-6">
                Cada criança é única 💛
              </span>
              <span className="tag absolute -right-1 top-10 rotate-6 bg-white !text-[0.8rem] md:-right-4">⏰ 6h às 19h</span>
              <div className="float absolute -bottom-6 right-6 h-24 w-24 overflow-hidden rounded-full border-2 border-ink bg-white md:h-28 md:w-28">
                <Image src={asset("/img/raposa.webp")} alt="Raposinha, mascote do Vila Raposa" fill sizes="112px" className="object-cover object-top" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Por que as famílias amam */}
        <section className="py-16">
          <div className={wrap}>
            <SectionHead tag="Por que as famílias amam" title="Tudo o que os pequenos precisam para crescer felizes." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 90} className={`card p-6 ${w.color}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-white">
                    <Icon name={w.icon} />
                  </span>
                  <h3 className="t-h3 mt-5">{w.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{w.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-10">
          <div className={wrap}>
            <div className="card grid items-center gap-10 bg-white p-6 md:grid-cols-2 md:p-12">
              <Reveal className="relative mx-auto w-full max-w-[26rem]">
                <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-coral" aria-hidden />
                <div className="card relative aspect-[4/5] overflow-hidden !rounded-[2.5rem] bg-sun">
                  <Image src={asset("/img/patinho-feio.webp")} alt="Turma no projeto O Patinho Feio" fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 h-32 w-32 overflow-hidden rounded-full border-2 border-ink md:-right-8">
                  <Image src={asset("/img/fantoche.webp")} alt="Teatro de fantoches" fill sizes="128px" className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <span className="tag bg-sky-soft">🦊 Quem somos</span>
                <h2 className="t-h2 mt-4">Escola pequena no tamanho, gigante no cuidado.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Há {school.years} anos o Vila Raposa vem construindo uma história feita de amor, dedicação e respeito por cada criança. Em uma escola menor, conseguimos olhar de perto, conhecer cada família, perceber cada mudança, acolher cada sentimento e respeitar o tempo de cada um.
                </p>
                <p className="mt-3 font-bold text-cocoa">Aqui, criança não é número: é conhecida, ouvida, cuidada e amada.</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className={`card flex flex-col items-center justify-center !rounded-t-[999px] px-2 pb-4 pt-6 text-center ${s.color}`}>
                      <span className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-none">
                        {s.value}
                        <span className="text-[0.6em]">{s.suffix}</span>
                      </span>
                      <span className="mt-1 text-[0.75rem] font-semibold text-muted">{s.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Turmas */}
        <section id="turmas" className="py-20">
          <div className={wrap}>
            <SectionHead tag="Nossas turmas" title="Feito para cada fase da primeira infância." text="Do berçário à Educação Infantil: dos 4 meses aos 5 anos, num ambiente acolhedor e preparado para cada etapa." tagColor="bg-sun-soft" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="card flex flex-col bg-white p-3">
                  <div className={`relative aspect-[4/3.4] overflow-hidden rounded-t-[999px] rounded-b-2xl border-2 border-ink ${p.color}`}>
                    <Image src={asset(p.image)} alt={p.title} fill sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                    <span className={`tag absolute bottom-2 left-2 ${p.tagColor} !normal-case !tracking-normal`}>{p.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <h3 className="t-h3">{p.title}</h3>
                    <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Aulas extras */}
        <section id="extras" className="py-10">
          <div className={wrap}>
            <div className="card grid gap-10 bg-sun-soft p-6 md:grid-cols-[0.85fr_1.15fr] md:p-12">
              <Reveal>
                <span className="tag bg-white">⏰ Aulas extras</span>
                <h2 className="t-h2 mt-4">Cada dia cheio de novas descobertas.</h2>
                <p className="mt-4 leading-relaxed text-muted">Além da rotina pedagógica, as crianças contam com atividades que desenvolvem o corpo, a criatividade e a autonomia.</p>
                <div className="card relative mt-8 aspect-[4/3] overflow-hidden bg-white">
                  <Image src={asset("/img/feira-educacao-financeira.webp")} alt="Visita à feira no projeto de Educação Financeira" fill sizes="(min-width: 768px) 440px, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <div className="flex flex-col gap-3">
                {extras.map((e, i) => (
                  <Reveal key={e.title} delay={i * 80} className="card flex items-start gap-4 bg-white p-4 !rounded-2xl">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink ${e.color}`}>
                      <Icon name={e.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="font-display block text-[1.15rem] font-semibold">{e.title}</span>
                      <span className="block text-[0.92rem] leading-relaxed text-muted">{e.text}</span>
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20">
          <div className={wrap}>
            <SectionHead tag="Por que o Vila Raposa" title="Aqui, cada criança se sente em casa." text="Queremos que cada criança se sinta segura e pertencente, porque, para nós, educar também é acolher." tagColor="bg-mint-soft" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 3) * 90} className={`card p-6 ${v.color}`}>
                  <span className="font-display text-[1.6rem] font-semibold text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="t-h3 mt-2">{v.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Aprender brincando */}
        <section className="py-10">
          <div className={wrap}>
            <div className="card bg-ink p-6 text-white md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <Reveal className="max-w-[32rem]">
                  <span className="tag bg-sun text-ink">🎨 Aprender brincando</span>
                  <h2 className="t-h2 mt-4">A curiosidade é o começo de toda grande descoberta.</h2>
                  <p className="mt-4 leading-relaxed text-white/75">Projetos com histórias, festas, experiências sensoriais e saídas que trazem a realidade para perto das crianças.</p>
                </Reveal>
                <a href={school.instagram} target="_blank" rel="noopener noreferrer" className="btn w-fit bg-sun text-ink">
                  Ver no Instagram →
                </a>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((p, i) => (
                  <Reveal key={p.title} delay={i * 90} className={`overflow-hidden rounded-3xl border-2 border-white/90 ${p.color} text-ink`}>
                    <div className="relative aspect-square">
                      <Image src={asset(p.image)} alt={p.title} fill sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-[1.15rem] font-semibold">{p.title}</h3>
                      <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="py-20">
          <div className={wrap}>
            <SectionHead tag="Nossa equipe" title="As pessoas por trás de cada passinho." text="Uma equipe que acolhe, cuida e ensina com amor todos os dias." tagColor="bg-coral-soft" />
            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <Reveal className="card flex flex-col bg-white p-3">
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-t-[999px] rounded-b-2xl border-2 border-ink bg-sun-soft">
                  <Image src={asset("/img/diretora.webp")} alt="Diretora Bárbara" fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover object-top" />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display text-[1.3rem] font-semibold">Bárbara</p>
                  <span className="tag mt-2 bg-sun-soft !normal-case !tracking-normal">Diretora</span>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">Amorosa, acolhedora e sempre pronta para cuidar de cada criança, cada família e de toda a equipe.</p>
                </div>
              </Reveal>
              <Reveal delay={120} className="card relative min-h-[22rem] overflow-hidden bg-sky-soft">
                <Image src={asset("/img/equipe.webp")} alt="Equipe de professoras do Vila Raposa" fill sizes="(min-width: 768px) 680px, 100vw" className="object-cover" />
                <span className="tag absolute bottom-4 left-4 bg-white !text-[0.8rem]">💛 Nosso time Vila Raposa</span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Famílias */}
        <section id="familias" className="py-10">
          <div className={wrap}>
            <div className="flex flex-col items-center gap-5 text-center">
              <SectionHead tag="O que dizem as famílias" title="Amado pelos pequenos e por suas famílias." tagColor="bg-sky-soft" />
              <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 !rounded-full bg-white px-5 py-2">
                <span className="font-display text-2xl font-semibold">{school.rating}</span>
                <Stars />
                <span className="text-[0.85rem] font-semibold text-muted">{school.reviewCount} avaliações no Google</span>
              </a>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 90} className={`card flex flex-col p-6 ${t.color}`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-white font-display text-xl font-semibold">“</span>
                  <blockquote className="mt-4 flex-1 text-[0.98rem] font-semibold leading-relaxed">{t.text}</blockquote>
                  <p className="mt-5 font-display text-[1.05rem] font-semibold">{t.name}</p>
                  <p className="text-[0.8rem] text-muted">{t.role} · Google Maps</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="py-20">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <Reveal>
              <span className="tag bg-mint-soft">💬 Dúvidas</span>
              <h2 className="t-h2 mt-4">Tem alguma pergunta?</h2>
              <p className="mt-4 leading-relaxed text-muted">Estas são as perguntas que as famílias mais fazem. Não achou a sua? A gente responde pelo WhatsApp.</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn mt-6 bg-white">
                Falar com a escola →
              </a>
            </Reveal>
            <div className="flex flex-col gap-3">
              {faqs.map((f) => (
                <details key={f.q} className="card group !rounded-2xl bg-white px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun text-lg leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Agende uma visita */}
        <section id="visita" className="pb-20">
          <div className={wrap}>
            <div className="card relative grid gap-10 overflow-hidden bg-sky p-6 md:grid-cols-2 md:p-12">
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full border-2 border-ink bg-sun" aria-hidden />
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border-2 border-ink bg-coral" aria-hidden />
              <Reveal className="relative">
                <span className="tag bg-white">📚 Matrículas 2027</span>
                <h2 className="t-h2 mt-4">Pronto para encontrar o lugar feliz do seu pequeno?</h2>
                <p className="mt-4 max-w-[28rem] leading-relaxed text-ink/80">As matrículas para 2027 estão abertas e as vagas são limitadas. Agende uma visita e venha conhecer o Vila Raposa!</p>
                <ul className="mt-6 space-y-2 font-semibold">
                  <li className="flex items-center gap-2"><IconPin className="h-4 w-4" /> {school.address}</li>
                  <li className="flex items-center gap-2"><IconClock className="h-4 w-4" /> {school.hours}</li>
                  <li className="flex items-center gap-2"><IconWhatsapp className="h-4 w-4" /> {school.phone}</li>
                </ul>
              </Reveal>
              <Reveal delay={120} className="relative">
                <VisitForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="rounded-t-[2.5rem] bg-ink pb-8 pt-14 text-white">
        <div className={wrap}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <span className="inline-block rounded-full bg-white px-3 py-2">
                <Logo />
              </span>
              <p className="font-display mt-5 text-[1.3rem] font-semibold">Pequenos passos, grandes começos.</p>
              <p className="mt-2 max-w-[22rem] text-[0.92rem] leading-relaxed text-white/70">Berçário e Educação Infantil com amor, cuidado e respeito, no Jardim São Francisco, em Guarulhos.</p>
            </div>
            <div>
              <p className="text-[0.75rem] font-extrabold uppercase tracking-wider text-sun">Explorar</p>
              <ul className="mt-3 space-y-2 text-[0.92rem] text-white/80">
                {nav.map((n) => (
                  <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.75rem] font-extrabold uppercase tracking-wider text-sun">Contato</p>
              <ul className="mt-3 space-y-3 text-[0.92rem] text-white/80">
                <li>
                  <a href={school.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-white">
                    <IconPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{school.address}<br />{school.city}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2"><IconClock className="h-4 w-4" /> {school.hours}</li>
                <li><a href={school.phoneHref} className="flex items-center gap-2 hover:text-white"><IconPhone className="h-4 w-4" /> {school.phone}</a></li>
                <li><a href={school.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><IconInstagram className="h-4 w-4" /> {school.instagramHandle}</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-12 border-t border-white/15 pt-6 text-[0.8rem] text-white/55">© {new Date().getFullYear()} {school.name}. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full border-2 border-ink bg-[#25d366] text-white shadow-[3px_3px_0_#231f4b]"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
