import { useEffect } from "react"

const statsList = [
    {
        id: 0,
        count: '232',
        name: 'Clients'
    },
    {
        id: 1,
        count: '521',
        name: 'Projects'
    },
    {
        id: 2,
        count: '1453',
        name: 'Hours Of Support'
    },
    {
        id: 3,
        count: '32',
        name: 'Workers'
    },
]

export default function StatsSection() {
    useEffect(() => {
        new PureCounter();
    })
    return (
        <section id="stats" className="stats">

            <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    {
                        statsList.map(stat => {
                            return <div key={stat.id} className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end={stat.count} data-purecounter-duration="1" className="purecounter"></span>
                                    <p>{stat.name}</p>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>

        </section>
    )
}
