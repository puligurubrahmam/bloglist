import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="list-container">
        <div>
          <img src={imageUrl} className="img" alt={title} />
        </div>
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
