let my_key = config.api_key;

const cargarInfoApi = async() => {

    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?language=es&api_key=' + my_key);

        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let movies = '';
            datos.results.forEach(movie => {
                movies = movies + `
                <div class="apiList-item">
                    <img class="masvistos-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    <h3 class="cartoontitle">${movie.title}</h3>
                </div>
                    
                `;
            });

            document.getElementById('movieList').innerHTML = movies;

        } else if(respuesta.status === 401){
            console.log("Key incorrecta");
        } else if(respuesta.status === 404){
            console.log("La informacion solicitada no esta disponible actualemente");
        } else{
            console.log("Ocurrio un error inesperado");
        }

        
    } catch(error){
        console.log(error);
    }
}

cargarInfoApi();