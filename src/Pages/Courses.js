import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div>
            <h4 className='text-center'>
                All {courses.length} courses.
            </h4>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course =>
                        <Course
                            key={course.id}
                            id = {course.id}
                            name={course.categoryName}
                            description={course.description}
                            price={course.price}
                            imgURL={course.imgURL}
                        ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;