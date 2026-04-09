/* ============================================================
   GOOGLE ADS LANDING PAGE: Compramos Casas (Spanish)
   100% Spanish-language conversion page for Google Ads
   Target: "compramos casas Fresno", "vender casa rapido Fresno",
   "comprador de casas en efectivo", "vendemos casa en Fresno"
   Video: English with Spanish caption overlay
   ============================================================ */
import { useState, useRef } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import PageMeta from "@/components/PageMeta";
import { Link } from "wouter";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Star, Clock,
  Play, Home, Loader2, MapPin
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const VIDEO_FULL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-ad_9ad5ae32.mp4";
const VIDEO_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-thumbnail_9ed7fde4.jpg";

/* ── Spanish captions for the English video ── */
const CAPTIONS: { start: number; end: number; text: string }[] = [
  { start: 0, end: 4, text: "¿Tiene una casa en Fresno que necesita vender?" },
  { start: 4, end: 8, text: "¿Casa heredada? ¿Ejecución hipotecaria? ¿Divorcio?" },
  { start: 8, end: 13, text: "Compramos casas en Fresno en efectivo y tal como están." },
  { start: 13, end: 18, text: "Sin reparaciones. Sin comisiones. Sin intermediarios." },
  { start: 18, end: 23, text: "Soy Connor Morris — agente con licencia de California." },
  { start: 23, end: 28, text: "No soy un mayorista. Yo soy el comprador final." },
  { start: 28, end: 33, text: "Podemos cerrar en tan solo 5 a 7 días." },
  { start: 33, end: 38, text: "Cada oferta incluye una opinión de valor independiente." },
  { start: 38, end: 45, text: "Llame al (559) 281-8016 — hablamos español." },
];

/* ── Video with Spanish subtitle overlay ── */
function VideoConSubtitulos() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [caption, setCaption] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.play();
        // Caption sync
        const updateCaption = () => {
          const t = v.currentTime;
          const match = CAPTIONS.find(c => t >= c.start && t < c.end);
          setCaption(match?.text || "");
          if (!v.paused && !v.ended) requestAnimationFrame(updateCaption);
        };
        requestAnimationFrame(updateCaption);
      }
    }, 100);
  };

  return (
    <section className="py-10" style={{ background: "oklch(0.97 0.015 85)" }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
            Conozca a Su Comprador
          </span>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Una Persona Real, No un Centro de Llamadas
          </h2>
          <p className="mt-2 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Video en inglés con subtítulos en español
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            style={{ width: "100%", maxWidth: "340px", aspectRatio: "9/16", background: "oklch(0.08 0.01 60)" }}
            onClick={!isPlaying ? handlePlay : undefined}
          >
            {!isPlaying ? (
              <>
                <img src={VIDEO_THUMB} alt="Connor Morris — Alder Heritage Homes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 transition-opacity group-hover:opacity-20" style={{ background: "oklch(0 0 0 / 0.35)" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110" style={{ width: "64px", height: "64px", background: "oklch(0.55 0.13 42)", boxShadow: "0 6px 24px oklch(0.55 0.13 42 / 0.5)" }}>
                    <Play size={26} fill="white" style={{ color: "white", marginLeft: "3px" }} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ background: "oklch(0 0 0 / 0.6)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Ver Video · 0:45
                  </span>
                </div>
                {/* Spanish overlay on thumbnail */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center" style={{ background: "linear-gradient(transparent, oklch(0 0 0 / 0.85))" }}>
                  <p className="text-white text-sm font-bold leading-snug" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    "Compramos su casa en efectivo — sin reparaciones, sin comisiones."
                  </p>
                  <p className="text-xs mt-1" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>
                    — Connor Morris, Agente con Licencia
                  </p>
                </div>
              </>
            ) : (
              <>
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                  onEnded={() => { setIsPlaying(false); setCaption(""); }}
                  style={{ background: "oklch(0.05 0 0)" }}
                >
                  <source src={VIDEO_FULL} type="video/mp4" />
                </video>
                {/* Live Spanish caption overlay */}
                {caption && (
                  <div className="absolute bottom-14 left-2 right-2 text-center pointer-events-none">
                    <span className="inline-block px-4 py-2 rounded-lg text-sm font-bold text-white leading-snug" style={{ background: "oklch(0 0 0 / 0.75)", fontFamily: "'Nunito Sans', sans-serif", maxWidth: "95%" }}>
                      {caption}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Phone size={18} /> Llame a Connor: {PHONE}
          </a>
          <p className="mt-2 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Hablamos español · Respondemos el mismo día
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Spanish form ── */
function FormularioEspanol() {
  const [form, setForm] = useState({ nombre: "", telefono: "", direccion: "", situacion: "" });
  const { state, errorMessage, submit } = useFormSubmit();

  const inputStyle: React.CSSProperties = {
    background: "white",
    border: "1px solid oklch(0.85 0.02 85)",
    color: "oklch(0.22 0.01 60)",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.9rem",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
  };

  if (state === "success") {
    return (
      <div className="p-8 rounded-2xl text-center" style={{ background: "white", boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.4)" }}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>¡Recibimos Su Información!</h3>
        <p className="text-sm mb-4" style={{ color: "oklch(0.45 0.01 60)" }}>Connor le llamará dentro de unas horas. O llame directamente:</p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
          <Phone size={16} /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl" style={{ background: "white", boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.4)" }}>
      <div className="text-center mb-4">
        <div className="text-lg font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
          Obtenga Su Oferta en Efectivo Gratis
        </div>
        <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)" }}>Sin reparaciones · Sin comisiones · Cerramos en 5–7 días</div>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await submit({
            name: form.nombre,
            phone: form.telefono,
            address: form.direccion,
            situation: form.situacion,
            _source: "Google Ads LP — Compramos Casas (Spanish)",
            _language: "Spanish",
          });
        }}
        className="space-y-3"
      >
        <input required placeholder="Su nombre *" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} style={inputStyle} />
        <input required type="tel" placeholder="Número de teléfono *" value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} style={inputStyle} />
        <input required placeholder="Dirección de la propiedad *" value={form.direccion} onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))} style={inputStyle} />
        <select
          value={form.situacion}
          onChange={e => setForm(f => ({ ...f, situacion: e.target.value }))}
          style={{ ...inputStyle, color: form.situacion ? "oklch(0.22 0.01 60)" : "oklch(0.55 0.01 60)" }}
        >
          <option value="">Mi situación (opcional)</option>
          <option value="ejecucion-hipotecaria">Ejecución hipotecaria</option>
          <option value="pagos-atrasados">Pagos atrasados</option>
          <option value="casa-heredada">Casa heredada / sucesión</option>
          <option value="divorcio">Divorcio</option>
          <option value="vender-rapido">Necesito vender rápido</option>
          <option value="otro">Otro</option>
        </select>
        {state === "error" && (
          <p className="text-sm text-red-500 text-center">{errorMessage || "Error. Llame al (559) 281-8016."}</p>
        )}
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white text-base disabled:opacity-70"
          style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
        >
          {state === "submitting" ? (
            <><Loader2 size={18} className="animate-spin" /> Enviando...</>
          ) : (
            <>Obtener Mi Oferta en Efectivo <ArrowRight size={18} /></>
          )}
        </button>
        <p className="text-center text-xs" style={{ color: "oklch(0.55 0.01 60)" }}>
          Sin obligación · Connor responde el mismo día
        </p>
      </form>
    </div>
  );
}

/* ── Main Page ── */
export default function CompramosCasasAd() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.015 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
      <PageMeta
        title="Compramos Casas en Fresno — Oferta en Efectivo en 24 Horas"
        description="Compramos su casa en Fresno en efectivo, tal como está. Sin reparaciones, sin comisiones. Agente con licencia DRE #02219124. Llame (559) 281-8016."
        path="/lp/compramos-casas"
      />

      {/* Minimal header — no nav, just logo + phone */}
      <header className="sticky top-0 z-50 py-3 px-4" style={{ background: "oklch(0.22 0.01 60)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.3)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/compramos-casas-fresno">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>A</div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
                <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'DM Mono', monospace" }}>Agente con Licencia · DRE #02219124</div>
              </div>
            </div>
          </Link>
          <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)" }}>
            <Phone size={14} /> Llame Ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative" style={{ background: "oklch(0.22 0.01 60)", minHeight: "520px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Casa en Fresno California" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.22 0.01 60 / 0.97) 45%, oklch(0.22 0.01 60 / 0.65) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: headline */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Hablamos Español · Fresno y Valle Central
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              ¿Necesita Vender Su Casa en Fresno?{" "}
              <span style={{ color: "oklch(0.75 0.10 42)" }}>Oferta en Efectivo en 24 Horas.</span>
            </h1>
            <p className="text-base mb-6 leading-relaxed" style={{ color: "oklch(0.78 0.01 60)" }}>
              Somos un agente inmobiliario con licencia de California que compra casas directamente por efectivo. Sin reparaciones, sin comisiones, sin intermediarios. Hablamos español.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Recibió un aviso de ejecución hipotecaria o está atrasado en pagos",
                "Heredó una casa y no sabe qué hacer",
                "Necesita vender rápido — divorcio, reubicación, o cualquier razón",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.82 0.01 60)" }}>
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.12 42)" }} />
                  {p}
                </li>
              ))}
            </ul>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-base font-bold" style={{ color: "oklch(0.75 0.12 42)" }}>
              <Phone size={16} /> Llame Ahora: {PHONE}
            </a>
          </div>

          {/* Right: form */}
          <FormularioEspanol />
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-4" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="white" style={{ color: "white" }} />)}
              </div>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>5.0 en Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} style={{ color: "white" }} />
              <span className="text-sm font-semibold text-white/90">Agente con Licencia DRE #02219124</span>
            </div>
            <div className="flex items-center gap-2">
              <Home size={14} style={{ color: "white" }} />
              <span className="text-sm font-semibold text-white/90">100+ Transacciones Completadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video with Spanish captions */}
      <VideoConSubtitulos />

      {/* Benefits */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Por Qué Familias en Fresno Nos Eligen
            </h2>
            <ul className="space-y-3">
              {[
                "Oferta en efectivo justa en 24 horas — sin esperar semanas",
                "Cerramos en tan solo 5–7 días, o en su cronograma",
                "Sin reparaciones — compramos su casa tal como está",
                "Sin comisiones de agente — usted se queda con más dinero",
                "Opinión de valor independiente gratis con cada oferta",
                "Agente con licencia de California (DRE #02219124) — no somos mayoristas",
                "Hablamos español durante todo el proceso",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.90 0.02 85)" }}>
                  <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.50 0.15 155)" }} />
                  <span className="text-sm font-medium" style={{ color: "oklch(0.28 0.01 60)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Urgency */}
            <div className="p-6 rounded-2xl mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.08)", border: "2px solid oklch(0.55 0.13 42 / 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} style={{ color: "oklch(0.45 0.12 42)" }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'DM Mono', monospace" }}>El Tiempo Importa</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.30 0.01 60)" }}>
                Si está enfrentando una ejecución hipotecaria, cada día que espera reduce sus opciones. Si heredó una casa, los costos de mantenimiento, impuestos y seguros se acumulan cada mes. No importa su situación — mientras más pronto llame, más opciones tendrá. La consulta es gratis y sin obligación.
              </p>
            </div>

            {/* Guarantee */}
            <div className="p-6 rounded-2xl" style={{ background: "oklch(0.22 0.01 60)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} style={{ color: "oklch(0.75 0.12 42)" }} />
                <span className="text-sm font-bold" style={{ color: "white", fontFamily: "'Lora', serif" }}>La Garantía de Connor</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.75 0.01 60)" }}>
                Cada oferta incluye una opinión de valor gratuita de un corredor independiente de Fresno con más de 1,850 transacciones cerradas. Usted sabe que nuestra oferta es justa antes de decidir. Ningún otro comprador en efectivo en el Valle Central hace esto.
              </p>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white text-sm" style={{ background: "oklch(0.55 0.13 42)" }}>
                <Phone size={15} /> Llame al {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Cómo Funciona — 3 Pasos Simples
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", titulo: "Cuéntenos Sobre Su Casa", desc: "Llene el formulario o llame al (559) 281-8016. Sin obligación — solo una conversación de 5 minutos." },
              { num: "02", titulo: "Reciba Su Oferta", desc: "Le presentamos una oferta justa por escrito en 24 horas, con una opinión de valor independiente." },
              { num: "03", titulo: "Cierre y Reciba Su Dinero", desc: "Usted elige la fecha. Cerramos en 5–7 días o cuando esté listo. Cero cargos ocultos." },
            ].map(p => (
              <div key={p.num} className="p-6 rounded-2xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
                  {p.num}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{p.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto pagarán por mi casa?", a: "Proporcionamos una opinión de valor gratuita de un corredor independiente con cada oferta. Las ofertas en efectivo son típicamente del 70–85% del valor después de reparaciones, dependiendo de la condición y ubicación." },
              { q: "¿Necesito hacer reparaciones?", a: "No. Compramos casas en cualquier condición — daños por incendio, problemas de cimentación, sucesión, ocupantes ilegales, o cualquier otra situación." },
              { q: "¿Son ustedes mayoristas (wholesalers)?", a: "No. Somos un agente inmobiliario con licencia de California (DRE #02219124) que compra casas directamente. No asignamos contratos ni vendemos su información. Somos el comprador final." },
              { q: "¿Hablan español?", a: "Sí. Nuestro equipo puede comunicarse con usted en español durante todo el proceso. Queremos que se sienta cómodo y que entienda cada paso." },
              { q: "¿Cuánto tiempo tarda?", a: "Podemos cerrar en tan solo 5–7 días, o en su cronograma. Usted elige la fecha de cierre." },
            ].map((f, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <h3 className="font-bold mb-2 text-sm" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="oklch(0.75 0.12 42)" style={{ color: "oklch(0.75 0.12 42)" }} />)}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
            ¿Listo Para Hablar Con el Comprador Real?
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.01 60)" }}>
            Connor Morris — Agente con Licencia de California, DRE #02219124. Su nombre está en cada contrato. Sin intermediarios. Sin mayoristas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
              <Phone size={18} /> Llame al {PHONE}
            </a>
            <Link href="/compramos-casas-fresno">
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white" }}>
                Más Información <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <p className="mt-5 text-xs" style={{ color: "oklch(0.50 0.01 60)" }}>
            <Link href="/compramos-casas-fresno" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>Compramos Casas Fresno</Link>
            {" · "}
            <Link href="/" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>alderheritagehomes.com</Link>
            {" · "}
            <Link href="/how-it-works" className="underline" style={{ color: "oklch(0.60 0.01 60)" }}>Cómo Funciona</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
