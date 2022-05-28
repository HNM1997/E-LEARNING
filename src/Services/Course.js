import axios from "axios";


class CourseService {
    fetchCourse() {
        return axios({
            method: "GET",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        })
    }

    fetchCourseDetail(id) {
        return axios({
            method: "GET",
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
        })
    }
}

export default CourseService;