
const Argument = {
    movie: 'movie',
    videos: 'videos',
    photos: 'photos',
    search: 'search',
    nowPlaying: 'nowPlaying',
    topRated: 'topRated',
    popular: 'popular',
}

 function chooseURL(argument) {
        const baseURL = 'https://api.themoviedb.org';
        const apiKey = '82494d16f78e0aa1a4a03a103791b923';
        let path, queryParams;

        switch (argument.type) {
            case Argument.movie:
               path = `/3/movie/${argument.id}`;
               queryParams = { api_key: apiKey };
               break;
            case Argument.videos:
               path = `/3/movie/${argument.id}/videos`;
               queryParams = { api_key: apiKey };
               break;
            case Argument.photos:
                path = `/3/movie/${argument.id}/images`;
               queryParams = { api_key: apiKey };
               break;
            case Argument.search:
                path = '/3/search/movie';
                queryParams = { api_key: apiKey, query: argument.query };
                break;
            case Argument.nowPlaying:
                path = '/3/movie/now_playing';
                queryParams = { api_key: apiKey, page: argument.page };
                break;
            case Argument.topRated:
                path = '/3/movie/top_rated';
                queryParams = { api_key: apiKey, page: argument.page };
                break;
            case Argument.popular:
                path = '/3/movie/popular';
                queryParams = { api_key: apiKey, page: argument.page };
                break;
            default:
                return null;
        }

        const urlPlusPath = new URL(path, baseURL).toString();
        const query = new URLSearchParams(queryParams).toString();
        const fullUrl = `${urlPlusPath}?${query}`;

        return fullUrl;
    }

    