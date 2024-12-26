const toRna = (letters) => {
    let combinations = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    }

    let result = '';

    for (let letter of letters){
        result += combinations[letter];
    }

    console.log(result);
    return result;
};


toRna('G');
toRna('ACGTGGTCTTAA');

