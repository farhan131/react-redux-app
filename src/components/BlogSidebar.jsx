import { Link } from "react-router-dom"

export default function BlogSidebar() {
    const blogSidebarContent = {
        categories: [
            {
                catId: 0,
                catName: 'General',
                noOfCats: 25
            },
            {
                catId: 1,
                catName: 'Lifestyle',
                noOfCats: 12
            },
            {
                catId: 2,
                catName: 'Travel',
                noOfCats: 5
            },
            {
                catId: 3,
                catName: 'Design',
                noOfCats: 22
            },
            {
                catId: 4,
                catName: 'Creative',
                noOfCats: 8
            },
            {
                catId: 5,
                catName: 'Educaion',
                noOfCats: 14
            }
        ],
        recentPosts: [
            {
                postId: 0,
                postImageUrl: '../assets/img/blog/blog-recent-1.jpg',
                postLink: '/blog',
                postName: 'Nihil blanditiis at in nihil autem',
                postPublishDate: 'Jan 1, 2020'
            },
            {
                postId: 1,
                postImageUrl: '../assets/img/blog/blog-recent-2.jpg',
                postLink: '/blog',
                postName: 'Quidem autem et impedit',
                postPublishDate: 'Jan 1, 2020'
            },
            {
                postId: 2,
                postImageUrl: '../assets/img/blog/blog-recent-3.jpg',
                postLink: '/blog',
                postName: 'Id quia et et ut maxime similique occaecati ut',
                postPublishDate: 'Jan 1, 2020'
            },
            {
                postId: 3,
                postImageUrl: '../assets/img/blog/blog-recent-4.jpg',
                postLink: '/blog',
                postName: 'Laborum corporis quo dara net para',
                postPublishDate: 'Jan 1, 2020'
            },
            {
                postId: 4,
                postImageUrl: '../assets/img/blog/blog-recent-1.jpg',
                postLink: '/blog',
                postName: 'Nihil blanditiis at in nihil autem',
                postPublishDate: 'Jan 1, 2020'
            },
            {
                postId: 5,
                postImageUrl: '../assets/img/blog/blog-recent-5.jpg',
                postLink: '/blog',
                postName: 'Et dolores corrupti quae illo quod dolor',
                postPublishDate: 'Jan 1, 2020'
            },
        ],
        tags: [
            {
                tagId: 0,
                tag: 'App'
            },
            {
                tagId: 1,
                tag: 'IT'
            },
            {
                tagId: 2,
                tag: 'Business'
            },
            {
                tagId: 3,
                tag: 'Mac'
            },
            {
                tagId: 4,
                tag: 'Design'
            },
            {
                tagId: 5,
                tag: 'Office'
            },
            {
                tagId: 6,
                tag: 'Creative'
            },
            {
                tagId: 7,
                tag: 'Studio'
            },
            {
                tagId: 8,
                tag: 'Smart'
            },
            {
                tagId: 9,
                tag: 'Tips'
            },
            {
                tagId: 10,
                tag: 'Marketing'
            }
        ]
    }
    return (
        <div className="sidebar">

            <div className="sidebar-item search-form">
                <h3 className="sidebar-title">Search</h3>
                <form action="" className="mt-3">
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search"></i></button>
                </form>
            </div>

            <div className="sidebar-item categories">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="mt-3">
                    {
                        blogSidebarContent.categories.map(category => {
                            return <li key={category.catId}>
                                <Link to="#">
                                    {category.catName}
                                    <span>({category.noOfCats})</span>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="sidebar-item recent-posts">
                <h3 className="sidebar-title">Recent Posts</h3>

                {
                    blogSidebarContent.recentPosts.map(recentPost => {
                        return <div key={recentPost.postId} className="post-item">
                            <img src={recentPost.postImageUrl} alt="" className="flex-shrink-0" />
                            <div>
                                <h4><Link to={recentPost.postLink}>{recentPost.postName}</Link></h4>
                                <time
                                    dateTime={`${new Date(recentPost.postPublishDate).getFullYear()}-${new Date(recentPost.postPublishDate).getMonth() + 1}-${new Date(recentPost.postPublishDate).getDate()}`}
                                > {recentPost.postPublishDate} </time>
                            </div>
                        </div>
                    })
                }

            </div>

            <div className="sidebar-item tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="mt-3">
                    {
                        blogSidebarContent.tags.map(tag => {
                            return <li key={tag.tagId} ><Link to="#">{tag.tag}</Link></li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}
