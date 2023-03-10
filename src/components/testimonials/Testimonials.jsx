import React from 'react'
import { Data } from './Data'
import './testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">My CLients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
                className="testimonial__container">
                {
                    Data.map((item, id) => {
                        return (
                            <SwiperSlide
                                className='testimonial__card' key={id}>
                                <img src={item.image} className="testimonial__img" alt={item.title} />
                                <h3 className="testimonial__name">{item.title}</h3>
                                <p className="testimonial__description">{item.description}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials