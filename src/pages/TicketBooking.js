import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import exhibitionData from '../data/exhibitionData';
import ticketOptions from '../data/ticketOptions';

import '../styles/ticketBooking.css';

export default function TicketBooking() {

  const { id } = useParams();

  const exhibition = exhibitionData.find(
    (item) => item.id === Number(id)
  );


  const [counts, setCounts] = useState(
    ticketOptions.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );


  const increaseCount = (id) => {

    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));

  };


  const decreaseCount = (id) => {

    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 0),
    }));

  };


  const totalCount = ticketOptions.reduce(
    (total, item) => total + counts[item.id],
    0
  );


  const totalPrice = ticketOptions.reduce(
    (total, item) =>
      total + item.price * counts[item.id],
    0
  );


  if (!exhibition) {

    return (
      <main className="booking-page">

        <div className="booking-inner">

          <p>전시 정보를 찾을 수 없습니다.</p>

          <Link to="/ticket">
            티켓 목록으로 돌아가기
          </Link>

        </div>

      </main>
    );

  }


  return (
    <main className="booking-page">
       
      {/* 티켓 이미지 */}
      <section className="booking-ticket-visual">

        <img
          src={`${process.env.PUBLIC_URL}/images/ticket/eternal-nature-ticket.png`}
          alt="ETERNAL NATURE 티켓"
        />

      </section>


      <div className="booking-inner">

        {/* 뒤로가기 */}
        <Link
          to="/ticket"
          className="booking-back"
        >
          ← 티켓 목록으로
        </Link>


  

        {/* 수량 선택 */}
        <section className="booking-options">

          <div className="booking-section-title">

            <span className="material-symbols-outlined">
              person
            </span>

            <h3>
              인원과 수량을 선택하세요.
            </h3>

          </div>


          <div className="booking-option-list">

            {ticketOptions.map((item) => (

              <div
                className="booking-option"
                key={item.id}
              >

                <div className="booking-option-info">

                  <h4>
                    {item.name}
                  </h4>


                  <div className="booking-price">

                    <del>
                      {item.originalPrice.toLocaleString()}원
                    </del>

                    <strong>
                      {item.price.toLocaleString()}원
                    </strong>

                  </div>

                </div>


                <div className="booking-option-right">

                  <div className="booking-counter">

                    <button
                      type="button"
                      onClick={() => decreaseCount(item.id)}
                      disabled={counts[item.id] === 0}
                    >
                      −
                    </button>

                    <span>
                      {counts[item.id]}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseCount(item.id)}
                    >
                      +
                    </button>

                  </div>


                  <strong className="booking-item-total">

                    {(item.price * counts[item.id])
                      .toLocaleString()}원

                  </strong>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* 결제 금액 */}
        <section className="booking-summary">

          <div className="booking-summary-row">

            <span>
              총 수량
            </span>

            <strong>
              {totalCount}매
            </strong>

          </div>


          <div className="booking-summary-row total">

            <span>
              총 결제금액
            </span>

            <strong>
              {totalPrice.toLocaleString()}원
            </strong>

          </div>


          <div className="booking-bottom">

            <div className="booking-notice">

              <span className="material-symbols-outlined">
                check_circle
              </span>

              <p>
                예매 전 반드시 확인해주세요!
              </p>

            </div>


            <button
              type="button"
              className="booking-payment-button"
              disabled={totalCount === 0}
            >
              결제하기
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}
