import { Link } from "react-router-dom";

export const servicesList = [
    {
        serviceId: 0,
        icon: 'bi bi-briefcase',
        serviceName: 'Web Design'
    },
    {
        serviceId: 1,
        icon: 'bi bi-card-checklist',
        serviceName: 'Product Management'
    },
    {
        serviceId: 2,
        icon: 'bi bi-bar-chart',
        serviceName: 'Graphic Design'
    },
    {
        serviceId: 3,
        icon: 'bi bi-binoculars',
        serviceName: 'Marketing'
    },
]

export default function ServicesSection() {
    return (
        <section id="services" className="services">

            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-4">

                    {
                        servicesList.map((service, i) => {
                            return <div key={service.serviceId} className="col-lg-6 " data-aos="fade-up" data-aos-delay={`${i}00`}>
                                <div className="service-item d-flex">
                                    <div className="icon flex-shrink-0">
                                        <i className={service.icon}></i>
                                    </div>
                                    <div>
                                        <h4 className="title">
                                            <Link to={`/services/${service.serviceName.toLowerCase().replaceAll(' ', '-')}`} className="stretched-link">{service.serviceName}</Link>
                                        </h4>
                                        <p className="description">
                                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>

        </section>
    )
}
