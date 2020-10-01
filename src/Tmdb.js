const API_KEY= '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE= 'https://api.themoviedb.org/3';


/*
-originais netflix
-recomendados
-mais votados top rated
-ação
-comedia
-terror
-romance
-documentários
-animção
*/

const basicFetch = async (endepoint) => {
    const req = await fetch(`${API_BASE}${endepoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Os mais recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Os mais votados',
                items: await basicFetch(`/movie/top_rated??language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Acção',
                items: await basicFetch(`/discover/movie?with_genres=28&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await basicFetch(`/discover/movie?with_genres=16&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'war',
                title: 'Guerra',
                items: await basicFetch(`/discover/movie?with_genres=10752&?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'music',
                title: 'Música',
                items: await basicFetch(`/discover/movie?with_genres=10402&?language=pt-pt&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            // eslint-disable-next-line default-case
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-pt&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-pt&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}