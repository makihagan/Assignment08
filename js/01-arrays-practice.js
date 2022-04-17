//STEP 1
let favMovies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa"];
console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Pulp Fiction";
// movies[1] = "Forrest Gump";
// movies[2] = "E.T.";
// movies[3] = "50 First Date";
// movies[4] = "Nausicaa";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "Pulp Fiction";
// movies[1] = "Forrest Gump";
// movies[2] = "E.T.";
// movies[3] = "50 First Date";
// movies[4] = "Nausicaa";
// let addMovies = movies.push("Spiderman No Way Home");
// // -- since push() will only return the length of array,
// // -- it will also overwrite the array to length
// // -- but this way, I can add with push and keep the array
// console.log(movies.length);
// console.log(movies);

//STEP 4
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa"];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// for (let i in movies) {
//     if (movies.hasOwnProperty(i)) {
//         console.log(movies[i])
//     }
// }

//STEP 6
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// for (let i of movies) {
//     console.log(i)
// }

//STEP 7
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }

//STEP 8
// // -- I wasn't sure if you wanted us to display 
// // -- only 3 of 7 movies like the example coded to 
// // -- so I purposely display only 3 out of 7 movies
// // -- from the array here.

// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// console.log('Movies I like:');
// console.log('');
// for (let i = 0; i < 3; i++) {
//         console.log(movies[i]);
// }
// console.log('...');
// console.log('');

// console.log('Movies I regret watching:');
// console.log('');
// for (let i of leastFavMovies) {
//     console.log(i);
// }
// console.log('...');

//STEP 9
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse().sort());

//STEP 10
// // -- I copied only arrays from Step 9
// // -- So here, reverse and sort would NOT be applied...
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.pop());

// // -- in case you want the result to be from reversed and sorted;
// console.log('')
// console.log('Result with reversed and sorted list:')
// movies.reverse().sort();
// console.log(movies.pop());

//STEP 11
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.shift());

// // -- in case you want the result to be from reversed and sorted;
// console.log('')
// console.log('Result with reversed and sorted list:')
// movies.reverse().sort();
// console.log(movies.shift());

//STEP 12
// // -- I didn't understand this question very well...
// // -- so I broke it down...
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies);
// // -- Programmatically retrieve the least favorite movies???
// let anotherMovieArray = movies.slice(7, 10);
// // -- indiced...?
// for (let i = 0; i < anotherMovieArray.length; i++) {
//     console.log(`${i + 1}. ${anotherMovieArray[i]}`);
// }
// console.log('');
// // -- then programmatically add my fav movies???
// anotherMovieArray = anotherMovieArray.concat(movies.slice(0, 7));
// // -- then indiced again???
// for (let i = 0; i < anotherMovieArray.length; i++) {
//     console.log(`${i + 1}. ${anotherMovieArray[i]}`);
// }

//STEP 13
// let movies = [["Pulp Fiction", 1],["Forest Gump", 2], ["E.T.", 3], ["50 First Date", 4], ["Nausicaa", 5]];
// movies.forEach((movieRank) => {
//     let title = movieRank.filter((title) => {
//             return typeof title === 'string'
//         })
//         console.log(title);
// })

//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
// console.log('Employees:')
// console.log('');
// let showEmployee = function (i) {
//     employees.forEach((employee) => {
//         console.log(employee);
//         i++
//     })
// }
// showEmployee();

//STEP 15
// let testData = [58, "abcd", true, null, false, 0];
// let filterValue = testData.filter(function (item) {
//     return (item !== false) && (item !== null) && (item !== 0) && (item !== '');
// })
// console.log(filterValue);

//STEP 16
// let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let randomItem = () => {
//     let item = items[items.length * Math.random() | 0];
//     console.log(item);
// }
// randomItem();

//STEP 17
// let nums = [5, 42, 33, 9, 25, 167];
// let largestNum = () => {
//     let max = Math.max(...nums);
//     console.log(max);
// }
// largestNum();