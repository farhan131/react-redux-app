import { Link } from "react-router-dom"
import { blogList } from "./sections/RecentPostsSection"

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
