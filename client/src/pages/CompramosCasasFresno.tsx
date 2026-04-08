/* ============================================================
   COMPRAMOS CASAS FRESNO — Spanish Landing Page
   Target: Central Valley Spanish-speaking homeowners
   URL: /compramos-casas-fresno
   Domain redirect: centrohomecashbuyers.com → this page
   ============================================================ */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import {
  Phone, ArrowRight, CheckCircle2, Clock, Shield, Star,
  Home, AlertTriangle, Key, Users, DollarSign, Loader2, MapPin
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

const situaciones = [
  {
    icon: <AlertTriangle size={24} />,
    titulo: "Ejecución Hipotecaria",
    desc: "¿Su banco está amenazando con quitarle su casa? Podemos cerrar antes de la fecha de subasta y detener la ejecución hipotecaria.",
    href: "/foreclosure-help",
    color: "oklch(0.55 0.13 42)",
  },
  {
    icon: <DollarSign size={24} />,
    titulo: "Pagos Atrasados",
    desc: "¿Está atrasado en los pagos de su hipoteca? Compramos su casa tal como está, pagamos lo que debe, y usted recibe efectivo.",
    href: "/behind-on-mortgage",
    color: "oklch(0.50 0.12 42)",
  },
  {
    icon: <Home size={24} />,
    titulo: "Segunda Hipoteca / HELOC",
    desc: "¿Tiene una segunda hipoteca que no puede pagar? Compramos casas con múltiples gravámenes — sin problema.",
    href: "/second-mortgage-help",
    color: "oklch(0.45 0.11 42)",
  },
  {
    icon: <Key size={24} />,
    titulo: "Venda y Quédese en Su Casa",
    desc: "¿Necesita vender pero no está listo para mudarse? Pregunte por nuestro programa de Rent-Back — venda hoy, quédese el tiempo que necesite.",
    href: "/sell-and-stay-rent-back",
    color: "oklch(0.28 0.05 155)",
  },
  {
    icon: <Users size={24} />,
    titulo: "Casa Heredada / Sucesión",
    desc: "¿Perdió a un ser querido y heredó su casa? Hemos completado más de 100 ventas de sucesión y le guiamos en cada paso.",
    href: "/probate-inherited-homes",
    color: "oklch(0.35 0.05 155)",
  },
  {
    icon: <Clock size={24} />,
    titulo: "Necesito Vender Rápido",
    desc: "Divorcio, reubicación, gastos médicos, o simplemente listo para seguir adelante — podemos cerrar en tan solo 5–7 días.",
    href: "/sell-house-fast",
    color: "oklch(0.40 0.05 155)",
  },
];

const pasos = [
  {
    num: "01",
    titulo: "Cuéntenos Sobre Su Casa",
    desc: "Llene nuestro formulario corto o llame al (559) 281-8016. Sin obligación, sin presión — solo una conversación de 5 minutos sobre su situación.",
  },
  {
    num: "02",
    titulo: "Reciba Su Oferta en Efectivo",
    desc: "Investigamos su propiedad y le presentamos una oferta justa por escrito en 24 horas — con una Opinión de Valor de un corredor independiente para que sepa que es real.",
  },
  {
    num: "03",
    titulo: "Cierre y Reciba Su Dinero",
    desc: "Usted elige la fecha de cierre — tan rápido como 5–7 días o cuando esté listo. Nosotros manejamos todo el papeleo. Usted se va con efectivo, cero cargos.",
  },
];

const testimonios = [
  {
    nombre: "María G.",
    ciudad: "Fresno, CA",
    situacion: "Ejecución Hipotecaria",
    texto: "Estaba dos meses atrasada en mi hipoteca y tenía miedo de perder mi casa. Connor fue honesto, paciente, y me dio una oferta justa en 24 horas. Cerré en 10 días y evité la ejecución hipotecaria completamente.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  },
  {
    nombre: "Roberto y Linda T.",
    ciudad: "Clovis, CA",
    situacion: "Sucesión / Casa Heredada",
    texto: "Heredamos la casa de mi madre después de que falleció y no teníamos idea de qué hacer. Alder Heritage nos guió por todo el proceso de sucesión. Sabían exactamente lo que estaban haciendo y nos trataron con respeto.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    nombre: "Patricia H.",
    ciudad: "Hanford, CA",
    situacion: "Sucesión / Casa Heredada",
    texto: "Mi padre falleció y dejó una casa que necesitaba mucho trabajo. Vivo fuera del estado y no tenía idea de cómo manejarlo. Connor se encargó de todo — el papeleo de sucesión, el título, todo. No tuve que mover un dedo.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
];

const preguntas = [
  {
    q: "¿Cuánto pagarán por mi casa?",
    a: "Proporcionamos una opinión de valor gratuita de un corredor independiente con cada oferta para que pueda verificar que nuestro número es justo. Las ofertas en efectivo son típicamente del 70–85% del valor después de reparaciones, dependiendo de la condición y ubicación.",
  },
  {
    q: "¿Necesito hacer reparaciones antes de vender?",
    a: "No. Compramos casas en cualquier condición — daños por incendio, problemas de cimentación, complicaciones de sucesión, ocupantes ilegales, mantenimiento diferido, o cualquier otra situación.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso?",
    a: "Podemos cerrar en tan solo 5–7 días, o en su cronograma. Usted elige la fecha de cierre. No hay prisa ni presión.",
  },
  {
    q: "¿Son ustedes mayoristas (wholesalers)?",
    a: "No. Somos un agente inmobiliario con licencia de California (DRE #02219124) que compra casas directamente. No asignamos contratos ni vendemos su información. Somos el comprador final.",
  },
  {
    q: "¿Qué pasa si todavía debo dinero en mi hipoteca?",
    a: "Eso está bien — la mayoría de los vendedores deben dinero. Pagamos su hipoteca existente al cierre a través de la compañía de títulos. Usted recibe lo que quede de su capital.",
  },
  {
    q: "¿Hablan español?",
    a: "Sí. Nuestro equipo puede comunicarse con usted en español durante todo el proceso. Queremos que se sienta cómodo y que entienda cada paso.",
  },
];

function SpanishOfferForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", direccion: "", situacion: "" });
  const { state, errorMessage, submit } = useFormSubmit();

  const inputStyle = {
    background: "oklch(1 0 0 / 0.06)",
    border: "1px solid oklch(1 0 0 / 0.18)",
    color: "white",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "0.95rem",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1.5px solid oklch(1 0 0 / 0.15)" }}>
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>¡Nos Comunicaremos Pronto!</h3>
        <p className="mb-6" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          Espere una llamada o mensaje de texto dentro de unas horas. O llámenos directamente:
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Phone size={18} /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1.5px solid oklch(1 0 0 / 0.15)" }}>
      <div className="px-8 py-5" style={{ background: "oklch(0.55 0.13 42)" }}>
        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Obtenga Su Oferta en Efectivo Gratis</h3>
        <p className="text-sm mt-1" style={{ color: "oklch(0.90 0.04 85)", fontFamily: "'DM Mono', monospace" }}>Sin obligación · Respondemos en 24 horas</p>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await submit({
            name: form.nombre,
            phone: form.telefono,
            address: form.direccion,
            situation: form.situacion,
            _source: "Spanish Landing Page — Compramos Casas Fresno",
            _language: "Spanish",
          });
        }}
        className="p-8 space-y-4"
      >
        <input
          required
          placeholder="Su nombre *"
          value={form.nombre}
          onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
        <input
          required
          type="tel"
          placeholder="Número de teléfono *"
          value={form.telefono}
          onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
        <input
          required
          placeholder="Dirección de la propiedad *"
          value={form.direccion}
          onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))}
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "oklch(0.75 0.10 42)")}
          onBlur={e => (e.target.style.borderColor = "oklch(1 0 0 / 0.18)")}
        />
        <select
          value={form.situacion}
          onChange={e => setForm(f => ({ ...f, situacion: e.target.value }))}
          style={{ ...inputStyle, color: form.situacion ? "white" : "oklch(0.65 0.01 60)" }}
        >
          <option value="">Mi situación...</option>
          <option value="ejecucion-hipotecaria">Ejecución hipotecaria</option>
          <option value="pagos-atrasados">Pagos atrasados</option>
          <option value="segunda-hipoteca">Segunda hipoteca / HELOC</option>
          <option value="casa-heredada">Casa heredada / sucesión</option>
          <option value="vender-rapido">Necesito vender rápido</option>
          <option value="divorcio">Divorcio</option>
          <option value="otro">Otro</option>
        </select>
        {state === "error" && (
          <p className="text-sm text-red-400 text-center">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold text-lg text-white transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-70"
          style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}
        >
          {state === "submitting" ? (
            <><Loader2 size={20} className="animate-spin" /> Enviando...</>
          ) : (
            <>Obtener Mi Oferta en Efectivo <ArrowRight size={20} /></>
          )}
        </button>
        <p className="text-center text-xs" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          🔒 Su información es privada · Sin obligación · Sin spam
        </p>
      </form>
    </div>
  );
}

export default function CompramosCasasFresno() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Alder Heritage Homes",
      "description": "Compramos casas en Fresno y el Valle Central de California. Oferta en efectivo en 24 horas. Agente con licencia DRE #02219124.",
      "url": "https://www.alderheritagehomes.com/compramos-casas-fresno",
      "telephone": "+15592818016",
      "areaServed": { "@type": "City", "name": "Fresno", "containedInPlace": { "@type": "State", "name": "California" } },
      "hasCredential": "California DRE #02219124",
      "knowsLanguage": ["en", "es"],
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": preguntas.map((p) => ({
        "@type": "Question",
        "name": p.q,
        "acceptedAnswer": { "@type": "Answer", "text": p.a },
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify([schema, faqSchema]);
    el.id = "compramos-schema";
    document.head.appendChild(el);
    return () => { document.getElementById("compramos-schema")?.remove(); };
  }, []);

  return (
    <Layout>
      <PageMeta
        title="Compramos Casas en Fresno CA | Oferta en Efectivo en 24 Horas | Alder Heritage Homes"
        description="Compramos su casa en Fresno y el Valle Central — oferta en efectivo en 24 horas. Sin reparaciones, sin comisiones, cerramos en 5–7 días. Agente con licencia DRE #02219124. Llame (559) 281-8016."
        path="/compramos-casas-fresno"
      />

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="Casa en Fresno California" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.01 60 / 0.90) 0%, oklch(0.22 0.01 60 / 0.70) 100%)" }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Hablamos Español · Agente con Licencia
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
                Compramos Su Casa en Fresno —
                <span style={{ color: "oklch(0.75 0.10 42)" }}> Oferta en Efectivo en 24 Horas</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Somos un <strong style={{ color: "oklch(0.92 0.04 85)" }}>agente inmobiliario con licencia de California</strong> que compra casas directamente por efectivo. Sin reparaciones, sin comisiones, sin intermediarios. Cerramos en tan solo 5–7 días.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                {[
                  "Oferta en efectivo en 24 horas",
                  "Sin reparaciones necesarias",
                  "Cerramos en 5–7 días",
                  "Agente con licencia DRE #02219124",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={16} style={{ color: "oklch(0.65 0.10 145)" }} />
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={PHONE_HREF} className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> Llame Ahora: {PHONE}
                </a>
              </div>
              <p className="mt-3 text-sm" style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                Hablamos español · Connor responde personalmente cada llamada
              </p>
            </div>
            <SpanishOfferForm />
          </div>
        </div>
      </section>

      {/* ── BARRA DE CONFIANZA ── */}
      <section className="py-4" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="white" style={{ color: "white" }} />)}
              </div>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "'DM Mono', monospace" }}>5.0 en Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} style={{ color: "white" }} />
              <span className="text-sm font-semibold text-white/90" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Agente con Licencia DRE #02219124</span>
            </div>
            <div className="flex items-center gap-2">
              <Home size={14} style={{ color: "white" }} />
              <span className="text-sm font-semibold text-white/90" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>47+ Casas Compradas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white/90" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>No Somos Mayoristas — Comprador Final Real</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Proceso Simple
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Cómo Compramos Su Casa
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Hemos simplificado el proceso de venta para que pueda enfocarse en lo que importa — su familia y su próximo capítulo.
            </p>
          </div>

          <div className="space-y-8">
            {pasos.map((paso) => (
              <div key={paso.num} className="flex gap-5 items-start p-6 rounded-2xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace" }}>
                  {paso.num}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{paso.titulo}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SU SITUACIÓN ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              ¿Cuál Es Su Situación?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Tenemos Una Solución Para Cada Vendedor
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              No importa lo que esté enfrentando — hemos ayudado a propietarios en la misma situación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situaciones.map((s) => (
              <div key={s.titulo} className="group p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${s.color.replace(")", " / 0.1)")}`, color: s.color }}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                    {s.titulo}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              ¿Por Qué Alder Heritage?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
              No Todos Los Compradores de Casas Son Iguales
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              La mayoría de las compañías de "compramos casas" son mayoristas sin licencia que venden su contrato a otro comprador. Nosotros somos diferentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid oklch(1 0 0 / 0.15)" }}>
              <div className="p-4 text-center font-bold" style={{ background: "oklch(1 0 0 / 0.05)", fontFamily: "'Lora', serif", color: "oklch(0.65 0.01 60)" }}>
                Mayorista Típico
              </div>
              {[
                "Sin licencia — sin responsabilidad",
                "Asigna su contrato a un desconocido",
                "Ofertas bajas, cargos ocultos",
                "Puede retirarse a último momento",
                "Sin experiencia en sucesiones",
                "Le presiona para firmar rápido",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 px-5 py-3 border-t" style={{ borderColor: "oklch(1 0 0 / 0.10)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.65 0.01 60)" }}>
                  <span style={{ color: "oklch(0.577 0.245 27.325)" }}>✗</span> {item}
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid oklch(0.55 0.13 42)" }}>
              <div className="p-4 text-center font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
                Alder Heritage Homes
              </div>
              {[
                "Agente con licencia — DRE #02219124",
                "Compramos directamente — sin intermediarios",
                "Opinión de valor de corredor independiente",
                "Comprometidos — cerramos cuando decimos",
                "100+ ventas de sucesión completadas",
                "Usted elige el cronograma, no nosotros",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 px-5 py-3 border-t" style={{ borderColor: "oklch(1 0 0 / 0.10)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.85 0.01 60)" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Historias Reales
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Propietarios Que Hemos Ayudado
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonios.map((t) => (
              <div key={t.nombre} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="oklch(0.82 0.17 75)" style={{ color: "oklch(0.82 0.17 75)" }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  "{t.texto}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                  <img src={t.avatar} alt={t.nombre} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.22 0.01 60)" }}>{t.nombre}</div>
                    <div className="text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>{t.ciudad} · {t.situacion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÁREAS QUE SERVIMOS ── */}
      <section className="py-16" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Compramos Casas en Todo el Valle Central
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fresno", "Clovis", "Madera", "Visalia", "Hanford", "Bakersfield", "Stockton", "Modesto", "Sanger", "Selma", "Reedley", "Tulare", "Porterville", "Merced"].map((city) => (
              <span key={city} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <MapPin size={12} className="inline mr-1" style={{ color: "oklch(0.55 0.13 42)" }} />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ── */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Preguntas Frecuentes
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Respuestas a Sus Preguntas
            </h2>
          </div>

          <div className="space-y-4">
            {preguntas.map((p) => (
              <details key={p.q} className="group rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {p.q}
                  <ArrowRight size={16} className="flex-shrink-0 transition-transform group-open:rotate-90" style={{ color: "oklch(0.55 0.13 42)" }} />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {p.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS (English pages for SEO cross-linking) ── */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 60)", borderTop: "1px solid oklch(0.90 0.02 60)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
            Más Recursos / More Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Sell House Code Violations Fresno", href: "/sell-house-code-violations-fresno" },
              { label: "Sell House Tax Liens Fresno", href: "/sell-house-tax-liens-fresno" },
              { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
              { label: "Probate Home Sale California", href: "/california-probate-home-sale" },
              { label: "Sell Hoarder House Fresno", href: "/sell-hoarder-house" },
              { label: "Sell House Fire Damage", href: "/sell-house-fire-damage" },
              { label: "Sell House During Divorce", href: "/sell-house-divorce" },
              { label: "Tower District Cash Buyer", href: "/fresno-neighborhoods/tower-district" },
              { label: "Sunnyside Cash Buyer", href: "/fresno-neighborhoods/sunnyside" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors hover:bg-orange-50" style={{ color: "oklch(0.35 0.08 42)", border: "1px solid oklch(0.90 0.02 60)" }}>
                <ArrowRight size={14} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>
            ¿Listo Para Su Oferta en Efectivo Gratis?
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.70 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Llámenos hoy. Sin obligación, sin presión — solo una oferta justa y honesta de un comprador local con licencia. Hablamos español.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 8px 32px oklch(0.55 0.13 42 / 0.4)" }}>
              <Phone size={20} /> Llame: {PHONE}
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ background: "oklch(1 0 0 / 0.10)", border: "2px solid oklch(1 0 0 / 0.25)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Llenar el Formulario <ArrowRight size={18} />
            </button>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Agente Inmobiliario con Licencia de California · DRE #02219124
          </p>
        </div>
      </section>
    </Layout>
  );
}
