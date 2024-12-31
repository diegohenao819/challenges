function practice (palabra){
    const match = palabra.match(/_([a-z]+\.[a-z0-9]+)/i)

    return match[1] || null
}


console.log(practice("_dimensions.pdf.hack2023"))