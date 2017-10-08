import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions";

class PostsNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return(
            <div className={className   }>
                <label htmlFor="">{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
                <div className="text-danger">{touched ? error : ""}</div>
            </div>
        );
    }

    onSubmit(values) {
        // this === component
        this.props.createPost(values, () => {this.props.history.push("/")});
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            // Если с формой всё нормально, то вызовем onSubmit
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate inputs
    if(values.title && values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }

    if(!values.title) {
        errors.title = "Enter a title!";
    }

    if(!values.categories) {
        errors.categories = "Enter some categories";
    }

    if(!values.content) {
        errors.content = "Enter some content";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: "PostsNewForm" // Name of the form. Must be unique!
})(
    connect(null, {createPost})(
        withRouter(PostsNew)
    )
);

