import { useEffect } from "react";
import { Link } from "react-router-dom"

const appFilters = [
    {
        id: 0,
        name: 'All',
        filter: '*',
        class: 'filter-active',
    },
    {
        id: 1,
        name: 'App',
        filter: '.filter-app',
        class: '',
    },
    {
        id: 2,
        name: 'Card',
        filter: '.filter-product',
        class: '',
    },
    {
        id: 3,
        name: 'Web',
        filter: '.filter-branding',
        class: '',
    },
]

export const portfolioItems = [
    {
        name: 'App 1',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
        link: 'portfolio-details/app-1',
        type: 'app'
    },
    {
        name: 'Product 1',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
        link: 'portfolio-details/product-1',
        type: 'product'
    },
    {
        name: 'Branding 1',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
        link: 'portfolio-details/branding-1',
        type: 'branding'
    },
    {
        name: 'App 2',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
        link: 'portfolio-details/app-2',
        type: 'app'
    },
    {
        name: 'Product 2',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-5.jpg',
        link: 'portfolio-details/product-2',
        type: 'product'
    },
    {
        name: 'Branding 2',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
        link: 'portfolio-details/branding-2',
        type: 'branding'
    },
    {
        name: 'App 3',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-7.jpg',
        link: 'portfolio-details/app-3',
        type: 'app'
    },
    {
        name: 'Product 3',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-8.jpg',
        link: 'portfolio-details/product-3',
        type: 'product'
    },
    {
        name: 'Branding 3',
        description: 'Lorem ipsum, dolor sit',
        imageUrl: 'assets/img/masonry-portfolio/masonry-portfolio-9.jpg',
        link: 'portfolio-details/branding-3',
        type: 'branding'
    }
]

export default function PortfolioSection() {

    useEffect(function () {
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
            let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
            let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
            let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

            let initIsotope;
            imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
                initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                    itemSelector: '.isotope-item',
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort
                });
            });

            isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
                filters.addEventListener('click', function () {
                    isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                    this.classList.add('filter-active');
                    initIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    if (typeof aosInit === 'function') {
                        aosInit();
                    }
                }, false);
            });

        });
    })

    useEffect(function () {
        GLightbox({
            selector: '.glightbox'
        });
    })

    return (
        <section id="portfolio" className="portfolio">


            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        {
                            appFilters.map(appFilters => {
                                return <li key={appFilters.id} data-filter={appFilters.filter} className={appFilters.class + ' me-1'}>{appFilters.name}</li>
                            })
                        }
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        {
                            portfolioItems.map(portfolioItem => {
                                return <div key={portfolioItem.name} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${portfolioItem.type}`}>
                                    <img src={portfolioItem.imageUrl} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>{portfolioItem.name}</h4>
                                        <p>{portfolioItem.description}</p>
                                        <Link to={portfolioItem.imageUrl} title={portfolioItem.name} data-gallery={`portfolio-gallery-${portfolioItem.type}`} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to={portfolioItem.link} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            })
                        }

                    </div>

                </div>

            </div>

        </section>
    )
}
