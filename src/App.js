import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import api from "./api/url";


function App() {
    const setPosts = useStoreActions((actions) => actions.setPosts);
    const { data, fetchError, isLoading } = useAxiosFetch(api);

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])

    return (
        <div className="App">
            <Header title="React-Blog-Posts"
                fetchError={fetchError}
                isLoading={isLoading}
            />
            <Nav />

            {/* Main content area */}
            <Outlet />

            <Footer />
        </div>
    );
}

export default App;


