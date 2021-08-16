function color (r = 0, g = 0, b = 0) {
    return '"rgb' + ( '(' + r + ',' + g + ',' + b + ')"' );
}

console.log(color(23, 100, 134));