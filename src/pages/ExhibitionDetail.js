import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import exhibitionData from '../data/exhibitionData';
import '../styles/exhibitionDetail.css';


export default function ExhibitionDetail() {

  const { id } = useParams();
  const exhibition = exhibitionData.find(
    (item) => item.id === Number(id)
  );

  const [activeTab, setActiveTab] = useState('intro');
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(exhibition.image);

  const galleryImages = [
    `${process.env.PUBLIC_URL}/images/exhibition/detail/gallery-01.jpg`,
    `${process.env.PUBLIC_URL}/images/exhibition/detail/gallery-02.jpg`,
    `${process.env.PUBLIC_URL}/images/exhibition/detail/gallery-03.jpg`,
    `${process.env.PUBLIC_URL}/images/exhibition/detail/gallery-04.jpg`,
    `${process.env.PUBLIC_URL}/images/exhibition/detail/gallery-05.jpg`,
  ];
  const [galleryMain, setGalleryMain] = useState(galleryImages[0]);

  const relatedIds = [8, 3, 5, 6];
  const relatedExhibitions = relatedIds
    .map((id) => exhibitionData.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <main className="exhibition-detail-page">
      <div className="exhibition-detail-inner">

        <Link
          to="/exhibition"
          className="detail-back"
        >
          ← 전시목록 가기
        </Link>

        <section className="detail-top">

          <div className="detail-visual">
            <img 
              src={selectedImage} 
              alt={exhibition.title} 
              className="detail-main-image" 
            />

            <div className="detail-thumbnails">

              <img
                src={`${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-01.jpg`}
                alt="ETERNAL NATURE 전시 이미지 1"
                onClick={() =>
                  setSelectedImage(
                    `${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-01.jpg`
                  )
                }
              />

              <img
                src={`${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-02.jpg`}
                alt="ETERNAL NATURE 전시 이미지 2"
                onClick={() =>
                  setSelectedImage(
                    `${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-02.jpg`
                  )
                }
              />

              <img
                src={`${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-03.jpg`}
                alt="ETERNAL NATURE 전시 이미지 3"
                onClick={() =>
                  setSelectedImage(
                    `${process.env.PUBLIC_URL}/images/exhibition/detail/jeju-eternal-nature-thumb-03.jpg`
                  )
                }
              />

            </div>
          </div>

          <div className="detail-info">

            <h1>{exhibition.title}</h1>

            <p className="detail-subtitle">
              {exhibition.subtitle}
            </p>

            <p className="detail-location">
              {exhibition.location}
            </p>

            <p className="detail-description">
              자연을 빛과 소리로 다시 경험하는
              몰입형 미디어아트 전시입니다. <br/>
              끝없이 펼쳐지는 감각의 세계로 초대합니다.
            </p>

            <dl className="detail-information">

              <div>
                <dt>전시기간</dt>
                <dd>26. 09. 09 ~ 상시운영</dd>
              </div>

              <div>
                <dt>관람시간</dt>
                <dd>
                  10:00 ~ 20:00
                  <span>(입장 마감 19:00)</span>
                </dd>
              </div>

              <div>
                <dt>전시장소</dt>
                <dd>아르떼뮤지엄 제주</dd>
              </div>

              <div>
                <dt>관람 소요 시간</dt>
                <dd>약 60분</dd>
              </div>

              <div>
                <dt>관람 연령</dt>
                <dd>전체 관람가</dd>
              </div>

            </dl>

            <div className="detail-buttons">
              <button className="detail-ticket-button">
                예매하기
              </button>

              <button
                className={`detail-like-button ${liked ? 'active' : ''}`}
                onClick={() => setLiked(!liked)}
                aria-label="좋아요"
              >
                <span className="material-symbols-outlined">
                  favorite
                </span>
              </button>
            </div>

          </div>

        </section>

        <nav className="detail-tabs">

          <button
            className={activeTab === 'intro' ? 'active' : ''}
            onClick={() => setActiveTab('intro')}
          >
            전시소개
          </button>

          <button
            className={activeTab === 'point' ? 'active' : ''}
            onClick={() => setActiveTab('point')}
          >
            주요 포인트
          </button>

          <button
            className={activeTab === 'gallery' ? 'active' : ''}
            onClick={() => setActiveTab('gallery')}
          >
            갤러리
          </button>

          <button
            className={activeTab === 'guide' ? 'active' : ''}
            onClick={() => setActiveTab('guide')}
          >
            관람안내
          </button>

        </nav>

        <section className="detail-tab-content">

          {activeTab === 'intro' && (
            <div className="intro-content">

              <div className="intro-top">

                <div className="intro-text">
                  <h3>
                    아르떼뮤지엄의 시그니처 전시,<br />
                    ‘영원한 자연’은 자연의 찬란한 순간을<br />
                    미디어아트로 재해석한 전시입니다.
                  </h3>

                  <p>
                    빛과 소리, 공간이 어우러진 몰입의 경험을 통해<br />
                    자연과 다시 연결되는 특별한 시간을 선사합니다.
                  </p>

                  <div className="intro-tags">
                    <span>#자연</span>
                    <span>#빛과소리</span>
                    <span>#몰입형전시</span>
                    <span>#제주전시</span>
                  </div>
                </div>

                <div className="intro-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/exhibition/detail/intro.jpg`}
                    alt="ETERNAL NATURE 전시소개"
                  />
                </div>

              </div>

              <div className="intro-features">
                <div className="intro-feature">
                    <span className="material-symbols-outlined">
                      nest_eco_leaf
                    </span>

                    <p>
                      자연을 새롭게<br />
                      경험하는 전시
                    </p>
                  </div>

                  <div className="intro-feature">
                    <span className="material-symbols-outlined">
                      imagesmode
                    </span>

                    <p>
                      몰입형<br />
                      미디어아트
                    </p>
                  </div>

                  <div className="intro-feature">
                    <span className="material-symbols-outlined">
                      avg_pace
                    </span>

                    <p>
                      잊지못할<br />
                      특별한 시간
                    </p>
                  </div>
              </div>

            </div>
          )}

          {activeTab === 'point' && (
            <div className="point-content">

              <h3 className="point-heading">
                아르떼뮤지엄만의 차별화된 포인트를 만나보세요.
              </h3>

              <div className="point-list">

                <div className="point-item">
                  <div className="point-text">
                    <span className="point-number">01</span>

                    <div>
                      <h4>압도적인 몰입감</h4>
                      <p>
                        거대한 스케일의 미디어아트로 완성된 몰입형 전시공간
                      </p>
                    </div>
                  </div>

                  <img
                    src={`${process.env.PUBLIC_URL}/images/exhibition/detail/point-01.jpg`}
                    alt="압도적인 몰입감"
                  />
                </div>


                <div className="point-item">
                  <div className="point-text">
                    <span className="point-number">02</span>

                    <div>
                      <h4>자연을 재해석한 미디어아트</h4>
                      <p>
                        빛과 소리로 표현된 자연의 찬란한 순간들
                      </p>
                    </div>
                  </div>

                  <img
                    src={`${process.env.PUBLIC_URL}/images/exhibition/detail/point-02.jpg`}
                    alt="자연을 재해석한 미디어아트"
                  />
                </div>


                <div className="point-item">
                  <div className="point-text">
                    <span className="point-number">03</span>

                    <div>
                      <h4>감각을 깨우는 사운드</h4>
                      <p>
                        공간과 어우러진 입체적인 사운드가 주는 새로운 감각 경험
                      </p>
                    </div>
                  </div>

                  <img
                    src={`${process.env.PUBLIC_URL}/images/exhibition/detail/point-03.jpg`}
                    alt="감각을 깨우는 사운드"
                  />
                </div>


                <div className="point-item">
                  <div className="point-text">
                    <span className="point-number">04</span>

                    <div>
                      <h4>포토 스팟</h4>
                      <p>
                        전시 곳곳에 마련된 포토 스팟에서 특별한 순간을 남겨보세요.
                      </p>
                    </div>
                  </div>

                  <img
                    src={`${process.env.PUBLIC_URL}/images/exhibition/detail/point-04.jpg`}
                    alt="포토 스팟"
                  />
                </div>

              </div>

            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="gallery-content">

              <div className="gallery-title">
                <h3>전시의 순간을 미리 만나보세요.</h3>
                <p>
                  아르떼뮤지엄의 전시 공간과 대표 작품을 이미지로 감상해보세요.
                </p>
              </div>

              <div className="gallery-grid">

                <div className="gallery-main">
                  <img
                    src={galleryMain}
                    alt="ETERNAL NATURE 갤러리 메인 이미지"
                  />
                </div>

                <div className="gallery-sub">
                  {galleryImages.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`ETERNAL NATURE 갤러리 이미지 ${index + 2}`}
                      onClick={() => setGalleryMain(image)}
                      className={galleryMain === image ? 'active' : ''}
                    />
                  ))}
                </div>

              </div>

            </div>
          )}

          {activeTab === 'guide' && (
            <div className="guide-content">

              <div className="guide-title">
                <h3>관람 전 꼭 확인해주세요.</h3>
                <p>
                  더욱 편안하고 즐거운 관람을 위해 아래 안내사항을 확인해주세요.
                </p>
              </div>

              <div className="guide-layout">

                <div className="guide-info">

                  <div className="guide-row">
                    <span className="material-symbols-outlined">avg_pace</span>

                    <strong>운영시간</strong>

                    <p>
                      매일 10:00 ~20:00
                      <span>(입장 마감 19:00)</span>
                    </p>
                  </div>


                  <div className="guide-row">
                    <span className="material-symbols-outlined">calendar_clock</span>

                    <strong>관람 소요시간</strong>

                    <p>약 60 ~ 90 분</p>
                  </div>


                  <div className="guide-row">
                    <span className="material-symbols-outlined">location_on</span>

                    <strong>전시장소</strong>

                    <p>
                      제주특별자치도 제주시 애월읍
                      <span>어림비로 478 (어음리 1503)</span>
                    </p>
                  </div>


                  <div className="guide-row">
                    <span className="material-symbols-outlined">person</span>

                    <strong>관람 연령</strong>

                    <p>
                      전체 관람가
                      <span>(미취학아동은 보호자 동반 권장)</span>
                    </p>
                  </div>


                  <div className="guide-row">
                    <span className="material-symbols-outlined">photo_camera</span>

                    <strong>촬영안내</strong>

                    <p>
                      개인촬영 가능
                      <span>(상업적 촬영 및 삼각대 사용 제한)</span>
                    </p>
                  </div>

                </div>


                <div className="guide-right">

                  <div className="guide-notice">

                    <div className="guide-notice-title">
                      <span className="material-symbols-outlined">
                        error
                      </span>

                      <h4>관람 유의사항</h4>
                    </div>

                    <ul>
                      <li>전시공간 내 음식물 반입이 불가합니다.</li>
                      <li>플래시 사용은 제한 될 수 있습니다.</li>
                      <li>작품 보호를 위해 손으로 만지지 말아주세요.</li>
                      <li>다른 관람객을 위해 정숙한 관람을 부탁드립니다.</li>
                    </ul>

                  </div>


                  <div className="guide-buttons">
                    <button type="button">오시는 길</button>
                    <button type="button">FAQ</button>
                  </div>

                </div>

              </div>

            </div>
          )}
        </section>

       <section className="related-exhibition">
          <h3>관련 전시</h3>

          <div className="related-grid">
            {relatedExhibitions.map((item) => (
              <Link
                to={`/exhibition/${item.id}`}
                className="related-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="related-card-text">
                  <h4>{item.title}</h4>

                  <p className="related-subtitle">
                    {item.subtitle}
                  </p>

                  <p className="related-period">
                    {item.period}
                  </p>

                  <span className="related-location">
                    {item.location}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </section>

      </div>
    </main>
  );
}
