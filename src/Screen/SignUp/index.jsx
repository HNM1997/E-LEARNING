import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {signUpUserSchema} from '../../Services/User'
import { userService } from "../../Services";



export default class SignUp extends Component {
  handleSubmit = (values) => {
    console.log("value",values)
    userService
      .signUp(values)
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
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
              hoTen: "",
              soDT: "",
              maNhom: "GP01",
            }}
            validationSchema={signUpUserSchema}
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
                <div className="form-group">
                  <label className="font-weight-bold">Họ Tên:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage className="text-danger" name="hoTen" />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Email:</label>
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage className="text-danger" name="email" />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Số Điện Thoại:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="soDT"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <ErrorMessage className="text-danger" name="soDT" />
                <div className="form-group">
                  <label className="font-weight-bold">Mã Nhóm:</label>
                  <Field
                    component="select"
                    className="form-control"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                  >
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP010</option>
                  </Field>
                  <ErrorMessage className="text-danger" name="maNhom" />
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
