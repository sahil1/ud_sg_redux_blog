import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    if(!this.props.post) {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // posts[this.props.match.params.id]; //the post we want to show
    const { post } = this.props;

    if(!post) {
      return <div>Loading..</div>
    }

    return (
      <div>
       <Link to="/">Back to Index</Link>
       <button
        className="btn btn-danger pull-md-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post
       </button>
       <h3>{post.title}</h3>
       <h6>Categories: {post.categories}</h6>
       <p>{post.content}</p>
      </div>
    );
  }
}

//ownProps is the props object that is headed/going to the PostsShow component
//Whenever this component is about to be re-rendered mapStateToProps gets called to fig out
//props that component needs and mapStateToProps is passed all props to PostsShow
function mapStateToProps({ posts }, ownProps){
  // return { posts };
  return { post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
