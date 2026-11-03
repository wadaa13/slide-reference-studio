import { createFileRoute } from "@tanstack/react-router";
import {
  Flame, Clock, PlugZap, CloudRain, Sun, Zap, ScanEye, Cpu, Droplets, ShieldAlert,
  Github, Play, Battery, Radar, ToggleRight, Code2, FileCode, Paintbrush, Braces, Users,
} from "lucide-react";
import emblema from "@/assets/porto-sem-listra.png.asset.json";
import maquete from "@/assets/maquete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porto Seguro Solar — Combate a Incêndios Off-Grid" },
      { name: "description", content: "Sistema inteligente, sustentável e off-grid para combate a incêndios portuários com Arduino, energia solar e água da chuva." },
      { property: "og:title", content: "Porto Seguro Solar" },
      { property: "og:description", content: "Sistema inteligente, sustentável e off-grid para combate a incêndios portuários." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/";

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const problems = [
  { icon: Clock, t: "Tempo de resposta elevado", d: "Brigadas demoram a chegar a pontos remotos do cais." },
  { icon: PlugZap, t: "Dependência da rede elétrica", d: "Quedas de energia paralisam sistemas convencionais." },
  { icon: Flame, t: "Propagação do fogo", d: "Cargas inflamáveis espalham o incêndio rapidamente." },
];
const solutions = [
  { icon: Zap, t: "Prontidão imediata", d: "Detecção e acionamento automáticos em segundos." },
  { icon: CloudRain, t: "Reuso de água da chuva", d: "Cisterna pluvial abastece a bomba de combate." },
  { icon: Sun, t: "Energia solar off-grid", d: "Painel e bateria mantêm o sistema sempre ativo." },
];
const steps = [
  { icon: ScanEye, t: "Detecção", d: "Sensor MQ-2 monitora fumaça e gás no cais." },
  { icon: Cpu, t: "Processamento", d: "Arduino analisa se o limiar crítico foi atingido." },
  { icon: Droplets, t: "Combate", d: "Relé aciona a mini bomba com água pluvial da cisterna." },
  { icon: ShieldAlert, t: "Segurança", d: "Botão físico para desarme imediato de emergência." },
];
const hardware = [
  { icon: Cpu, t: "Arduino Uno", d: "Microcontrolador ATmega328P" },
  { icon: ScanEye, t: "Sensor MQ-2", d: "Fumaça, GLP e gases inflamáveis" },
  { icon: Radar, t: "HC-SR04", d: "Ultrassônico · nível da cisterna" },
  { icon: ToggleRight, t: "Módulo Relé", d: "Chaveamento da bomba d'água" },
  { icon: Sun, t: "Painel Solar", d: "Geração off-grid" },
  { icon: Battery, t: "Bateria 18650", d: "Li-ion 3,7 V recarregável" },
];
const software = [
  { icon: Code2, t: "C++" }, { icon: FileCode, t: "HTML" },
  { icon: Paintbrush, t: "Tailwind CSS" }, { icon: Braces, t: "JavaScript" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-solar opacity-25 blur-3xl" />
            <img src={emblema.url} alt="Emblema Porto Seguro Solar — âncora, sol e contêineres" width={508} height={491} className="relative h-44 w-auto drop-shadow-2xl md:h-56" />
          </div>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Sun className="h-3.5 w-3.5 text-primary" /> Projeto Escola Técnica Adélia
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Porto Seguro <span className="text-solar">Solar</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Sistema Inteligente, Sustentável e Off-Grid para Combate a Incêndios Portuários.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#solucao" className="rounded-lg bg-solar px-7 py-3.5 text-center font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
              Conheça a Solução
            </a>
            <a href="#circuito" className="rounded-lg border border-border bg-card/50 px-7 py-3.5 text-center font-semibold backdrop-blur transition hover:bg-card">
              Ver Circuito Físico
            </a>
          </div>
        </div>
      </section>

      {/* Problema & Solução */}
      <section id="solucao" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Contexto & Proposta" title="O Problema e a Solução" sub="A dor do setor portuário e como a automação resolve o desafio." />
        <div className="grid gap-8 md:grid-cols-2">
          {[{ label: "Problemas", items: problems, tone: "text-destructive" }, { label: "Solução", items: solutions, tone: "text-primary" }].map((g) => (
            <div key={g.label} className="rounded-2xl border border-border bg-card p-6">
              <h3 className={`mb-6 font-display text-xl font-semibold ${g.tone}`}>{g.label}</h3>
              <div className="space-y-4">
                {g.items.map((i) => (
                  <div key={i.t} className="flex gap-4 rounded-xl bg-muted p-4">
                    <i.icon className={`h-6 w-6 shrink-0 ${g.tone}`} />
                    <div>
                      <p className="font-semibold">{i.t}</p>
                      <p className="text-sm text-muted-foreground">{i.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="circuito" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Automação Embarcada" title="Como Funciona" sub="O fluxo lógico do circuito físico, do sensor ao combate." />
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((s, idx) => (
              <li key={s.t} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-5xl font-bold text-primary/20">0{idx + 1}</span>
                <s.icon className="mt-2 h-8 w-8 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Galeria */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Protótipo" title="Galeria e Demonstração da Maquete" />
        <div className="grid gap-6 md:grid-cols-2">
          <img src={maquete} alt="Maquete 3D do porto com Arduino e painel solar" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-2xl border border-border object-cover" />
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-solar shadow-glow">
              <Play className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="font-display font-semibold">Vídeo da simulação</p>
            <p className="max-w-xs text-sm text-muted-foreground">Disparo automático da água e alarme sonoro — em breve.</p>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Stack" title="Tecnologias e Hardware" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {hardware.map((h) => (
              <div key={h.t} className="rounded-xl border border-border bg-card p-5 transition hover:border-primary">
                <h.icon className="h-7 w-7 text-primary" />
                <p className="mt-3 font-semibold">{h.t}</p>
                <p className="text-sm text-muted-foreground">{h.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {software.map((s) => (
              <span key={s.t} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                <s.icon className="h-4 w-4 text-accent" /> {s.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grupo / Rodapé */}
      <footer className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Users className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 font-display text-3xl font-bold">Sobre o Grupo</h2>
        <p className="mt-4 text-lg">Kassyane Yumi · Grazielli Fonseca</p>
        <p className="text-muted-foreground">Escola Técnica Adélia</p>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold transition hover:border-primary">
          <Github className="h-5 w-5" /> Repositório no GitHub
        </a>
        <p className="mt-12 text-xs text-muted-foreground">© {new Date().getFullYear()} Porto Seguro Solar</p>
      </footer>
    </main>
  );
}
