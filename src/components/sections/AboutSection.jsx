const iconBoxesList = [
    {
        id: 0,
        icon: 'bi bi-buildings',
        title: 'Eius provident',
        description: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem'
    },
    {
        id: 1,
        icon: 'bi bi-clipboard-pulse',
        title: 'Rerum aperiam',
        description: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia'
    },
    {
        id: 2,
        icon: 'bi bi-command',
        title: 'Veniam omnis',
        description: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti'
    },
    {
        id: 3,
        icon: 'bi bi-graph-up-arrow',
        title: 'Delares sapiente',
        description: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda'
    },
]

export default function AboutSection() {
    return (
        <section id="about" className="about">

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-xl-center gy-5">

                    <div className="col-xl-5 content">
                        <h3>About Us</h3>
                        <h2>Ducimus rerum libero reprehenderit cumque</h2>
                        <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>

                    <div className="col-xl-7">
                        <div className="row gy-4 icon-boxes">

                            {
                                iconBoxesList.map(iconBox => {
                                    return <div key={iconBox.id} className="col-md-6" data-aos="fade-up" data-aos-delay={`${iconBox.id + 2}00`}>
                                        <div className="icon-box">
                                            <i className={iconBox.icon}></i>
                                            <h3>{iconBox.title}</h3>
                                            <p>{iconBox.description}</p>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
