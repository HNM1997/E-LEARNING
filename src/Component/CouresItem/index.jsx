import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseItem extends Component {
  render() {
    let { hinhAnh, tenKhoaHoc, nguoiTao,maKhoaHoc } = this.props.item;
    return (
      <div className="card p-2">
        <img src={hinhAnh} style={{ width: "100%", height: 200 }} />
      
          <p className="lead font-weight-bold">{tenKhoaHoc}</p>
          <p className="lead">Introduce: {nguoiTao.hoTen}</p>
          <p className="lead">Rating: 5.0</p>
          <Link to={`/detail/${maKhoaHoc}`} className="btn btn-success">Detail</Link>
        
      </div>
    );
  }
}

export default CourseItem;
