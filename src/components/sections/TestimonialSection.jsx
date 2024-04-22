import { useEffect } from "react"

const testimonialsList = [
    {
        id: 0,
        name: 'Saul Goodman',
        imageUrl: 'assets/img/testimonials/testimonials-1.jpg',
        designation: 'Ceo & Founder',
        rating: 5,
        testimonial: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
        id: 1,
        name: 'Sara Wilsson',
        imageUrl: 'assets/img/testimonials/testimonials-2.jpg',
        designation: 'Designer',
        rating: 5,
        testimonial: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
        id: 2,
        name: 'Jena Karlis',
        imageUrl: 'assets/img/testimonials/testimonials-3.jpg',
        designation: 'Store Owner',
        rating: 5,
        testimonial: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
        id: 3,
        name: 'Matt Brandon',
        imageUrl: 'assets/img/testimonials/testimonials-4.jpg',
        designation: 'Freelancer',
        rating: 5,
        testimonial: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
        id: 4,
        name: 'John Larson',
        imageUrl: 'assets/img/testimonials/testimonials-5.jpg',
        designation: 'Entrepreneur',
        rating: 5,
        testimonial: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    },
]

export default function TestimonialSection() {

    useEffect(() => {
        document.querySelectorAll('.swiper').forEach(function (swiper) {
            let config = {
                "loop": true,
                "speed": 600,
                "autoplay": {
                    "delay": 5000
                },
                "slidesPerView": "auto",
                "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": true
                }
            }
            new Swiper(swiper, config);
        });
    })

    return (
        <section id="testimonials" className="testimonials">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
                        <h3>Testimonials</h3>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>

                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">

                        <div className="swiper">
                            <div className="swiper-wrapper">

                                {
                                    testimonialsList.map(testimonial => {
                                        return <div key={testimonial.id} className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="d-flex">
                                                    <img src={testimonial.imageUrl} className="testimonial-img flex-shrink-0" alt="" />
                                                    <div>
                                                        <h3>{testimonial.name}</h3>
                                                        <h4>{testimonial.designation}</h4>
                                                        <div className="stars">
                                                            {
                                                                Array.from(Array(testimonial.rating), (rating, i) => {
                                                                    return <i key={i} className="bi bi-star-fill"></i>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    <i className="bi bi-quote quote-icon-left"></i>
                                                    <span>{testimonial.testimonial}</span>
                                                    <i className="bi bi-quote quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
