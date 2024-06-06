import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {list} = props
  return (
    <ul>
      {list.map(eachItem => (
        <BlogItem key={eachItem.id} details={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
