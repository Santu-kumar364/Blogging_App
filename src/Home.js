import { useStoreState } from 'easy-peasy';
import Feed from './Feed';
 
const Home = ({ fetchError, isLoading }) => {
    const searchResult = useStoreState((state) => state.searchResult)
    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className='statusMsg'>No posts to display.</p>)}

        </main>
    )
}

export default Home;
