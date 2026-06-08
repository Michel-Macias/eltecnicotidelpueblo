# Web Servicios Pro Michel Macías — Plan de implementación

> **Modo plan:** solo diseño del entregable y pasos de implementación. No se modifica código ejecutable en esta fase.

**Objetivo:** Crear una web estática profesional para ofrecer servicios técnicos de ciberseguridad, automatización y soporte a usuarios normales, autónomos y PYMEs, con estética heredada de YogaMutilva pero adaptada a Michel y a su oferta real.

**Publico objetivo final:** personas sin conocimientos técnicos, pequeñas empresas y negocios locales que necesitan protección básica, endurecimiento de entornos y automatización de tareas — no grandes cuentas.

**Fuentes y repos de apoyo:**
- Perfil público: `https://github.com/Michel-Macias` y `https://github.com/MaciasIT`
- Portfolio ciberseguridad: `https://maciasit.github.io/Portfolio-Ciberseguridad/`
- Proyectos relevantes: `Escaner-de-vulnerabilidades-web`, `Shapeshifter-Detector`, `Centinela_PWA`, `lynis`, `IA-Hacking`, `HostelEnglishPWA`, `VideoFrameTool`, `Python-Ciberseguridad`
- Patrón visual y estructural de referencia: `yogamutilva/docs/` (clonado en `/home/m1txel/yogamutilva`)

---

## 1. Alcance y contenido por secciones

Cada sección está pensada para un público no técnico: mensajes claros, sin jerga innecesaria, CTAs a WhatsApp primero, y respaldo con proyectos reales.

### 1.1 Hero
- Titular: “Protege tu negocio digital sin complicaciones”
- Subtítulo: hardening, auditoría web, automatización y formación práctica para PYMES y usuarios finales.
- CTAs: “Habla por WhatsApp” y “Ver servicios”

### 1.2 Conócenos (sobre mi)
- Foto profesional.
- Texto en primera persona: sysadmin, estudiante de ciberseguridad Cisco, Google IT Certified, más de 30 años gestionando operaciones.
- Diferencial: combino madurez operativa y gestión de crisis con rigor técnico actual.

### 1.3 Servicios — cuatro pilares
1. Protección básica para PYMEs
   - Endurecimiento de servidores y estaciones, revisión de accesos, políticas de copia y actualizaciones.
   - Proyecto asociado: repo `lynis`.
2. Auditoría web y pruebas de seguridad
   - Revisión guiada de vulnerabilidades OWASP, evasión WAF, informes claros.
   - Proyecto asociado: `Escaner-de-vulnerabilidades-web`.
3. Automatización y mantenimiento preventivo
   - Scripts de backup, alertas, revisiones periódicas y despliegues con Docker.
   - Proyecto asociado: `VideoFrameTool`, `Python-Ciberseguridad`.
4. Formación y acompañamiento técnico
   - Sesiones para equipos pequeños o autónomos: higiene digital, uso seguro de herramientas, respuesta a incidentes básica.
   - Proyecto asociado: `Centinela_PWA` como ejemplo de producto accesible.

### 1.4 Metodología de trabajo
- Cuatro pasos sencillos: contacto y briefing -> revisión y propuesta -> ejecución guiada -> entrega y acompañamiento.

### 1.5 Casos reales y proyectos
- Cards agrupadas por categorías: Hardening, Auditoría, Análisis forense, Automatización, Herramientas accesibles.
- Cada card con:
  - Nombre del proyecto
  - Descripción no técnica
  - Tecnologías
  - Enlace al repo GitHub

### 1.6 Tarifas y modalidades
- Modalidades: paquete PYME básico, paquete profesional, auditoría puntual, bolsa de horas.
- Regla: no mostrar precios fijos visibles si no quieres; usar “A partir de X €” o “Consultar”.

### 1.7 Testimonios / Confianza
- Espacio reservado para reseñas de clientes.
- Nota: candidatos a rellenar cuando tenga primeras experiencias.

### 1.8 FAQ
- Preguntas frecuentes orientadas a usuarios no técnicos.

### 1.9 Contacto
- WhatsApp como canal principal.
- Email como alternativa.
- Formulario solo si quieres captar leads: usar endpoint de Formspree o similar.

---

## 2. Aspectos legales obligatorios

La web debe incluir obligatoriamente:
- Aviso legal
- Política de privacidad
- Política de cookies
- Declaración de accesibilidad

Para el aviso legal se necesitan datos reales del titular; no se deducirán de memoria. Se rellenarán cuando el usuario provea nombre, NIF y domicilio.

---

## 3. Paleta y diseño: adaptación de YogaMutilva a Michel

Mantener la estructura general de `yogamutilva/docs/` como base estructural y UX:
- Header translúcido con nav hamburguesa en móvil.
- Hero con carrusel de fondo.
- Secciones con clases `reveal` y alternancia `bg-alt`.
- Tarjetas con bordes redondeados y sombra suave.
- Tipografía sans + serif para títulos.

Adaptación cromática para transmitir confianza técnica y cercanía:
- Fondo: crema muy claro (#FDF5E6) similar al actual.
- Acentos: naranja cálido para botones y CTA.
- Textos y fondo alterno: verde oscuro/oliva como color de confianza.
- Blanco para tarjetas.
- Accesibilidad: mantener contraste y jerarquía actual.

---

## 4. Estructura técnica propuesta

### 4.1 Formato
- Web estática HTML + CSS + JS mínimo, empaquetada para despliegue en GitHub Pages o hosting object storage sencillo.
- Ruta base: `/docs/` para servir directamente en repositorio tipo `username.github.io/nombre-repo`.

### 4.2 Archivos objetivo
- `/docs/index.html`
- `/docs/style.css`
- `/docs/main.js`
- `/docs/aviso-legal.html`
- `/docs/politica-privacidad.html`
- `/docs/politica-cookies.html`
- `/docs/declaracion-accesibilidad.html`
- `/docs/assets/img/...`
- `/docs/robots.txt`
- `/docs/sitemap.xml`

### 4.3 Stack
- HTML5 semántico.
- CSS moderno con variables y responsive mobile first.
- JS vanilla mínimo: carrusel hero, menú hamburguesa, detección de scroll para header y reveal al hacer scroll.
- SVGs inline para iconos (WhatsApp, email, GitHub).
- PETICIONES DE CONTACTO VÍA WHATSAPP.
- GA/GTM solo si se solicita métricas.

### 4.4 Metadatos y SEO
- `<title>` y `<meta name="description">` por sección.
- JSON-LD `ProfessionalService` con datos provisionales hasta proveer nombre/NIF/dirección.
- OG y Twitter Cards.

---

## 5. Datos provisionales para SEO y copy

Basado en los perfiles y proyectos consultados:

**Nombre del negocio:** [ Nombre pendiente de definir: “Michel Macías | Servicios Técnicos”, “MaciasIT Servicios”, “M1txel Tech”, etc. ]

**Propuesta de valor provisional:**
“Ciberseguridad y automatización claras para quienes no quieren ser expertos.”

**Servicios resumidos para CTAs:**
- Hardening de servidores y equipos.
- Auditorías web guiadas.
- Scripts de automatización de mantenimiento.
- Formación práctica para equipos pequeños.

**Keywords objetivo:**
ciberseguridad para pymes Navarra, hardening Linux, automatización Python, auditoria web ética, soporte IT autónomos.

**Enlaces a proyectos (sección Casos reales):**
- Escáner de vulnerabilidades web
- Shapeshifter Detector
- Centinela QR
- Hardening con Lynis
- Python Ciberseguridad
- VideoFrameTool
- HostelEnglishPWA (muestra capacidad de producto accesible)

---

## 6. Plan de implementación secuenciado

Seguir la filosofía YogaMutilva: limpio, legible, mobile first, con CTAs claros y sin sobrecargar al usuario.

### Fase A: estructura base
1. Clonar `yogamutilva` como plantilla estructural.
2. Renombrar proyecto y rutas base (`assets`, documentos legales).
3. Reemplazar toda la copia ( textos, servicios, metodología, precios ).
4. Sustituir la paleta conservando sabor warm/tech.

### Fase B: secciones
5. Implementar Hero: 1 titular, 2 CTAs, 2–3 fondos.
6. Implementar Conócenos.
7. Implementar Servicios + Casos reales.
8. Implementar Metodología.
9. Implementar Tarifas/modalidades.
10. Implementar FAQ y Contacto.
11. Implementar Testimonios (reservado).
12. Implementar páginas legales: aviso legal, privacidad, cookies, accesibilidad.

### Fase C: SEO y despliegue
13. Ajustar metadatos, JSON-LD y OG.
14. Crear sitemap y robots.txt.
15. Validar accesibilidad básica (contraste, focus, skip link).
16. Previsualización local y checklist pre-subida.
17. Subir al repositorio final cuando el usuario lo decida.

---

## 7. Validación

- `python3 -m http.server 8080` en `/docs` y revisión visual en móvil y escritorio.
- Inspección Lighthouse básica: rendimiento, accesibilidad, mejores prácticas.
- Validar HTML5 y ausencia de estilos inline no deseados.
- Confirmar que los enlaces legales existen y son accesibles desde el footer.

---

## 8. Riesgos, trade-offs y preguntas abiertas

- Aviso legal: necesita datos reales del usuario (nombre, NIF, domicilio). Sin ellos, el despliegue no puede ser 100% legal.
- Nombres y precios: slogan oficial y modalidades de tarifas deben ser confirmados por Michel antes de publicar.
- Imágenes: necesitará fotografía profesional y capturas de proyectos para las cards.
- Colaboración: si luego quiere Multilingüe (ES/EN), hay que preverlo en estructura.
- Hosting: pendiente elegir dominio o GitHub Pages (`maciasit.github.io` u otro repo).

---

## 9. Próximo paso recomendado

Una vez aprobado el plan, implementar usando la skill `subagent-driven-development`, con un subagente por cada fase, revisión de cumplimiento de estilos y luego de calidad antes de seguir.
