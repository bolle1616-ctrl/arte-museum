import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import exhibitionData from '../data/exhibitionData';
import locationData from '../data/locationData';

import '../styles/location.css';

export default function Location() {

  const [selectedLocation, setSelectedLocation] = useState('제주');
  const current = locationData[selectedLocation];
  const locationExhibitions = exhibitionData
    .filter((item) => item.location === selectedLocation)
    .slice(0, 3);

return (
  <main className="location-page">
    <section
      className="location-hero"
      style={{
        backgroundImage: `url(${current.hero})`,
      }}
    >
      <div className="location-hero-inner">

        <h1>LOCATION</h1>

        <h2>
          아르떼뮤지엄, 지금 경험할 도시를 선택하세요.
        </h2>

        <p>
          각 지역별 자연과 문화유산을 활용해 차별화된 컨셉과
          <br />
          작품들로 구성된 다양한 아르떼뮤지엄을 방문해보세요.
        </p>

      </div>
    </section>


    <div className="location-inner">
      <div className="location-tabs">

        {Object.keys(locationData).map((location) => (

          <button
            key={location}
            type="button"
            className={
              selectedLocation === location
                ? 'location-tab active'
                : 'location-tab'
            }
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>

        ))}

      </div>

      <section className="location-info-section">

        <div className="location-map">

          <img
            src={current.map}
            alt={`${selectedLocation} 아르떼뮤지엄 지도`}
          />

        </div>

        <div className="location-info">
          <h3>
            {current.title}
          </h3>

          <div className="location-info-item" id="directions">
            <strong>
              찾아오시는 길
            </strong>

            <p>
              {current.address}
            </p>
          </div>


          <div className="location-info-item">
            <strong id="hours">
              운영 시간
            </strong>

            <p>
              {current.hours}
            </p>

            <p>
              {current.lastEntry}
            </p>
          </div>


          <div className="location-info-item">
            <strong>
              문의
            </strong>

            <p>
              {current.phone}
            </p>
          </div>


          <a
            href="#none"
            className="location-direction-button"
          >
            <span className="material-symbols-outlined">
              location_on
            </span>
            길 찾기
          </a>

        </div>
      </section>
      
      <section className="location-exhibition">

        <h3>
          {selectedLocation}에서 만나는 전시
        </h3>


        <div className="location-exhibition-grid">

          {locationExhibitions.map((item) => (

            <article
              className="location-exhibition-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />


              <div className="location-exhibition-text">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.subtitle}
                </p>

                <span>
                  {item.location}
                </span>


                <Link
                  to={`/exhibition/${item.id}`}
                  className="location-view-button"
                >
                  View Details
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>

    </main>
  );
}
