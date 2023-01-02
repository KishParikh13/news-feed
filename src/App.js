import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?pageSize=3&country=us&apiKey=206d2cf0da194bd1a4ede7603fe99b22')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFeaturedArticles(data.articles)
      });


    fetch('https://newsapi.org/v2/top-headlines?pageSize=10&country=us&apiKey=206d2cf0da194bd1a4ede7603fe99b22')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setLatestArticles(data.articles)
    });
  }, []);

  return (
    <div className="">
      <main className="main-wrapper">
        <div className="padding-section-medium">
          <div className="container-large hide">
            <div className="header20_component">
              <div className="header20_image-wrapper">
                <img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg" loading="lazy" alt="" />
              </div>
              <div id="" className="header20_content">
                <div className="margin-bottom margin-small">
                  <h1 className="heading-style-h1">The world&#x27;s news in one place</h1>
                </div>
                <p className="text-size-medium">Browse the latest articles and updates across several topics. Stay up to date by joining our email list.</p>
                <div className="margin-top margin-medium">
                  <div className="header20_form_component w-form">
                    <form className="header20_form">
                      <input type="email" className="form_input max-width-full" maxLength="256" name="email" data-name="Email 3" placeholder="Enter your email" id="email" required=""></input>
                      <a className="button border-none">Sign up</a>
                    </form>
                    <div className="text-size-tiny">By clicking Sign Up you&#x27;re confirming that you agree with our <a href="#" className="text-link">Terms and Conditions</a>.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-section-medium">
            <div className="container-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="max-width-large">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">Blog</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2">Featured articles</h2>
                  </div>
                  <div>
                    <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                </div>
              </div>
              <div className="blog40_component">
                <div className="blog40_list-wrapper">
                  <div className="blog40_grid">
                    { featuredArticles.length > 0 && featuredArticles.map((article, index) => {
                      return (
                        <div key={index} className="blog40_item">
                          <a href={article.url} className="blog40_item-link">
                            <div className="blog40_image-wrapper">
                              <img src={article.urlToImage} loading="lazy" alt="" className="blog40_image" />
                            </div>
                            <div className="blog40_item-content">
                              <div className="blog40_item-content-top">
                                <div className="blog40_meta-wrapper">
                                  <div className="blog40_category">
                                    <div className="text-size-small">{article.source.name}</div>
                                  </div>
                                  <div className="text-size-small text-inline">{article.publishedAt}</div>
                                </div>
                                <div className="blog40_title-wrapper">
                                  <h3 className="heading-style-h5">{article.title}</h3>
                                </div>
                                <div className="text-size-regular">{article.description}</div>
                              </div>
                              <div className="blog40_button-wrapper">
                                <div className="button is-link is-icon">
                                  <div>Read more</div>
                                  <div className="icon-embed-xxsmall">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="margin-top margin-xlarge">
                  <div className="blog40_button-row">
                    <a href="#" className="button is-secondary">View all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-section-medium">
            <div className="container-large ">
              <div className="margin-bottom margin-xxlarge">
                <div className="max-width-large">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">Blog</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2">Recent News</h2>
                  </div>
                  <div>
                    <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                </div>
              </div>
              <div className="blog40_component">
                <div className="blog40_list-wrapper">
                  <div className="blog40_list">
                    { latestArticles.length > 0 && latestArticles.map((article, index) => {
                   return (
                   <div key={index} className="blog40_list-item">
                   <a href={article.url} className="blog40_list-item-link">
                     <div className="blog40_image-wrapper">
                       <img src={article.urlToImage} loading="lazy" alt="" className="blog40_image" />
                     </div>
                     <div className="blog40_item-content">
                       <div className="blog40_item-content-top">
                         <div className="blog40_meta-wrapper">
                           <div className="blog40_category">
                             <div className="text-size-small">{article.source.name}</div>
                           </div>
                           <div className="text-size-small text-inline">{article.publishedAt}</div>
                         </div>
                         <div className="blog40_title-wrapper">
                           <h3 className="heading-style-h5">{article.title}</h3>
                         </div>
                         <div className="text-size-regular">{article.description}</div>
                       </div>
                       <div className="blog40_button-wrapper">
                         <div className="button is-link is-icon">
                           <div>Read more</div>
                           <div className="icon-embed-xxsmall"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                           </svg></div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
