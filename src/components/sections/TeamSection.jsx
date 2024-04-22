import { Link } from "react-router-dom"

const teamList = [
    {
        id: 0,
        imageUrl: 'assets/img/team/team-1.jpg',
        social: [
            {
                id: 0,
                classes: 'bi bi-twitter',
                link: '#'
            },
            {
                id: 1,
                classes: 'bi bi-facebook',
                link: '#'
            },
            {
                id: 2,
                classes: 'bi bi-instagram',
                link: '#'
            },
            {
                id: 3,
                classes: 'bi bi-linkedin',
                link: '#'
            },
        ],
        name: 'Walter White',
        designation: 'Chief Executive Officer',
        description: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow'
    },
    {
        id: 1,
        imageUrl: 'assets/img/team/team-2.jpg',
        social: [
            {
                id: 0,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 1,
                name: 'Facebook',
                link: '#'
            },
            {
                id: 2,
                name: 'Instagram',
                link: '#'
            },
            {
                id: 3,
                name: 'Linkedin',
                link: '#'
            },
        ],
        name: 'Sarah Jhonson',
        designation: 'Product Manager',
        description: 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut'
    },
    {
        id: 2,
        imageUrl: 'assets/img/team/team-3.jpg',
        social: [
            {
                id: 0,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 1,
                name: 'Facebook',
                link: '#'
            },
            {
                id: 2,
                name: 'Instagram',
                link: '#'
            },
            {
                id: 3,
                name: 'Linkedin',
                link: '#'
            },
        ],
        name: 'Brian Doe',
        designation: 'Marketing',
        description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit'
    },
    {
        id: 3,
        imageUrl: 'assets/img/team/team-4.jpg',
        social: [
            {
                id: 0,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 1,
                name: 'Facebook',
                link: '#'
            },
            {
                id: 2,
                name: 'Instagram',
                link: '#'
            },
            {
                id: 3,
                name: 'Linkedin',
                link: '#'
            },
        ],
        name: 'William Anderson',
        designation: 'CTO',
        description: 'Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui'
    },
    {
        id: 4,
        imageUrl: 'assets/img/team/team-5.jpg',
        social: [
            {
                id: 0,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 1,
                name: 'Facebook',
                link: '#'
            },
            {
                id: 2,
                name: 'Instagram',
                link: '#'
            },
            {
                id: 3,
                name: 'Linkedin',
                link: '#'
            },
        ],
        name: 'Amanda Jepson',
        designation: 'Accountant',
        description: 'Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur'
    },
    {
        id: 5,
        imageUrl: 'assets/img/team/team-6.jpg',
        social: [
            {
                id: 0,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 1,
                name: 'Facebook',
                link: '#'
            },
            {
                id: 2,
                name: 'Instagram',
                link: '#'
            },
            {
                id: 3,
                name: 'Linkedin',
                link: '#'
            },
        ],
        name: 'Josepha Palas',
        designation: 'Operation',
        description: 'Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel'
    },
]

export default function TeamSection() {
    return (
        <section id="team" className="team">


            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-5">

                    {
                        teamList.map(team => {
                            return <div key={team.id} className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={`${team.id + 1}00`}>
                                <div className="member-img">
                                    <img src={team.imageUrl} className="img-fluid" alt="" />
                                    <div className="social">
                                        {
                                            team.social.map(s => {
                                                return <Link key={s.id} to={s.link}><i className={s.classes}></i></Link>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>{team.name}</h4>
                                    <span>{team.designation}</span>
                                    <p>{team.description}</p>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>

        </section>
    )
}
