import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpUserSchema } from "../../Services/User";
import { connect } from "react-redux";
import { login } from "../../redux/actions/UAction";

class Register extends Component {
  handleSubmit = (values) => {
    console.log("first",values)
    this.props.dispatch(login(values));
  };
  render() {
    return (
      <div className="w-50 mx-auto border mt-2 bg-warning">
        <div className="p-3">
          <h1 className="display-5 text-center font-weight-bold text-primary">
            Sign Up
          </h1>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            onSubmit={this.handleSubmit}
            render={(formikProps) => (
              <Form action="">
                <div className="form-group">
                  <label className="font-weight-bold">Tài khoản:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage className="text-danger" name="taiKhoan" />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Mật Khẩu:</label>
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage className="text-danger" name="matKhau" />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default connect()(Register);
