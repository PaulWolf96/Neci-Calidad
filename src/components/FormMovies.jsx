const FormMovies = () => {
    return (
        <form>
            <label htmlFor="searchMovie">Buscar una Película: </label>
            <input type="text" id="searchMovie" placeholder="Ingrese una Película" />
            <button type='submit'>Buscar</button>

            <br />

            

        </form>
    );
}

export default FormMovies;