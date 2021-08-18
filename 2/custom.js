function words (d = 0) {
    var n = ' товар';
    if (d == 1 || d == 21 || d == 31 || d == 41) return (d + n);
    if (d >= 2 && d <= 4 || d >= 22 && d <= 24 || d >= 32 && d <= 34 || d >= 42 && d <= 44 ) return d + n + 'а';
    if (d >= 5 && d <= 20 || d >= 25 && d <= 30 || d >= 35 && d <= 40 || d >= 45 && d <= 50);
    return d + n + 'ов'; 
    
}

var sentence1 = '("' + words(22) + ', а не ' + words(12) + '")' ;
var sentence2 = '("' + words(30) + ', а не ' + words(4) + '")' ;

console.log(sentence1)
console.log(sentence2)
