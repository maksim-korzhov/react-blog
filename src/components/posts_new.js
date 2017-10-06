import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostsNew extends Component {
    renderField(field) {
        return(
            <div className="form-group">
                <label htmlFor="">{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: "PostsNewForm" // Name of the form. Must be unique!
})(PostsNew);