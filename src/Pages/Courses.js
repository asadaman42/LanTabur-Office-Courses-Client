import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='mx-5 my-5'>
            <h4 className='text-center my-5'>
                All {courses.length} courses.
            </h4>
            <Row xs={1} md={2} lg={3} className="g-5">
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