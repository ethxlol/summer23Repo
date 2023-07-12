// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
	const select = document.getElementById('genres');

	for (const genre of genres) {
		let option = document.createElement('option');
		option.value = genre.id;
		option.text = genre.name;
		select.appendChild(option);
	}
};

// Create HTML for each actor
const createActorElement = (actor) => {
	const actorDiv = document.createElement('div');
	actorDiv.setAttribute('class', 'actor');

	const actorName = document.createElement('p');
	actorName.innerHTML = actor.name;
	actorDiv.appendChild(actorName);

	const characterName = document.createElement('p');
	characterName.innerHTML = `as ${actor.character}`;
	actorDiv.appendChild(characterName);

	return actorDiv;
};

// Create HTML for movie cast container
const createCastContainer = (cast) => {
	const castContainer = document.createElement('div');
	castContainer.setAttribute('id', 'movieCast');

	// Only display up to 5 actors
	const actorsToDisplay = cast.slice(0, 5);
	for (const actor of actorsToDisplay) {
		const actorElement = createActorElement(actor);
		castContainer.appendChild(actorElement);
	}

	return castContainer;
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
	const selectedGenre = document.getElementById('genres').value;
	return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
	const btnDiv = document.getElementById('likeOrDislikeBtns');
	btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
	const moviePosterDiv = document.getElementById('moviePoster');
	const movieTextDiv = document.getElementById('movieText');
	moviePosterDiv.innerHTML = '';
	movieTextDiv.innerHTML = '';
};

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
	clearCurrentMovie();
	showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
	clearCurrentMovie();
	showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
	const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

	const posterImg = document.createElement('img');
	posterImg.setAttribute('src', moviePosterUrl);
	posterImg.setAttribute('id', 'moviePoster');

	return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
	const titleHeader = document.createElement('h1');
	titleHeader.setAttribute('id', 'movieTitle');
	titleHeader.innerHTML = title;

	return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
	const overviewParagraph = document.createElement('p');
	overviewParagraph.setAttribute('id', 'movieOverview');
	overviewParagraph.innerHTML = overview;

	return overviewParagraph;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
	const randomIndex = Math.floor(Math.random() * movies.length);
	const randomMovie = movies[randomIndex];
	return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo, cast) => {
	const moviePosterDiv = document.getElementById('moviePoster');
	const movieTextDiv = document.getElementById('movieText');
	const movieInfoDiv = document.getElementById('movieInfo');
	const likeBtn = document.getElementById('likeBtn');
	const dislikeBtn = document.getElementById('dislikeBtn');

	// Create HTML content containing movie info
	const moviePoster = createMoviePoster(movieInfo.poster_path);
	const titleHeader = createMovieTitle(movieInfo.title);
	const overviewText = createMovieOverview(movieInfo.overview);
	const castContainer = createCastContainer(cast);

	// Append title, poster, and overview to page
	moviePosterDiv.appendChild(moviePoster);
	movieTextDiv.appendChild(titleHeader);
	movieTextDiv.appendChild(overviewText);
	movieInfoDiv.appendChild(castContainer);

	showBtns();
	likeBtn.onclick = likeMovie;
	dislikeBtn.onclick = dislikeMovie;
};
