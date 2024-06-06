import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogList from '../BlogList'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount = () => {
    this.blogList()
  }

  blogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }))
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList list={list} />
        )}
      </div>
    )
  }
}
export default Home
