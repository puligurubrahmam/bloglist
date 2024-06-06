import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogContent: {}, isLoading: true}

  componentDidMount() {
    this.blogItem()
  }

  blogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updated = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogContent: updated, isLoading: false})
  }

  render() {
    const {blogContent, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="item-container">
        <h1>{blogContent.title}</h1>
        <div className="card">
          <img src={blogContent.avataUrl} className="avatar_url" alt="avatar" />
          <p>{blogContent.author}</p>
        </div>
        <img
          src={blogContent.imageUrl}
          className="image_url"
          alt={blogContent.title}
        />
        <p>{blogContent.content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
