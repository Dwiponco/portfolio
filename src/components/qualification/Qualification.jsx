import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleModal, setToggleModal] = useState(1)

    const showModal = (index) => {
        setToggleModal(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification_tabs">
                    <div className="qualification__button button--flex" onClick={() => showModal(1)}>
                        <i className={toggleModal === 1 ? "uil uil-graduation-cap qualification__active qualification__icon" : "uil uil-graduation-cap qualification__icon"}></i> Education
                    </div>

                    <div className="qualification__button button--flex" onClick={() => showModal(2)}>
                        <i className={toggleModal === 2 ? "uil uil-briefcase-alt qualification__icon qualification__active" : "uil uil-briefcase-alt qualification__icon"}></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleModal === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2018
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleModal === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Design</h3>
                                <span className="qualification__subtitle">Startup</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2018
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification