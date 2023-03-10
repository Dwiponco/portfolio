import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Dwi Ponco Utomo</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a href="" className="footer__link"></a>
                    </li>
                </ul>
                <div className="footer__social">
                    {/* eslint-disable-next-line */}
                    <a href="https://www.instagram.com/dwiponcoutomo" className="footer__social-link" target="_blank"><i className="bx bxl-instagram"></i></a>
                    {/* eslint-disable-next-line */}
                    {/* <a href="mailto:dwiponco.learning@gmail.com" className="footer__social-link" target="_blank"><i className="bx bxl-facebook"></i></a> */}
                    {/* eslint-disable-next-line */}
                    {/* <a href="https://github.com/Dwiponco" className="footer__social-link" target="_blank"><i className="bx bxl-twitter"></i></a> */}
                </div>

                <span className='footer__copy'>
                    &#169; Dwi Ponco Utomo, All righs reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer