import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/about.css';


export default function About() {

  return (
    <main className="about-page">

      {/* Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about/about-hero.jpg)`,
        }}
      >
        <div className="about-hero-inner">

          <h1>ABOUT</h1>

          <h2>
            예술, 기술, 그리고 당신이 만나는 새로운 세계
          </h2>

          <p>
            아르떼뮤지엄은 몰입형 미디어아트를 통해 일상의 경계를
            <br />
            넘어서는 특별한 경험을 선물합니다.
          </p>

        </div>
      </section>


      {/* Story */}
      <section className="about-story">

        <div className="about-story-inner">

          <div className="about-story-text">

            <span className="about-label">
              Story of ARTE MUSEUM
            </span>

            <h2>
              예술이 일상이 되는 공간
            </h2>

            <h3>
              빛·소리·향을 활용한 몰입형 미디어아트
              <br />
              끝없이 확장되는 ETERNAL NATURE
              <br />
              지역의 자연과 문화유산을 반영한 공간 경험
            </h3>

            <p>
              아르떼뮤지엄은 디지털 기술을 통해 자연과 예술, 사람을 연결하고
              새로운 감각의 몰입 경험을 제안하는 미디어아트 뮤지엄입니다.
              우리는 예술이 특별한 순간에만 존재하는 것이 아니라,
              누구의 일상 속에서도 살아 숨 쉴 수 있다고 믿습니다.
              ETERNAL NATURE를 중심으로 자연의 시간과 감각을 새로운 공간 경험으로
              확장합니다. 각 지역의 자연과 문화적 특성을 반영한 작품을 통해,
              방문자가 단순히 전시를 보는 것을 넘어 작품 속에 머무르고
              경험하도록 합니다.
            </p>

          </div>


          <div className="about-story-image">

            <img
              src={`${process.env.PUBLIC_URL}/images/about/brand-story.jpg`}
              alt="ARTE MUSEUM Story"
            />

          </div>

        </div>

      </section>


      {/* Our Value */}
      <section
        className="about-value"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about/value-bg.jpg)`,
        }}
      >

        <div className="about-value-inner">

          <span className="about-label light">
            Our Value
          </span>

          <h2>
            빛으로 확장된 자연,
            <br />
            공간이 만들어내는 새로운 현실
          </h2>


          <div className="about-value-grid">

            <div className="about-value-item">

              <div className="about-value-icon">
                <span className="material-symbols-outlined">
                  view_in_ar
                </span>
              </div>

              <h3>IMMERSIVE</h3>

              <p>
                온전히 빠져드는
                <br />
                몰입형 경험
              </p>

            </div>


            <div className="about-value-item">

              <div className="about-value-icon">
                <span className="material-symbols-outlined">
                  all_inclusive
                </span>
              </div>

              <h3>BOUNDLESS</h3>

              <p>
                경계를 넘나드는
                <br />
                예술의 확장
              </p>

            </div>


            <div className="about-value-item">

              <div className="about-value-icon">
                <span className="material-symbols-outlined">
                  nest_eco_leaf
                </span>
              </div>

              <h3>SUSTAINABLE</h3>

              <p>
                자연과 공존하는
                <br />
                예술의 미래
              </p>

            </div>


            <div className="about-value-item">

              <div className="about-value-icon">
                <span className="material-symbols-outlined">
                  groups
                </span>
              </div>

              <h3>FOR EVERYONE</h3>

              <p>
                누구나 향유할 수 있는
                <br />
                열린 예술
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Global */}
      <section
        className="about-global"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about/global-bg.jpg)`,
        }}
      >
        <div className="about-global-inner">

          <div className="about-global-text">

            <span className="about-label light">
              Global ARTE MUSEUM
            </span>

            <h2>
              전 세계로 확장되는 아르떼뮤지엄
            </h2>

            <p>
              아르떼뮤지엄은 제주를 시작으로 전 세계 주요 도시에서
              <br />
              동시대의 감각을 담는 전시를 선보이고 있습니다.
            </p>

            <Link
              to="/exhibition"
              className="about-global-button"
            >
              전시관 보러가기
            </Link>

          </div>


          <div className="about-global-map">

            <img
              src={`${process.env.PUBLIC_URL}/images/about/world-map.png`}
              alt="ARTE MUSEUM Global Locations"
            />

          </div>

        </div>
      </section>

    </main>
  );
}