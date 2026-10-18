import React, { useState } from 'react'
import { HeroLink, QuickLink, ViewAllLink, DetailLink, LocationLink, InstagramLink } from '../components/NavigationLinks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import exhibitionData from '../data/exhibitionData';
import instagramData from '../data/instagramData';

import '../styles/home.css';

export default function Home() {

  const [popupOpen, setPopupOpen] = useState(() => {
    try { return localStorage.getItem('arte-benefit-hidden-date') !== new Date().toLocaleDateString('en-CA'); }
    catch { return true; }
  });
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/images/main/hero-eternal-nature.jpg`,
      kicker: 'VIEW EXHIBITION',
      title: 'ETERNAL NATURE',
    },
    {
      image: `${process.env.PUBLIC_URL}/images/main/hero-flow.jpg`,
      kicker: 'VIEW EXHIBITION',
      title: 'FLOW',
    },
    {
      image: `${process.env.PUBLIC_URL}/images/main/hero-wave.jpg`,
      kicker: 'VIEW EXHIBITION',
      title: 'WAVE',
    },
  ];

  const quickMenus = [
    {
      icon: 'photo_library',
      title: '현재 전시',
      to: '/exhibition',
    },
    {
      icon: 'location_on',
      title: '지점안내',
      to: '/location',
    },
    {
      icon: 'local_activity',
      title: '예매하기',
      to: '/ticket',
    },
    {
      icon: 'timelapse',
      title: '운영시간',
      to: '/location#hours',
    },
    {
      icon: 'my_location',
      title: '오시는 길',
      to: '/location#directions',
    },
    {
      icon: 'help',
      title: '관람 안내',
      to: '/exhibition',
    },
  ];

  const instagramLoopData = [
    ...instagramData,
    ...instagramData
  ];

  return (
    <main className="home">

     {/* 히어로 비주얼메인 */}
     <section className="hero-section">
        <Swiper
          modules={[Autoplay, Pagination]} 
          slidesPerView={1} 
          loop={true} 
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false, 
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1);
          }}

          className="hero-swiper" 
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <section
                className="hero"
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              >
                <div className="hero-inner">
                  <div className="hero-text">
                    <p className="hero-kicker">{slide.kicker}</p>
                    <h2 className="hero-title">{slide.title}</h2>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>


        <div className="hero-fixed-inner">

          <div className="hero-pagination-number">
            {String(currentSlide).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          <div className="hero-buttons">
            <HeroLink to="/exhibition">View Exhibition</HeroLink>
            <HeroLink to="/ticket">Book Tickets</HeroLink>
          </div>

          {popupOpen && (
            <div className="benefit-popup">
              <img
                src={`${process.env.PUBLIC_URL}/images/main/benefit-ticket.jpg`}
                alt="부산 지역주민 특별 할인"
              />

              <div className="popup-buttons">
                <button onClick={() => {
                  try { localStorage.setItem('arte-benefit-hidden-date', new Date().toLocaleDateString('en-CA')); } catch {}
                  setPopupOpen(false);
                }}>오늘 하루 보지 않기</button>
                <button onClick={() => setPopupOpen(false)}>
                  닫기
                </button>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* 퀵메뉴 */}
      <section className="quick-menu">
        <div className="quick-inner">

          {quickMenus.map((menu, index) => (
            <QuickLink
              to={menu.to}
              className="quick-item"
              key={index}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {menu.icon}
              </span>

              <span className="quick-title">
                {menu.title}
              </span>
            </QuickLink>
          ))}

        </div>
      </section>

      {/* 현재전시 */}
      <section className="current-exhibition">
        <div className="current-inner">

          <div className="current-header">
            <div className="current-title">
              <p>CURRENT EXHIBITION</p>
              <h2>EXHIBITION</h2>
            </div>

            <ViewAllLink to="/exhibition" className="view-all">
              전체보기
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </ViewAllLink>
          </div>

          <div className="exhibition-slider-wrap">

            <button className="exhibition-prev" aria-label="이전 전시">
              <span className="material-symbols-outlined" aria-hidden="true">
                chevron_left
              </span>
            </button>

            <Swiper 
              modules={[Navigation]} 
              slidesPerView={3} 
              slidesPerGroup={1} 
              spaceBetween={24} 
              navigation={{
                prevEl: '.exhibition-prev',
                nextEl: '.exhibition-next',
              }}
              className="exhibition-swiper" 
            >
              {exhibitionData.map((item) => ( 
                <SwiperSlide key={item.id}> 

                  <div className="exhibition-card"> 

                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="exhibition-card-img" 
                    /> 

                    <div className="exhibition-card-info"> 
                      <h3>{item.title}</h3> 

                      <div className="exhibition-meta"> 
                        <p className="exhibition-subtitle"> 
                          {item.subtitle} 
                        </p> 

                        <p className="exhibition-period"> 
                          {item.period} 
                        </p> 
                      </div> 

                      <p className="exhibition-location"> 
                        {item.location} 
                      </p> 

                      <DetailLink to={`/exhibition/${item.id}`} className="detail-button"> 
                        View Details 
                      </DetailLink> 
                    </div> 

                  </div> 

                </SwiperSlide> 
              ))} 
            </Swiper>

            <button className="exhibition-next" aria-label="다음 전시">
              <span className="material-symbols-outlined" aria-hidden="true">
                chevron_right
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* Location */}
      <section
        className="home-location"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/main/location-bg.jpg)`
        }}
      >
        <div className="home-location-inner">

          <p className="location-kicker">
            Visit ARTE MUSEUM
          </p>

          <h2 className="location-title">
            ARTE MUSEUM<br />
            LOCATIONS
          </h2>

          <p className="location-description">
            아르떼뮤지엄에서 각 지역의 자연과 문화유산을 <br/>
            담아낸 차별화된 전시를 만나보세요.
          </p>

          <LocationLink to="/location" className="location-button">
            전시 도시 보기
          </LocationLink>

        </div>
      </section>

      {/* Instagram */}
      <section className="instagram-section">
        <div className="instagram-inner">

          <div className="instagram-title">
            <h2>@ARTEMUSEUM</h2>
            <p>Follow ARTE MUSEUM</p>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="instagram-swiper"
          >
            {instagramLoopData.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <InstagramLink as="a" href="https://www.instagram.com/artemuseum/" target="_blank" rel="noopener noreferrer" className="instagram-button">
            <span className="material-symbols-outlined" aria-hidden="true">
              photo_camera
            </span>
            Follow on Instagram
          </InstagramLink>

        </div>
      </section>

    </main>
  );
}
