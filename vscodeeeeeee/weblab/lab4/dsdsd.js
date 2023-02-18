let movies = [ 
    { 
        "name": "Фокус", 
        "genre": "Драма", 
        "Grade": 7.1 
    }, 
    { 
        "name": "Алладин", 
        "genre": "Фэнтези", 
        "Grade": 7.3 
    }, 
    { 
        "name": "Я - легенда", 
        "genre": "Боевик", 
        "Grade": 7.9
    } 
] 
function avg(movies){ 
    let sum = 0; 
    for (let i = 0; i < movies.length; i++) { 
        sum += movies[i]['Grade']; 
    } 
    return sum / movies.length; 
} 
 
let iron_man = { 
    "name": "В погоне за счастьем", 
    "genre": "Драма", 
    "Grade": 8.3 
} 
 
movies.push(iron_man) 
 
 
function write(i, movies){ 
    return movies[i]; 
} 
 
for (let i = 0; i < movies.length; i++) { 
    let obj = write(i, movies); 
    document.write("<h5>Movie: " + obj["name"] + "</h5>"); 
    document.write("<h5>Genre: " + obj["genre"] + "</h5>"); 
    document.write("<h5>Grade: " + obj["Grade"] + ""); 
    document.writeln("") 
} 
 
 
document.write("<h5>Average Grade: " + avg(movies) + "</h5>")
  