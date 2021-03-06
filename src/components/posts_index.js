import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
    componentDidMount() {
        // Called when component mount in DOM
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="text-sm-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
                </div>

                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);