import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import exhibitionData from '../data/exhibitionData';
import '../styles/exhibition.css';

export default function Exhibition() {

  const [selectedLocation, setSelectedLocation] = useState('ALL');
  const [searchText, setSearchText] = useState('');

  const locations = ['ALL', '제주', '부산', '강릉', '여수'];

  const filteredData = exhibitionData.filter((item) => {

    const locationMatch =
      selectedLocation === 'ALL' ||
      item.location === selectedLocation;

     const searchMatch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.subtitle.includes(searchText) ||
      item.location.includes(searchText);

    return locationMatch && searchMatch;
  });

  return (
 <main className="exhibition-page">

    {/* Hero */}
    <section
      className="exhibition-hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/exhibition/exhibition-hero.jpg)`
      }}
    >
      <div className="exhibition-hero-inner">
        <h2>EXHIBITION</h2>
        <p>빛과 소리로 완성된 새로운 세계를 만나보세요.</p>
      </div>
    </section>


    {/* Exhibition List */}
    <section className="exhibition-list-section">
      <div className="exhibition-list-inner">

        {/* 지역 필터 */}
        <div className="location-filter">

          {locations.map((location) => (
            <button
              key={location}
              className={
                selectedLocation === location
                  ? 'location-filter-button active'
                  : 'location-filter-button'
              }
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </button>
          ))}

        </div>


        {/* 검색 */}
        <div className="exhibition-search">
          <input
            type="text"
            placeholder="전시명 또는 키워드를 입력하세요."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <span className="material-symbols-outlined">
            search
          </span>
        </div>


        {/* 현재 전시 수 */}
        <p className="exhibition-count">
          현재 전시 {filteredData.length}개
        </p>


        {/* 카드 */}
        <div className="exhibition-grid">

          {filteredData.map((item) => (

            <div
              className="exhibition-list-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <div className="exhibition-list-meta">
                <p>{item.subtitle}</p>
                <p>{item.period}</p>
              </div>

              <p className="exhibition-list-location">
                {item.location}
              </p>


              <Link
                to={`/exhibition/${item.id}`}
                className="exhibition-detail-link"
              >
                View Details
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>

  </main>
);
}
