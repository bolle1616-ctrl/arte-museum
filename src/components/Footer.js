import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">

          <div className="footer-left">
            <h2 className="footer-logo">
              <Link to="/">
                ARTE MUSEUM
              </Link>
            </h2>

            <div className="footer-location-list">
              <div>
                <Link to="/location">JEJU</Link>
                <Link to="/location">BUSAN</Link>
                <Link to="/location">GANGNEUNG</Link>
                <Link to="/location">YEOSU</Link>
              </div>

              <div>
                <a href="#none">NEW YORK</a>
                <a href="#none">LAS VEGAS</a>
                <a href="#none">DUBAI</a>
              </div>
            </div>
          </div>


          <div className="footer-right">

            <div className="family-site-wrap">
              <select
                className="family-site"
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) {
                    window.open(e.target.value, '_blank');
                  }
                }}
              >
                <option value="" disabled>
                  FAMILY SITE
                </option>

                <option value="https://www.dstrict.com">
                  d'strict
                </option>

                <option value="#">
                  Arte kids park
                </option>

                <option value="#">
                  reSOUND New York
                </option>
                  
              </select>
            </div>

            <div className="footer-sns">
              <div className="footer-sns">
                <a href="#none" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="#none" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <div className="footer-links">
            <a href="#none">이용약관</a>
            <a href="#none">개인정보처리방침</a>
            <a href="#none">고객센터</a>
            <a href="#none">비즈니스 문의하기</a>
          </div>

          <div className="footer-company">
            <p>
              상호명: (주)아르떼뮤지엄코리아 | 대표자명: 이성호 |
              사업자등록번호: 616-86-22384
            </p>

            <p>
              운영사: (주)디스트릭트코리아 | 대표자명: 이성호 |
              사업자등록번호: 211-87-51959 © ARTE MUSEUM. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );

}
