import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommentAsync, updateCommentAsync, voteCommentAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import Loading from 'react-loading'

class CommentView extends Component {
  state = {
    status: 'view',
    body: null,
    author: null
  }

  componentDidMount() {
    const { comment } = this.props
    this.setState({
      body: comment.body,
      author: comment.author
    })
  }

  editComment() {
    this.setState({
      status: 'edit'
    })
  }

  onEdit(value) {
    //on keypress enter call saveEditedComment
  }

  saveEditedComment() {

  }

  deleteComment() {

  }

  render() {
    const { status, body, author } = this.state
    console.log('body',body,'author',author)
    const { comment } = this.props
    const { deleteComment } = this.props
    const { editComment } = this.props
    const { voteComment } = this.props

    return (
      <div>
        {comment ? (
        <div className="row">
          <div className="col-md-2">{comment.voteScore}</div>
          <div className="col-md-2">{status == 'view' ? body : (<input type="text" className="input-text" defaultValue={body} onChange={(e) => this.onEdit(e.target.value)} onBlur={() => this.setState({status: 'view'})}/>)}</div>
          <div className="col-md-2">{status == 'view' ? author : (<input type="text" className="input-text" defaultValue={author} onChange={(e) => this.onEdit(e.target.value)} onBlur={() => this.setState({status: 'view'})}/>)}</div>
          <div className="col-md-2">{formatDate(comment.timestamp)}</div>
          <div className="col-md-2">
            <button className="btn btn-secondary button-space" type="button" onClick={() => this.editComment(comment.id)}><FaEdit/></button>
            <button className="btn btn-default" type="button" onClick={() => this.deleteComment(comment.id)}><FaTrash/></button>
          </div>
          <div className="col-md-2">
            <button className="btn" type="button" onClick={() => voteComment(comment.id)}><FaChevronUp/></button>
            <button className="btn" type="button" onClick={() => voteComment(comment.id)}><FaChevronDown/></button>
          </div>
        </div>) : null}
      </div>
    )
  }
}

export default CommentView
