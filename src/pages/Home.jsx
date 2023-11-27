import React from 'react';
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default Home;