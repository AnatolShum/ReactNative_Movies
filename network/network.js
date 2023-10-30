
    export class Network {
       static Argument = {
            movie: 'movie',
            videos: 'videos',
            photos: 'photos',
            search: 'search',
            nowPlaying: 'nowPlaying',
            topRated: 'topRated',
            popular: 'popular',
        }

        static createURL(argument) {
            const baseURL = 'https://api.themoviedb.org';
            const apiKey = '82494d16f78e0aa1a4a03a103791b923';
            let path, queryParams;
    
            switch (argument.type) {
                case Network.Argument.movie:
                   path = `/3/movie/${argument.id}`;
                   queryParams = { api_key: apiKey };
                   break;
                case Network.Argument.videos:
                   path = `/3/movie/${argument.id}/videos`;
                   queryParams = { api_key: apiKey };
                   break;
                case Network.Argument.photos:
                    path = `/3/movie/${argument.id}/images`;
                   queryParams = { api_key: apiKey };
                   break;
                case Network.Argument.search:
                    path = '/3/search/movie';
                    queryParams = { api_key: apiKey, query: argument.query };
                    break;
                case Network.Argument.nowPlaying:
                    path = '/3/movie/now_playing';
                    queryParams = { api_key: apiKey, page: argument.page };
                    break;
                case Network.Argument.topRated:
                    path = '/3/movie/top_rated';
                    queryParams = { api_key: apiKey, page: argument.page };
                    break;
                case Network.Argument.popular:
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

        static imageURL(path) {
            const baseURL = 'https://image.tmdb.org/t/p/w500';
            return baseURL + path
        }

        static fetchData(argument, callback) {
            const url = Network.createURL(argument);

            fetch(url)
            .then(response => response.json())
            .then(data => callback(null, data))
            .catch(error => callback(error, null));
        }

    }