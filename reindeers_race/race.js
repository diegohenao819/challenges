function drawRace(indices, length) {
  return indices
    .map((pos, index) => {
      // Determine the offset for the isometric view
      const offset = " ".repeat(indices.length - index - 1);

      // Generate the track filled with snow
      let track = "~".repeat(length);

      // Calculate the actual position of the reindeer
      const renoPosition = pos >= 0 ? pos : length + pos;

      // Place the reindeer if the position is valid and not 0
      if (pos !== 0 && renoPosition >= 0 && renoPosition < length) {
        track =
          track.slice(0, renoPosition) + "r" + track.slice(renoPosition + 1);
      }

      // Combine offset, track, and lane number
      return `${offset}${track} /${index + 1}`;
    })
    .join("\n");
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
