import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receivePostsAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Modal from 'react-modal'
import NewPost from './NewPost'

class Main extends Component {
  state = {
    newPostModalOpen: false,
    loadingPost: false,
  }

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }
  newPostModal = () => this.setState(() => ({ newPostModalOpen: true }))
  newPostModal = () => this.setState(() => ({ newPostModalOpen: false }))
  generateNewPost = () => {}
  render() {
    const { newPostModalOpen } = this.state
    const { posts } = this.props.forum

    return (
      <div>

        <div className='forum'>
          <table className='forum-table'>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td><FaChevronUp /><FaChevronDown /></td>
                  <td>{post.voteScore}</td>
                  <td>{post.category}</td>
                  <td><Link to={{
                    pathname: `/post/${post.id}`,
                    state: {
                      category: post.category
                    }
                  }}>{post.title}</Link></td>
                  <td>{post.author}</td>
                  <td>{formatDate(post.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={newPostModalOpen}
        onRequestClose={this.newPostModal}
        contentLabel='Modal'
      >
        {newPostModalOpen && <NewPost list={this.generateNewPost()}/>}
      </Modal>
</div>
    )
  }
}

function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(Main)
