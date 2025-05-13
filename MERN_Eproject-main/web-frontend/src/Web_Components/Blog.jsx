import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Blog() {
  return (
    <div>
      <Navbar />
      
      <section 
        className="hero-wrap hero-wrap-2 js-fullheight" 
        style={{ backgroundImage: "url('/web/images/bg_2.jpg')" }} 
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5">
              <h1 className="mb-3 bread">Blog</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a>
                </span> 
                <span>Blog <i className="ion-ios-arrow-forward"></i></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a 
                    href="blog-single.html" 
                    className="block-20" 
                    style={{ backgroundImage: "url('/web/images/image_${num}.jpg')" }}
                  ></a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div><a href="#">July. 14, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">Why Lead Generation is Key for Business Growth</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
