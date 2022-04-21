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
// movies.splice(2, 0, "Spiderman No Way Home");
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
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// console.log('Movies I like:');
// console.log('');
// for (let i = 0; i < movies.length; i++) {
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
// movies = movies.concat(leastFavMovies).reverse().sort();
// console.log('My Movie List - favorites and least favorites (reveresed and sorted order): ')
// console.log(movies);

//STEP 10
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies).reverse().sort();
// console.log('The last item in the array (reveresed and sorted order): ');
// console.log(movies.pop());

//STEP 11
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies).reverse().sort();
// console.log('The first item in the array (reveresed and sorted order): ');
// console.log(movies.shift());

//STEP 12
// let movies = ["Pulp Fiction", "Forrest Gump", "E.T.", "50 First Date", "Nausicaa", "Spiderman No Way Home", "The Holiday"];
// let leastFavMovies = ["Emoji Movie", "Hostel", "Bad Hair"];
// movies = movies.concat(leastFavMovies).reverse().sort();
// movies.splice(1, 1, "Demon Slayer");
// movies.splice(3, 1, "The Usual Suspects");
// movies.splice(5, 1, "The Conjuring");
// console.log('Removed my least favorites and switched with other my favorites: ');
// console.log(movies);

//STEP 13
// let movies = [["Pulp Fiction", 1],["Forest Gump", 2], ["E.T.", 3], ["50 First Date", 4], ["Nausicaa", 5]];
// movies.forEach((movieRank) => {
//     let title = movieRank.filter((title) => {
//             return typeof title === 'string'
//         })
//         console.log(title);
// })

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
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