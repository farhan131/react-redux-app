import { Link } from "react-router-dom"

export const blogList = [
    {
        id: 0,
        blogCategory: 'Politics',
        blogTitle: 'Dolorum optio tempore voluptas dignissimos',
        blogImageUrl: 'assets/img/blog/blog-1.jpg',
        authorImageUrl: 'assets/img/blog/blog-author.jpg',
        authorName: 'Maria Doe',
        publishDate: 'Jan 1, 2022',
    },
    {
        id: 1,
        blogCategory: 'Sports',
        blogTitle: 'Nisi magni odit consequatur autem nulla dolorem',
        blogImageUrl: 'assets/img/blog/blog-2.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-2.jpg',
        authorName: 'Allisa Mayer',
        publishDate: 'Jun 5, 2022',
    },
    {
        id: 2,
        blogCategory: 'Entertainment',
        blogTitle: 'Possimus soluta ut id suscipit ea ut in quo quia et soluta',
        blogImageUrl: 'assets/img/blog/blog-3.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-3.jpg',
        authorName: 'Mark Dower',
        publishDate: 'Jun 22, 2022',
    },
    {
        id: 3,
        blogCategory: 'Sports',
        blogTitle: 'Non rem rerum nam cum quo minus olor distincti',
        blogImageUrl: 'assets/img/blog/blog-4.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-4.jpg',
        authorName: 'Lisa Neymar',
        publishDate: 'Jun 30, 2022',
    },
    {
        id: 4,
        blogCategory: 'Politics',
        blogTitle: 'Accusamus quaerat aliquam qui debitis facilis consequatur',
        blogImageUrl: 'assets/img/blog/blog-5.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-5.jpg',
        authorName: 'Denis Peterson',
        publishDate: 'Jan 30, 2022',
    },
    {
        id: 5,
        blogCategory: 'Entertainment',
        blogTitle: 'Distinctio provident quibusdam numquam aperiam aut',
        blogImageUrl: 'assets/img/blog/blog-6.jpg',
        authorImageUrl: 'assets/img/blog/blog-author-6.jpg',
        authorName: 'Mika Lendon',
        publishDate: 'Feb 14, 2022',
    },
]

export default function RecentPostsSection() {

    blogList.sort((a, b) => a - b)

    return (
        <section id="recent-posts" className="recent-posts">

            <div className="container section-title" data-aos="fade-up">
                <h2>Recent Posts</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-4">


                    {
                        blogList.map((blog, i) => {
                            return i < 3 ? <div key={blog.id} className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={`${blog.id}00`}>
                                <article>

                                    <div className="post-img">
                                        <img src={blog.blogImageUrl} alt="" className="img-fluid" />
                                    </div>

                                    <p className="post-category">{blog.blogCategory}</p>

                                    <h2 className="title">
                                        <Link to='/blog'>{blog.blogTitle}</Link>
                                    </h2>

                                    <div className="d-flex align-items-center">
                                        <img src={blog.authorImageUrl} alt="" className="img-fluid post-author-img flex-shrink-0" />
                                        <div className="post-meta">
                                            <p className="post-author">{blog.authorName}</p>
                                            <p className="post-date">
                                                <time dateTime={`${new Date(blog.publishDate).getFullYear}-${new Date(blog.publishDate).getMonth}-${new Date(blog.publishDate).getDate}`}>{blog.publishDate}</time>
                                            </p>
                                        </div>
                                    </div>

                                </article>
                            </div> : null
                        })
                    }

                </div>

            </div>

        </section>
    )
}
