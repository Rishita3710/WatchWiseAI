import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();

    const getUpcommingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addUpcommingMovies(json.results));
    };

    useEffect(() => {
        getUpcommingMovies();
    }, []);
}

export default useUpcommingMovies;