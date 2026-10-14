// Conteúdo real: Instagram @vila_raposa_educandario e Google Maps (coletado em out/2026).

export const school = {
  name: "Educandário Vila Raposa",
  short: "Vila Raposa",
  instagram: "https://www.instagram.com/vila_raposa_educandario/",
  instagramHandle: "@vila_raposa_educandario",
  phone: "(11) 98339-7123",
  phoneHref: "tel:+5511983397123",
  whatsapp: "5511983397123",
  address: "R. Inglaterra, 108 - Jardim São Francisco",
  city: "Guarulhos - SP, 07195-170",
  hours: "Atendimento das 6h às 19h",
  mapsUrl:
    "https://www.google.com/maps/place/Educand%C3%A1rio+Vila+Raposa/@-23.4492535,-46.5107115,17z/data=!4m6!3m5!1s0x94cef52f9b8e13ff:0x868169d60ab0dbea!8m2!3d-23.4492535!4d-46.5107115!16s%2Fg%2F11q2t2ljys",
  rating: "4,7",
  reviewCount: 59,
  years: 6,
};

export function whatsappLink(msg = "Olá! Vim pelo site do Vila Raposa e gostaria de mais informações.") {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Turmas", href: "#turmas" },
  { label: "Aulas extras", href: "#extras" },
  { label: "Equipe", href: "#equipe" },
  { label: "Famílias", href: "#familias" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const why = [
  { title: "Turmas reduzidas", text: "Aqui cada criança tem nome, história e um jeito único de ser. Criança não é número.", color: "bg-sun-soft", icon: "users" },
  { title: "Educação socioafetiva", text: "Cuidado, afeto e atenção aos detalhes, respeitando o tempo de cada criança.", color: "bg-coral-soft", icon: "heart" },
  { title: "Aprender brincando", text: "Aprendizagem através das experiências e do brincar, em cada fase da infância.", color: "bg-sky-soft", icon: "puzzle" },
  { title: "Parceria com as famílias", text: "Conhecemos cada família de perto e caminhamos juntos no desenvolvimento.", color: "bg-mint-soft", icon: "home" },
];

export const stats = [
  { value: "6", suffix: " anos", label: "de história", color: "bg-sun-soft" },
  { value: "4,7", suffix: "", label: "no Google", color: "bg-coral-soft" },
  { value: "6h", suffix: "–19h", label: "de atendimento", color: "bg-mint-soft" },
];

export const programs = [
  {
    tag: "A partir de 4 meses",
    title: "Berçário",
    text: "Experiências sensoriais, brincadeiras com balões, texturas e muito colo, num ambiente seguro para os primeiros passos.",
    image: "/img/bercario-baloes.webp",
    color: "bg-coral-soft",
    tagColor: "bg-coral",
  },
  {
    tag: "Até 5 anos",
    title: "Educação Infantil",
    text: "Projetos com histórias, fantoches, jogos e atividades que desenvolvem linguagem, autonomia e convivência.",
    image: "/img/quebra-cabeca.webp",
    color: "bg-sun-soft",
    tagColor: "bg-sun",
  },
  {
    tag: "6h às 19h",
    title: "Período integral",
    text: "Atendimento das 6h às 19h para acompanhar a rotina das famílias, com cuidado do começo ao fim do dia.",
    image: "/img/bercario-desenho.webp",
    color: "bg-sky-soft",
    tagColor: "bg-sky",
  },
  {
    tag: "Formandos",
    title: "Formatura",
    text: "A turminha que se despede da Educação Infantil celebra a conquista numa formatura cheia de memórias.",
    image: "/img/turma-patio.webp",
    color: "bg-mint-soft",
    tagColor: "bg-mint",
  },
];

export const extras = [
  { title: "Judô", text: "Disciplina, respeito e coordenação motora no tatame.", icon: "judo", color: "bg-coral" },
  { title: "Inglês", text: "Primeiro contato com a língua inglesa de forma lúdica.", icon: "book", color: "bg-sky" },
  { title: "Ballet", text: "Movimento, postura, música e expressão corporal.", icon: "ballet", color: "bg-[#c69cf4]" },
  { title: "Robótica", text: "Curiosidade, lógica e criatividade desde pequenos.", icon: "robot", color: "bg-mint" },
  { title: "Educação Financeira", text: "Programa FORME: valor do dinheiro e escolhas conscientes, com até visita à feira.", icon: "coin", color: "bg-sun" },
];

export const values = [
  { title: "Cada criança é única", text: "Valorizamos as particularidades e cada etapa do desenvolvimento.", color: "bg-sun-soft" },
  { title: "Escola pequena, cuidado gigante", text: "Em uma escola menor, conseguimos olhar de perto e acolher cada sentimento.", color: "bg-sky-soft" },
  { title: "Ambiente seguro", text: "Ambiente acolhedor e preparado para cada fase, com salas monitoradas por câmeras.", color: "bg-mint-soft" },
  { title: "Inclusão", text: "Acolhemos cada criança e sua família com amor, respeito e dedicação.", color: "bg-coral-soft" },
  { title: "Projetos e histórias", text: "Patinho Feio, Chapeuzinho Vermelho, Floresta Encantada: aprender vivendo as histórias.", color: "bg-[#ece2ff]" },
  { title: "Festas e datas especiais", text: "Festa das Cores, Dia dos Pais, Festa Julina e momentos que viram memória.", color: "bg-sun-soft" },
];

export const projects = [
  { title: "Festa das Cores", text: "Chuva de espuma, pozinho colorido e dança.", image: "/img/festa-das-cores.webp", color: "bg-sun-soft" },
  { title: "O Patinho Feio", text: "Respeito, amizade e valorização das diferenças.", image: "/img/patinho-feio.webp", color: "bg-coral-soft" },
  { title: "Visita à feira", text: "Educação financeira na prática: escolher, contar e economizar.", image: "/img/feira-educacao-financeira.webp", color: "bg-sky-soft" },
  { title: "Teatro de fantoches", text: "Histórias contadas e recontadas pelas próprias crianças.", image: "/img/fantoche.webp", color: "bg-mint-soft" },
];

// Avaliações reais do Google Maps (5 estrelas). Onde o Google corta o texto, encerramos na última frase completa.
export const testimonials = [
  {
    name: "Ellen Rocha",
    role: "Mãe",
    text: "Foi a melhor escolha para 2026, minha filha está amando todos os dias encontrar os amiguinhos e as professoras. Uma escola com excelentes profissionais, que cuidam e ensinam com todo amor e carinho.",
    color: "bg-sun-soft",
  },
  {
    name: "Priscila dos Reis Nascimento",
    role: "Mãe",
    text: "Essa escola é maravilhosa, minha filha estuda há dois anos e meu filho entrou agora no berçário da unidade 2, não tenho do que reclamar.",
    color: "bg-sky-soft",
  },
  {
    name: "Katia Diniz",
    role: "Mãe",
    text: "Escola acolhedora, as tias têm um carinho com as crianças, meu filho está lá desde os 6 meses, hoje ele tem 2 anos, ele ama as tias Dani, Renata e Jaque.",
    color: "bg-coral-soft",
  },
  {
    name: "Pamela Almeida",
    role: "Mãe",
    text: "Meu filho adora o ambiente acolhedor e seguro que eles proporcionam. Os professores são atenciosos e dedicados, e as atividades educativas são sempre envolventes e bem planejadas.",
    color: "bg-mint-soft",
  },
];

export const gallery = [
  { src: "/img/spa-bebe.webp", alt: "Dia de spa no berçário" },
  { src: "/img/equipe.webp", alt: "Equipe de professoras do Vila Raposa" },
  { src: "/img/mascaras-animais.webp", alt: "Projeto Floresta Encantada com máscaras de animais" },
  { src: "/img/quebra-cabeca.webp", alt: "Criança montando quebra-cabeça de letras" },
];

export const faqs = [
  { q: "Qual a idade das crianças atendidas?", a: "Do Berçário à Educação Infantil: a partir de 4 meses até 5 anos." },
  { q: "Qual o horário de funcionamento?", a: "O atendimento é das 6h às 19h, para acompanhar a rotina das famílias." },
  { q: "Quais aulas extras a escola oferece?", a: "Judô, Inglês, Ballet, Robótica e Educação Financeira (programa FORME)." },
  { q: "As turmas são grandes?", a: "Não. Trabalhamos com turmas reduzidas para olhar de perto cada criança e conhecer cada família." },
  { q: "As matrículas para 2027 estão abertas?", a: "Sim, e as vagas são limitadas. Agende uma visita para conhecer a escola." },
  { q: "Posso visitar a escola antes de matricular?", a: "Pode e deve! Fale com a gente pelo WhatsApp e agende o melhor dia e horário." },
];
