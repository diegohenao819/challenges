function drawRace(indices, length) {
  let tracks = [];

  for (let indice of indices) {
    tracks.push("~".repeat(length));
  }

  for (let i = 0; i < indices.length; i++) {
    if (indices[i] === 0) {
      tracks[i] += ` /${i + 1} ` + "\n" ;
    } else {
      let trackArray = tracks[i].split("");
      trackArray.splice(indices[i], 0, "r");

      tracks[i] = trackArray.join("") + ` /${i + 1}` + `${i !== indices.length-1 ? "\n" : ""}`;
    }
  }

  let add = 0;
  for (let i = indices.length - 1; i >= 0; i--) {
    let spaces = tracks[i].split("");
    console.log("i: ", i, "indices.length: ", indices.length - 1);
    spaces.unshift(" ".repeat(add));

    add++;

    tracks[i] = spaces.join("");
  }

  console.log((tracks).join(""));
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
