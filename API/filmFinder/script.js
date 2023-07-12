const tmdbKey = 'b0acdf143028b51fa8af6ab55b9246b0';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
	const genreRequestEndpoint = '/genre/movie/list';
	const requestParams = `?api_key=${tmdbKey}`;
	const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			const genres = jsonResponse.genres;
			// console.log(genres) // for bugfix genres var
			// console.log(jsonResponse) // for bugfix jsonResponse var
			return genres;
		}
	} catch (error) {
		console.log(error);
	}
};

const getMovies = async () => {
	const selectedGenre = getSelectedGenre();
	const discoverMovieEndpoint = '/discover/movie';
	const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
	const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			// console.log(jsonResponse); // for bugfix jsonResponse
			const movies = jsonResponse.results;
			// console.log(movies); // for bugfix movies
			return movies;
		}
	} catch (error) {
		console.log(error);
	}
};

// getMovies(); // for bugfix to check responses

const getMovieInfo = async (movie) => {
	const movieId = movie.id;
	const movieEndpoint = `/movie/${movieId}`; // this serves as a placeholder for the movies id
	const requestParams = `?api_key=${tmdbKey}`;
	const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			const movieInfo = jsonResponse;
			return movieInfo;
		}
	} catch (error) {
		console.log(error);
	}
};

const movieCastInfo = async (movie) => {
	const movieId = movie.id;
	const castEndpoint = `/movie/${movieId}/credits`;
	const requestParams = `?api_key=${tmdbKey}`;
	const urlToFetch = `${tmdbBaseUrl}${castEndpoint}${requestParams}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			const movieCast = jsonResponse.cast;
			return movieCast;
		}
	} catch (error) {
		console.log(error);
	}
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
	const movieInfo = document.getElementById('movieInfo');
	if (movieInfo.childNodes.length > 0) {
		clearCurrentMovie();
		const movies = await getMovies();
		const randomMovie = getRandomMovie(movies);
		const info = await getMovieInfo(randomMovie);
		const cast = await movieCastInfo(randomMovie);
		displayMovie(info, cast);
	}
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
