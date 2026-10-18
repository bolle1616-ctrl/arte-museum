import React, { useState } from 'react';
import exhibitionData from '../data/exhibitionData';
import '../styles/ticket.css';
import { Link } from 'react-router-dom';

export default function Ticket() {

  const [selectedLocation, setSelectedLocation] = useState('ALL');

  const locations = ['ALL', '제주', '부산', '강릉', '여수'];
  const filteredTickets =
    selectedLocation === 'ALL'
      ? exhibitionData
      : exhibitionData.filter(
          (item) => item.location === selectedLocation
        );

  return (
    <main className="ticket-page">

      <section
        className="ticket-hero"
        style={{
          backgroundImage:`url(${process.env.PUBLIC_URL}/images/ticket/ticket-hero.jpg)`,
        }}
      >

        <div className="ticket-hero-inner">

          <h1>TICKET</h1>

          <h2>
            원하는 지점을 선택해서 바로 구매하세요.
          </h2>

          <p>
            국내 최고의 몰입형 미디어아트 전시관
            아르떼뮤지엄으로 초대합니다!
          </p>

        </div>

      </section>


      <div className="ticket-inner">

        <div className="ticket-tabs">

          {locations.map((location) => (

            <button
              key={location}
              type="button"
              className={
                selectedLocation === location
                  ? 'ticket-tab active'
                  : 'ticket-tab'
              }
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </button>

          ))}

        </div>

        <section className="ticket-list">

          {filteredTickets.map((item) => (

            <article
              className="ticket-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />


              <div className="ticket-card-content">

                <h3>
                  {item.title}
                </h3>


                <div className="ticket-card-info">

                  <p>
                    {item.subtitle}
                  </p>

                  <span>
                    {item.period}
                  </span>

                </div>


                <p className="ticket-card-location">
                  {item.location}
                </p>


                <Link to={`/ticket/${item.id}`} className="ticket-book-button">
                  예매하기
                </Link>

              </div>

            </article>

          ))}

        </section>

      </div>

    </main>
  );

}
