import { createFileRoute } from "@tanstack/react-router";
import {
  Flame, Clock, PlugZap, CloudRain, Sun, Zap, ScanEye, Cpu, Droplets, ShieldAlert,
  Linkedin, Battery, Radar, ToggleRight, Code2, FileCode, Paintbrush, Braces, Users,
} from "lucide-react";
import emblema from "@/assets/porto-sem-listra.png.asset.json";
import maquete from "@/assets/maquete-real.jpeg.asset.json";
import simulacao from "@/assets/simulacao-porto.mp4.asset.json";
import { Button } from "@/components/ui/button";

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



function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</div>;
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
  { icon: Paintbrush, t: "CSS" }, { icon: Braces, t: "JavaScript" },
];

function Index() {
  return (
    <main className="site">
      <section className="intro">
        <div className="intro-content">
          <img src={emblema.url} alt="Emblema Porto Seguro Solar — âncora, sol e contêineres" width={508} height={491} className="emblem" />
          <span className="project-label"><Sun /> Projeto Escola Técnica Adélia</span>
          <h1>Porto Seguro <span className="solar-text">Solar</span></h1>
          <p className="intro-description">Sistema Inteligente, Sustentável e Off-Grid para Combate a Incêndios Portuários.</p>
          <div className="intro-actions">
            <Button asChild size="lg" className="solar-button"><a href="#solucao">Conheça a Solução</a></Button>
            <Button asChild variant="outline" size="lg"><a href="#circuito">Ver Circuito Físico</a></Button>
          </div>
        </div>
      </section>
      <section id="solucao" className="section container">
        <SectionTitle eyebrow="Contexto & Proposta" title="O Problema e a Solução" sub="A dor do setor portuário e como a automação resolve o desafio." />
        <div className="comparison-grid">
          {[{ label: "Problemas", items: problems, tone: "problem" }, { label: "Solução", items: solutions, tone: "solution" }].map((g) => (
            <div key={g.label} className={`comparison ${g.tone}`}>
              <h3>{g.label}</h3>
              <div className="comparison-items">{g.items.map((i) => <div key={i.t} className="comparison-item"><i.icon /><div><p className="item-title">{i.t}</p><p className="item-description">{i.d}</p></div></div>)}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="circuito" className="section section-band">
        <div className="container">
          <SectionTitle eyebrow="Automação Embarcada" title="Como Funciona" sub="O fluxo lógico do circuito físico, do sensor ao combate." />
          <ol className="steps-grid">{steps.map((s, idx) => <li key={s.t} className="step"><span className="step-number">0{idx + 1}</span><s.icon /><h3>{s.t}</h3><p className="item-description">{s.d}</p></li>)}</ol>
        </div>
      </section>
      <section className="section container">
        <SectionTitle eyebrow="Protótipo" title="Galeria e Demonstração da Maquete" />
        <div className="gallery-grid">
          <figure className="gallery-item"><img src={maquete.url} alt="Maquete real do Porto Seguro Solar com cais, contêineres, painel solar e sistema de combate a incêndio" loading="lazy" width={1025} height={768} /><figcaption>Maquete Porto Seguro Solar</figcaption></figure>
          <figure className="gallery-item"><video controls playsInline preload="metadata" aria-label="Vídeo da simulação do Porto Seguro Solar"><source src={simulacao.url} type="video/mp4" />Seu navegador não suporta a reprodução deste vídeo.</video><figcaption>Vídeo da simulação</figcaption></figure>
        </div>
      </section>
      <section className="section section-band">
        <div className="container">
          <SectionTitle eyebrow="Stack" title="Tecnologias e Hardware" />
          <div className="hardware-grid">{hardware.map((h) => <div key={h.t} className="hardware-item"><h.icon /><p className="item-title">{h.t}</p><p className="item-description">{h.d}</p></div>)}</div>
          <div className="software-list">{software.map((s) => <span key={s.t} className="software-item"><s.icon /> {s.t}</span>)}</div>
        </div>
      </section>
      <footer className="footer container">
        <Users className="group-icon" /><h2>Sobre o Grupo</h2>
        <p className="group-names">Kassyane Yumi · Grazielli Fonseca</p><p className="school-name">Escola Técnica Adélia</p>
        <div className="social-links">
          <Button asChild variant="outline" size="lg"><a href="https://www.linkedin.com/in/kassyane-wada-79080a28a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Kassyane Yumi"><Linkedin /> Kassyane Yumi</a></Button>
          <Button asChild variant="outline" size="lg"><a href="https://www.linkedin.com/in/grazielli-fonseca/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Grazielli Fonseca"><Linkedin /> Grazielli Fonseca</a></Button>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Porto Seguro Solar</p>
      </footer>
    </main>
  );
}
