import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            {/* Banner */}
            <img
             className='home__image'
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt=''
            />
            {/* Product with id, title, price rating and image */}
            <div className='home__row'>
                <Product
                    id = '10001'
                    title = 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                    price = {837.88}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
                />
                <Product
                    id = '10002'
                    title = 'Apple iPhone 11 Pro (64GB) - Space Grey'
                    price = {99600.22}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product
                    id = '12434212'
                    title = 'Apple AirPods Pro'
                    price = {21349.00}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg'
                />
                <Product
                    id = '12434212'
                    title = 'The Couch Cell Manual Recliner in Brown'
                    price = {12799.96}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71-%2BTagxvxL._SL1500_.jpg'
                />
                <Product
                    id = '12434212'
                    title = 'Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)'
                    price = {2913.00}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/61Z4fxBfkVL._SL1000_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product
                    id = '12434212'
                    title = 'Sony Bravia 138.8 cm (55 Inches) 4K UHD Certified Android LED TV KD-55X7500F (Black) (2018 model)'
                    price = {110000.00}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81hjZbNL7EL._SL1500_.jpg'
                />
            </div>
        </div>
    )
}

export default Home;
