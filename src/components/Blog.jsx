import { Link } from "react-router-dom"

export const blogList = [
    {
        blogCategory: 'Politics',
        blogTitle: 'Dolorum optio tempore voluptas dignissimos',
        blogImageUrl: 'assets/img/blog/blog-1.jpg',
        authorImageUrl: 'assets/img/blog/blog-author.jpg',
        authorName: 'Maria Doe',
        publishDate: 'Jan 1, 2022',
    },
    {
        blogCategory: 'Sports',
        blogTitle: 'Nisi magni odit consequatur autem nulla dolorem',
        blogImageUrl: 'assets/img/blog/blog-2.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-2.jpg',
        authorName: 'Allisa Mayer',
        publishDate: 'Jun 5, 2022',
    },
    {
        blogCategory: 'Entertainment',
        blogTitle: 'Possimus soluta ut id suscipit ea ut in quo quia et soluta',
        blogImageUrl: 'assets/img/blog/blog-3.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-3.jpg',
        authorName: 'Mark Dower',
        publishDate: 'Jun 22, 2022',
    },
    {
        blogCategory: 'Sports',
        blogTitle: 'Non rem rerum nam cum quo minus olor distincti',
        blogImageUrl: 'assets/img/blog/blog-4.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-4.jpg',
        authorName: 'Lisa Neymar',
        publishDate: 'Jun 30, 2022',
    },
    {
        blogCategory: 'Politics',
        blogTitle: 'Accusamus quaerat aliquam qui debitis facilis consequatur',
        blogImageUrl: 'assets/img/blog/blog-5.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-5.jpg',
        authorName: 'Denis Peterson',
        publishDate: 'Jan 30, 2022',
    },
    {
        blogCategory: 'Entertainment',
        blogTitle: 'Distinctio provident quibusdam numquam aperiam aut',
        blogImageUrl: 'assets/img/blog/blog-6.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-6.jpg',
        authorName: 'Mika Lendon',
        publishDate: 'Feb 14, 2022',
    },
]

export default function Blog() {
    return (
        <main id="main">

            <div data-aos="fade" className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Blog</h1>
                                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Blog</li>
                        </ol>
                    </div>
                </nav>
            </div>


            <section id="blog" className="blog">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 posts-list">

                        {
                            blogList.map(blog => {
                                return <div key={blog.blogTitle} className="col-xl-4 col-lg-6">
                                    <article>

                                        <div className="post-img">
                                            <img src={blog.blogImageUrl} alt="" className="img-fluid" />
                                        </div>

                                        <p className="post-category">{blog.blogCategory}</p>

                                        <h2 className="title">
                                            <Link to={`/blog/${blog.blogTitle.toLowerCase().replaceAll(' ', '-')}`}>{blog.blogTitle}</Link>
                                        </h2>

                                        <div className="d-flex align-items-center">
                                            <img src={blog.authorImageUrl} alt="" className="img-fluid post-author-img flex-shrink-0" />
                                            <div className="post-meta">
                                                <p className="post-author">{blog.authorName}</p>
                                                <p className="post-date">
                                                    <time dateTime="2022-01-01">{blog.publishDate}</time>
                                                </p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            })
                        }

                        {/* <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Politics</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Maria Doe</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Jan 1, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Sports</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Allisa Mayer</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Jun 5, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Entertainment</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Mark Dower</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Jun 22, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-4.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Sports</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Non rem rerum nam cum quo minus olor distincti</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-4.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Lisa Neymar</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Jun 30, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-5.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Politics</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-5.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Denis Peterson</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Jan 30, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <article>

                                <div className="post-img">
                                    <img src="assets/img/blog/blog-6.jpg" alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">Entertainment</p>

                                <h2 className="title">
                                    <a href="blog-details.html">Distinctio provident quibusdam numquam aperiam aut</a>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src="assets/img/blog/blog-author-6.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">Mika Lendon</p>
                                        <p className="post-date">
                                            <time dateTime="2022-01-01">Feb 14, 2022</time>
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div> */}

                    </div>

                    <div className="pagination d-flex justify-content-center">
                        <ul>
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                        </ul>
                    </div>

                </div>

            </section>

        </main>
    )
}
