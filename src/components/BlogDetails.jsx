import { blogList } from "./Blog"
import { Link, useLocation } from 'react-router-dom'
import BlogComment from "./BlogComment";
import BlogSidebar from "./BlogSidebar";

const blogDetails = {
    blogImageUrl: '../assets/img/blog/blog-1.jpg',
    blogTitle: 'Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia',
    blogAuthor: {
        authorImageUrl: '../assets/img/blog/blog-author.jpg',
        authorName: 'Jane Smith',
        authorContent: 'Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.',
        authorTwitter: 'https://twitters.com/#',
        authorFacebook: 'https://facebook.com/#',
        authorInstagram: 'https://instagram.com/#',
    },
    blogPublishDate: 'Jan 1, 2022',
    comments: [
        {
            commentId: 0,
            commentorImageUrl: '../assets/img/blog/comments-3.jpg',
            commentorName: 'Georgia Reader',
            commentDate: '01 Jan,2022',
            commentContent: 'Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.',
            replies: []
        },
        {
            commentId: 1,
            commentorImageUrl: '../assets/img/blog/comments-2.jpg',
            commentorName: 'Aron Alvarado',
            commentDate: '01 Jan,2022',
            commentContent: 'Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.',
            replies: [
                {
                    commentId: 2,
                    commentorImageUrl: '../assets/img/blog/comments-3.jpg',
                    commentorName: 'Lynda Small',
                    commentDate: '01 Jan,2022',
                    commentContent: 'Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat. Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.',
                    replies: [
                        {
                            commentId: 3,
                            commentorImageUrl: '../assets/img/blog/comments-4.jpg',
                            commentorName: 'Sianna Ramsay',
                            commentDate: '01 Jan,2022',
                            commentContent: 'Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.',
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            commentId: 4,
            commentorImageUrl: '../assets/img/blog/comments-5.jpg',
            commentorName: 'Nolan Davidson',
            commentDate: '01 Jan,2022',
            commentContent: 'Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at. Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.',
            replies: []
        },
        {
            commentId: 5,
            commentorImageUrl: '../assets/img/blog/comments-6.jpg',
            commentorName: 'Kay Duggan',
            commentDate: '01 Jan,2022',
            commentContent: 'Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.',
            replies: []
        },
    ],
    blogContent: [
        {
            contentId: 0,
            type: 'p',
            content: 'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.'
        },
        {
            contentId: 1,
            type: 'p',
            content: 'Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.'
        },
        {
            contentId: 2,
            type: 'blockquote',
            content: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.'
        },
        {
            contentId: 3,
            type: 'p',
            content: 'Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.'
        },
        {
            contentId: 4,
            type: 'h3',
            content: 'Et quae iure vel ut odit alias.'
        },
        {
            contentId: 5,
            type: 'p',
            content: 'Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.\nQuia et suscipit non sequi.Maxime sed odit.Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor.Sint harum eveniet dicta exercitationem minima.Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed.Quibusdam rerum dolores sint consequatur quidem ea. \nBeatae minima sunt libero soluta sapiente in rem assumenda.Et qui odit voluptatem.Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.'
        },
        {
            contentId: 6,
            type: 'img',
            content: '../assets/img/blog/blog-inside-post.jpg'
        },
        {
            contentId: 7,
            type: 'h3',
            content: 'Ut repellat blanditiis est dolore sunt dolorum quae.'
        },
        {
            contentId: 8,
            type: 'p',
            content: 'Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel. \nConsectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.'
        },
        {
            contentId: 9,
            type: 'p',
            content: 'Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.'
        },
    ],
    blogCategory: 'Business',
    blogTags: [
        {
            tagId: 0,
            tag: 'Creative'
        },
        {
            tagId: 1,
            tag: 'Tips'
        },
        {
            tagId: 2,
            tag: 'Marketing'
        }
    ],

}

export default function BlogDetails() {
    const { pathname } = useLocation()
    console.log(pathname);
    return (
        <main id="main">

            <div data-aos="fade" className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Blog Details</h1>
                                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li className="current">Blog Details</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="blog-details" className="blog-details">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row g-5">

                        <div className="col-lg-8">

                            <article className="article">

                                <div className="post-img">
                                    <img src={blogDetails.blogImageUrl} alt="" className="img-fluid" />
                                </div>

                                <h2 className="title">{blogDetails.blogTitle}</h2>

                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">{blogDetails.blogAuthor.authorName}</a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2020-01-01">{blogDetails.blogPublishDate}</time></a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">{blogDetails.comments.length}</a></li>
                                    </ul>
                                </div>

                                <div className="content">

                                    {
                                        blogDetails.blogContent.map(content => {
                                            if (content.type === 'p') {
                                                return <p key={content.contentId}>
                                                    {content.content}
                                                </p>
                                            }
                                            if (content.type === 'blockquote') {
                                                return <blockquote key={content.contentId}>
                                                    <p>
                                                        {content.content}
                                                    </p>
                                                </blockquote>
                                            }
                                            if (content.type === 'h3') {
                                                return <h3 key={content.contentId}>
                                                    {content.content}
                                                </h3>
                                            }
                                            if (content.type === 'img') {
                                                return <img key={content.contentId} src={content.content} className="img-fluid" alt="" />
                                            }
                                        })
                                    }

                                </div>

                                <div className="meta-bottom">
                                    <i className="bi bi-folder"></i>
                                    <ul className="cats">
                                        <li><a href="#">{blogDetails.blogCategory}</a></li>
                                    </ul>

                                    <i className="bi bi-tags"></i>
                                    <ul className="tags">
                                        {blogDetails.blogTags.map(blogTag => {
                                            return <li key={blogTag.tagId}>
                                                <Link to="/blog/blog-details#">{blogTag.tag}</Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>

                            </article>

                            <div className="blog-author d-flex align-items-center">
                                <img src="../assets/img/blog/blog-author.jpg" className="rounded-circle flex-shrink-0" alt="" />
                                <div>
                                    <h4>{blogDetails.blogAuthor.authorName}</h4>
                                    <div className="social-links">
                                        {
                                            <Link to={blogDetails.blogAuthor.authorTwitter}><i className="bi bi-twitter"></i></Link>
                                        }
                                        {
                                            <Link to={blogDetails.blogAuthor.authorFacebook}><i className="bi bi-facebook"></i></Link>
                                        }
                                        {
                                            <Link to={blogDetails.blogAuthor.authorInstagram}><i className="bi bi-instagram"></i></Link>
                                        }
                                    </div>
                                    <p>
                                        {blogDetails.blogAuthor.authorContent}
                                    </p>
                                </div>
                            </div>

                            <div className="comments">

                                <h4 className="comments-count">{blogDetails.comments.length} Comments</h4>

                                {blogDetails.comments.map(comment => {
                                    return <div key={comment.commentId} id={`comment-${comment.commentId}`} className="comment">
                                        <BlogComment comment={comment} />
                                    </div>
                                })}

                                <div className="reply-form">

                                    <h4>Leave a Reply</h4>
                                    <p>Your email address will not be published. Required fields are marked * </p>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <input name="website" type="text" className="form-control" placeholder="Your Website" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Post Comment</button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <BlogSidebar />

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}
