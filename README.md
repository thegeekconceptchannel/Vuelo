# Vuelo · viento y Kp

App web para el iPhone que dice si puedes volar: viento a 10, 80 y 120 m, ráfagas, dirección, índice Kp, lluvia, temperatura y visibilidad, con un semáforo según los límites de cada dron (Whoop, 5" y DJI).

Los datos se piden directo desde el iPhone a Open-Meteo y a la NOAA, y la app queda guardada en el teléfono: sin señal, abre y muestra el último pronóstico guardado (cubre 7 días).

## Instalarla en el iPhone

1. Abre tu dirección en **Safari**.
2. Toca **Compartir** → **Añadir a pantalla de inicio** → **Añadir**.
3. Ábrela desde el ícono nuevo, acepta el permiso de ubicación y guarda ahí tus lugares de vuelo. Safari y la app instalada guardan sus datos por separado.
4. Ábrela una vez con señal. Desde ahí queda guardada en el teléfono.

## Qué mira el semáforo

- **Rojo:** algo pasa tu límite.
- **Amarillo:** viento o ráfagas sobre el 80 % de tu límite, Kp a un punto del límite, lluvia sobre la mitad de tu máximo, temperatura bajo tu mínima o visibilidad menor a 3 km.
- El viento se evalúa a la altura que eliges (10, 80 o 120 m); las ráfagas solo vienen pronosticadas a 10 m, así que arriba suelen ser mayores.
- Es un pronóstico de modelo con resolución de kilómetros. En cerros y quebradas el viento real puede ser distinto: revisa también lo que te marca el dron en vuelo.

## Datos

- Pronóstico: [Open-Meteo](https://open-meteo.com/), licencia CC BY 4.0, gratis para uso personal sin publicidad.
- Índice Kp: [NOAA Space Weather Prediction Center](https://www.swpc.noaa.gov/).
