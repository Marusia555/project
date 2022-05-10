'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("How many films have you watched?", "");
 
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN
    (personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films have you watched?", "");
    }
 },
 rememberMyFilms: function() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("one of the last movies I watched?", ""),
        b= prompt("how much do you rate it?", "");
  
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
        } else {
          console.log('error');
          i--;
        }
  } 
},
detectPersonalLevel: function () {
  if (personalMovieDB.count <10) {
    console.log('few films seen');
  }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('you are a classic spectator');
  }else if (personalMovieDB.count >= 30) {
    console.log('you are a cinephile');
  }else {
    console.log('Error');
  }
},
showMyDB: function(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
   },
   toggleVisibMyDB: function() {
     if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
     } else {
      personalMovieDB.privat = true;
     }
   },
   writeYourGenres: function() {
    for (let i = 1; i<= 3; i++) {
      let genre =  prompt(`your like movies genre ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
     
    }

    personalMovieDB.genres.forEach((item, i) => {
console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};
