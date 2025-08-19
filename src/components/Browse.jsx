import Header from './Header'
import { API_OPTION } from '../utils/constants'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
   useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />

    </div>
  )
}

export default Browse
