import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  //By doing the ... all we are saying is we want all the props inside that to be part of input
  //Its job of this function and the reason we need this is so that we have control on the view layer
  renderTitleField(field){
    return(
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  //the meta.error property is automatically added to field.meta; they are connected by name property and so they should be identical here and in validate fucntion
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name = "title"
          component={this.renderTitleField}
        />
        <Field
          label="Categories"
          name = "categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name = "content"
          component={this.renderField}
        />
      </form>
    );
  }
}

//validate function is automatically called by redux form when user tries to submit the form as its been added to reduxForm
function validate(values) {
  //console.log(values) -> {title:' ', categories: ' ', content ' '}
  const errors = {};

  //Validate the inputs from 'values'
  if(!values.title){
    errors.title = "Enter a title!";
  }

  if(!values.categories){
    errors.categories = 'Enter some categories';
  }

  if(!values.content){
    errors.content = 'Enter some content please';
  }

  //If errors is empty, the form is fine to submit
  //If errors has *any* properties, redux form assums form is invalid
  return errors;
}

//By having a unique name such as PostsNewForm the redux form takes care of showing multiple forms across app on same screen
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
