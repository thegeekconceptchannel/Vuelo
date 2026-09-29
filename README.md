# Vuelo · viento y Kp

App web para el iPhone que dice si puedes volar: viento a 10, 80 y 120 m, ráfagas, dirección (con brújula en vivo), índice Kp, lluvia, temperatura y visibilidad, con un semáforo según los límites de cada dron (Whoop, 5" y DJI).

No depende de Claude ni de ningún servidor propio. Los datos se piden directo desde el iPhone a Open-Meteo y a la NOAA, y la app queda guardada en el teléfono: sin señal, abre y muestra el último pronóstico guardado (cubre 7 días).

## Publicarla gratis en GitHub Pages (una sola vez, desde la Mac)

1. Entra a github.com y crea una cuenta gratis, si no tienes una.
2. Arriba a la derecha, **+** → **New repository**. Nombre: `vuelo`. Déjalo en **Public** y crea el repositorio.
3. En el repositorio vacío, toca **uploading an existing file** y arrastra estos archivos: `index.html`, `sw.js`, `manifest.webmanifest`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` y este `README.md`. Luego **Commit changes**.
4. Ve a **Settings** → **Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/(root)**, y **Save**.
5. Espera uno o dos minutos. Tu dirección será `https://TU-USUARIO.github.io/vuelo/` (aparece arriba en esa misma pantalla de Pages).

El repositorio es público, pero no lleva nada tuyo: tus lugares y tus límites se guardan solo en el iPhone.

## Instalarla en el iPhone

1. Abre tu dirección en **Safari**.
2. Toca **Compartir** → **Añadir a pantalla de inicio** → **Añadir**.
3. Ábrela desde el ícono nuevo, acepta el permiso de ubicación y guarda ahí tus lugares de vuelo. Safari y la app instalada guardan sus datos por separado.
4. Ábrela una vez con señal. Desde ahí queda guardada en el teléfono.

## Actualizar a una versión nueva

Sube los archivos nuevos al mismo repositorio con **Add file → Upload files** (reemplazan a los anteriores). La app abre primero la versión guardada y baja la nueva por detrás: ciérrala y ábrela otra vez con señal. Desde la 1.1, si cambia el `sw.js` te aparece arriba el aviso "Hay una versión nueva" con un botón para actualizar. La versión instalada se ve al pie de la app.

## Novedades

- **1.1** · Brújula en vivo: toca el cuadro Dirección y la flecha gira con el iPhone, apuntando hacia donde va el viento. El Kp dice de dónde sale (estimado de la NOAA o bloque de 3 horas; si difieren, usa el mayor). Actualizaciones más limpias.
- **1.0** · Primera versión.

## Qué mira el semáforo

- **Rojo:** algo pasa tu límite.
- **Amarillo:** viento o ráfagas sobre el 80 % de tu límite, Kp a un punto del límite, lluvia sobre la mitad de tu máximo, temperatura bajo tu mínima o visibilidad menor a 3 km.
- El viento se evalúa a la altura que eliges (10, 80 o 120 m); las ráfagas solo vienen pronosticadas a 10 m, así que arriba suelen ser mayores.
- Es un pronóstico de modelo con resolución de kilómetros. En cerros y quebradas el viento real puede ser distinto: revisa también lo que te marca el dron en vuelo.

## Datos

- Pronóstico: [Open-Meteo](https://open-meteo.com/), licencia CC BY 4.0, gratis para uso personal sin publicidad.
- Índice Kp: [NOAA Space Weather Prediction Center](https://www.swpc.noaa.gov/).
