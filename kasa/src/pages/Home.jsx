import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

import imagebanner from '../assets/fond-banner.png';

function Home() {
    return (
        <>
            <Header />
            <Banner
                imgBanner={imagebanner}
                textBanner="Chez vous, partout et ailleurs"
            ></Banner>
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
