import React, { useState } from 'react'
import './services.css'
const Services = () => {

    const [toggleModal, setToggleModal] = useState(0)

    const showModal = (index) => {
        setToggleModal(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon">
                            <h3 className="services__title">Product <br /> Designer</h3>
                        </i>
                    </div>

                    <span className="services__button" onClick={() => showModal(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleModal === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => showModal(0)}></i>
                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                With more than 1 years of experience. Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designing products from start to finish, including conceptualizing, sketching, and creating prototypes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Collaborating with product development teams to ensure that the designed product can be manufactured effectively and efficiently.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Gathering feedback from users to help improve the product design and make it more functional.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Analyzing market trends to ensure that the designed product remains relevant and competitive.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating product specifications and developing design guidelines to help ensure consistency throughout the product.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon">
                            <h3 className="services__title">UI/UX <br /> Designer</h3>
                        </i>
                    </div>

                    <span className="services__button" onClick={() => showModal(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleModal === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => showModal(0)}></i>
                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience. Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon" />
                                    <p className="services__modal-info">
                                        Conducting user research
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Designing wireframes
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Prototypes, and visual mockups
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Collaborating with development and product management teams to ensure that the designed product can be implemented effectively and efficiently.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon">
                            <h3 className="services__title">Visual <br /> Designer</h3>
                        </i>
                    </div>

                    <span className="services__button" onClick={() => showModal(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleModal === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => showModal(0)}></i>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience. Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Branding Design: I can help create a strong and consistent brand identity, including logos, color palettes, and comprehensive brand guidelines.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web Design: I can create visually appealing and responsive website designs, with a focus on optimal user experience and high conversions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Mobile App Design: I can create user-friendly and intuitive mobile app designs, with a focus on client's business goals.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Graphic Design: I can create various types of graphic designs, including brochures, posters, infographics, and other publications, to meet business and marketing needs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Packaging Design: I can help create attractive and memorable product packaging designs, with a focus on brand goals and consumer needs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design Review: I can provide design reviews and consultations that help clients improve their design quality and meet business goals.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services