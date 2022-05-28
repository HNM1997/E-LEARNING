import React, { Component } from "react";

import CourseItem from "../../Component/CouresItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../redux/actions/UserAction";


class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this.props.couresList.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <CourseItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses())
  }
}

const mapStateToProps = (state) => ({
  couresList: state.CouresReducer.coures,
});

export default connect(mapStateToProps)(HomeScreen);
