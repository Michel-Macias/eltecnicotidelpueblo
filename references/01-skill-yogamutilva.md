---
name: yogamutilva-web-updates
title: Yogamutilva web updates
description: Flujo estándar para implementar cambios en la web Alaya Yoga Mutilva desde materiales del cliente (audio, imágenes, CSV) sin perder el historial editable ni repetir configuraciones.
---

# Yogamutilva: actualizaciones web desde material del cliente

## Cuándo usar
Cuando el usuario pida:
- Revisar audios/vídeos del cliente e implementar cambios en `yogamutilva`.
- Actualizar bios personalizadas, servicios, horarios o secciones.
- Enviar preview local antes de subir cambios al repositorio.
- Derivar una web nueva a partir de `yogamutilva` como plantilla estructural para otro profesional/servicio.
Revisa primero `BACKLOG.md` para no duplicar trabajo ya documentado.

## Configuración previa del repo (una sola vez)
Si no existe, clonar:
```bash
git clone git@github.com:Michel-Macias/yogamutilva.git /ruta/al/workspace/yogamutilva
```
Configurar identidad local:
```bash
git config user.name 'Michel-Macias'
git config user.email '<correo>'
```
Cambiar remote push a SSH solo si se trabaja por clave:
```bash
git remote set-url --push origin git@github.com:Michel-Macias/yogamutilva.git
```

## Flujo de cambios
1. Localiza material: audios, imágenes y CSV bajo la ruta que indique el usuario (habitualmente `archivos whatsapp...` o similar).
2. Transcripción de audio:
   - Usa el venv configurado en `~/.whisper-env` con `faster-whisper`.
   - Comando rápido para transcribir un directorio:
     ```bash
     source ~/.whisper-env/bin/activate
     python - <<'PY'
     from faster_whisper import WhisperModel
     from pathlib import Path
     model = WhisperModel("small", device="cpu", compute_type="int8")
     for path in sorted(Path("<ruta audios>").glob("*.ogg")):
         segments, _ = model.transcribe(str(path), beam_size=5, language="es")
         txt = "\n".join(f"[{seg.start:.1f} -> {seg.end:.1f}] {seg.text}" for seg in segments)
         Path(path.stem + ".txt").write_text(txt)
     PY
     ```
3. Revisa cada petición y valida que no duplique cambios existentes. Usa `git status --short` para controlar modificaciones.
4. Edita con `patch` los archivos estáticos (`docs/index.html`, `docs/aviso-legal.html`) y confirma que no introduces etiquetas mal formadas ni estilos en línea innecesarios (evita estilos inline en nuevas secciones; modifica `style.css` cuando sea posible).
5. Actualiza `BACKLOG.md` reflejando cada requerimiento aplicado. Respeta el formato existente.
6. Actualiza imágenes del cliente: copia solo `jpeg`, `jpg`, `webp`, `mp4` y preserva la ruta `docs/assets/img/...`. Ajusta extensión/formato si la web usa WebP y el material viene en JPEG.

## Previsualización
Sirve la carpeta `docs` para validar:
```bash
cd /ruta/al/workspace/yogamutilva/docs
python3 -m http.server 8080
```

## Reglas clave
- **Aviso Legal**: actualiza nombre/NIF del titular si lo entrega el cliente; no saques esos datos de memoria.
- **Audios/imágenes del cliente**: no publiques ni subas en web material que no tenga consentimiento explícito del cliente.
- **Horarios**: cualquier cambio debe definirse por día y profesor; actualiza la tabla completa para evitar entradas fantasma.
- **Contactos**: usa enlaces WhatsApp con `https://wa.me/...` coherentes con los teléfonos dados por el cliente. Evita exponer números visibles si el cliente no lo indicó expresamente.
- **Secciones nuevas**: crea una sección `<section id="...">` con clases compatibles (`reveal`, `bg-alt` cuando proceda) y un elemento `<h2>` descriptivo.
- **Ramas**: si existe `feat-*`, evalúa bifurcar en dicha rama antes de editar. Solo usa `main` para confirmar que la rama feature está fusionada o es la estable.
- **Imágenes del staff**: no reemplaces fotos existentes de `Conócenos` sin confirmación explícita del cliente. Si envía una imagen alternativa, deja la original y, si procede, usa la nueva solo en otra sección como `Crecimiento Personal`.
- **Optimización de imágenes**: si la foto entregada se ve borrosa, mejora la nitidez sin redimensionar con ImageMagick: `colorspace sRGB`, `-unsharp 0x1.0+0.8+0.0`, codificación WebP calidad alta (`-quality 95`, `-interlace Plane`, `-define webp:method=6`). No modificas resoluciones sin petición expresa.
- **Estilos en nuevas secciones**: evita estilos inline cuando sea posible; usa clases existentes de `style.css` para layouts e imágenes responsivas.

## Checklist pre-subida
- [ ] `git status --short` limpio de cambios no deseados.
- [ ] `docs/index.html`, `style.css`, recursos multimedia nuevos incluidos.
- [ ] `BACKLOG.md` actualizado.
- [ ] Preview local ok.