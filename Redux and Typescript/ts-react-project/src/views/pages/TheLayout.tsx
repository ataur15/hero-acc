import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './common/Main';

const TheLayout = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default TheLayout;