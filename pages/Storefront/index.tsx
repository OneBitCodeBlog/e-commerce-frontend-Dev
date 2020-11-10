import React from 'react';
import Header from '../../components/shared/Header/StorefrontHeader';
import Footer from '../../components/shared/Footer/StorefrontFooter';

const Storefront: React.FC = () => {
    return(
        <div className="d-flex flex-column sticky-footer-wrapper">
            <Header />

            <div className="container flex-fill">
                <h2>Storefront</h2>
            </div>

            <Footer />
        </div>
    )
}

export default Storefront;