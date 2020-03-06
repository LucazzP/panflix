import React from 'react'

import { BannerWrapper, BannerContainer, MoviesContainer, MovieCard, MoviePreview, MovieDesc } from './styled';

const Banner = () => {
  const oi = ["oi", "oi"];
  return (
    <BannerWrapper id="banner-wrap">
      <BannerContainer id="banner">
        <MoviesContainer id="movies">
          <MovieCard className="left">
            <MoviePreview>
              <iframe title="Starwars" src="https://www.youtube.com/embed/Q1qZ6oLV3hg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </MoviePreview>
            <MovieDesc>
              <div id="text">
                <h3>StarWars IX</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div id="btn">
                <button>Assista agora</button>
              </div>
            </MovieDesc>
          </MovieCard>
          <MovieCard className="middle">
            <MoviePreview>
              <iframe title="Starwars" src="https://www.youtube.com/embed/Q1qZ6oLV3hg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </MoviePreview>
            <MovieDesc>
              <div id="text">
                <h3>StarWars IX</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div id="btn">
                <button>Assista agora</button>
              </div>
            </MovieDesc>
          </MovieCard>
          <MovieCard className="right">
            <MoviePreview>
              <iframe title="Starwars" src="https://www.youtube.com/embed/Q1qZ6oLV3hg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </MoviePreview>
            <MovieDesc>
              <div id="text">
                <h3>StarWars IX</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div id="btn">
                <button>Assista agora</button>
              </div>
            </MovieDesc>
          </MovieCard>
        </MoviesContainer>
      </BannerContainer>
    </BannerWrapper>
  )
}

export default Banner;
