import { Link } from "react-router-dom"

export default function BlogComment({ comment }) {
    return (
        <>
            <div className="d-flex">
                <div className="comment-img"><img src={comment.commentorImageUrl} alt="" /></div>
                <div>
                    <h5>
                        <Link to="">{comment.commentorName}</Link>
                        <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link>
                    </h5>
                    <time
                        dateTime={`${new Date(comment.commentDate).getFullYear()}-${new Date(comment.commentDate).getMonth() + 1}-${new Date(comment.commentDate).getDate()}`}
                    >
                        {comment.commentDate}
                    </time>
                    <p> {comment.commentContent} </p>
                </div>
            </div>
            {
                comment.replies.length > 0 ? comment.replies.map(reply => {
                    return <div key={reply.commentId} id={`comment-reply-${comment.commentId}`} className="comment comment-reply">
                        <BlogComment comment={reply} />
                    </div>
                }) : null
            }
        </>
    )
}
