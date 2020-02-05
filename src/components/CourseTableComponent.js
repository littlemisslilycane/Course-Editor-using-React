import React from "react";
import CourseTableRow from "./CourseTableRow";

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor,toggle})=>
    <div className = "bg-light border-bottom">
     <div className="row wbdv-row  font-weight-bold border-bottom  p-3 ">
             <div className="col-sm-6">
               Title
             </div>
             <div className="col-sm-2 d-none d-sm-block ">Owned By</div>
             <div className="col-sm-2 d-none d-sm-block ">Last Modified By</div>
             <div className="col-sm-2">
             <i onClick = {toggle }class="fa fa-th pr-5 wbdv-button
             wbdv-grid-layout"></i>
             </div>
           </div>
            {
                courses.map(function(course, index) {
                    return <CourseTableRow
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
    </div>
export default CourseTableComponent