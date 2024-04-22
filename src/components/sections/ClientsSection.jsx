const clientsList = [
    {
        id: 0,
        imageUrl: 'assets/img/clients/client-1.png'
    },
    {
        id: 1,
        imageUrl: 'assets/img/clients/client-2.png'
    },
    {
        id: 2,
        imageUrl: 'assets/img/clients/client-3.png'
    },
    {
        id: 3,
        imageUrl: 'assets/img/clients/client-4.png'
    },
    {
        id: 4,
        imageUrl: 'assets/img/clients/client-5.png'
    },
    {
        id: 5,
        imageUrl: 'assets/img/clients/client-6.png'
    },
]
export default function ClientsSection() {
    return (
        <section id="clients" className="clients">

            <div className="container-fluid" data-aos="fade-up">

                <div className="row gy-4">

                    {
                        clientsList.map(client => {
                            return <div key={client.id} className="col-xl-2 col-md-3 col-6 client-logo">
                                <img src={client.imageUrl} className="img-fluid" alt="" />
                            </div>
                        })
                    }

                </div>

            </div>

        </section>
    )
}
