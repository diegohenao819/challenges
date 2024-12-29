function drawRace(indices, length) {
  return indices
    .map((pos, index) => {
      // Determina el carril y su desplazamiento
      const offset = " ".repeat(indices.length - index - 1);

      // Genera la pista inicial con nieve
      let track = "~".repeat(length);

      // Calcula la posición real del reno
      const renoPosition = pos >= 0 ? pos : length + pos;

      // Inserta el reno si está en una posición válida
      if (renoPosition >= 0 && renoPosition < length) {
        track =
          track.slice(0, renoPosition) + "r" + track.slice(renoPosition + 1);
      }

      // Devuelve la pista con el número del carril
      return `${offset}${track} /${index + 1}`;
    })
    .join("\n");
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
