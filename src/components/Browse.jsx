import Header from './Header'
import { API_OPTION } from '../utils/constants'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(Store => Store.gpt.showGptSearch);
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcommingMovies();
  
  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch/> :
        <> 
      <MainContainer/>
      <SecondaryContainer /> </>
      }
      

    </div>
  )
}

export default Browse
