import React, { Component } from "react";
import { connect } from "react-redux";
import { createAtion } from "../../redux/actions/ElearningAction";
import { FETCH_COURSE_DETAIL } from "../../redux/types/ElearningType";
import { courseService } from "../../Services";

class CourseDetail extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(https://picsum.photos/2000)",
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid white",
              padding: "10px",
              background: "rgba(250,250,250,0.2)",
              borderRadius: "10px",
              width: "270px",
            }}
          >
            <img
              style={{ width: "250px", height: "250px", borderRadius: "10px" }}
              src={this.props.coursesDetail.hinhAnh}
            />
            <h3 style={{ color: "orange", marginTop: "10px" }}>
              {this.props.coursesDetail.tenKhoaHoc}
            </h3>
            <p style={{ color: "white" }}>{this.props.coursesDetail.moTa}</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    courseService
      .fetchCourseDetail(this.props.match.params.id)
      .then((res) =>
        this.props.dispatch(createAtion(FETCH_COURSE_DETAIL, res.data))
      )
      .catch((err) => console.log("err", err));
  }
}

const mapStateToProps = (state) => ({
  coursesDetail: state.CouresReducer.coursesDetail || {
    tenKhoaHoc: "",
    hinhAnh: "",
    maKhoaHoc: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});

export default connect(mapStateToProps)(CourseDetail);
