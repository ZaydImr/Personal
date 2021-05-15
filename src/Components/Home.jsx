import React from 'react'
import MyLove from '../WithMyLove.png'
import Navbar from './Navbar';

const Home = () => {
      return (
            <div className="home">
                  <Navbar />
                  <div className="container">
                        <div className="home-content">
                              
                        </div>
                        <div className="home-image">
                              <img src={MyLove} />
                        </div>
                  </div>
                  <div className="back"></div>
            </div>
      )
}

export default Home
