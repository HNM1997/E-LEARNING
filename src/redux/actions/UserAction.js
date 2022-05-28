import { courseService } from "../../Services/index";
import { FETCH_COURSES } from "../types/ElearningType";
import { createAtion } from "./ElearningAction";

export const fetchCourses = () => {
    return (dispatch) => {
        courseService
            .fetchCourse()
            .then((res) => {
                console.log(res.data);
                dispatch(createAtion(FETCH_COURSES, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}