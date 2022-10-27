import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://10th-assignment-25-10-22-server.vercel.app/category/')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);


    return (
        <div className='mx-4 my-4'>
            <h4> {category.length} Categories: </h4>
            <ListGroup>
                {
                    category.map(
                        course =>
                            <Link to={`/category/${course.id}`} key={course.id}>
                                <ListGroup.Item                                    
                                    action
                                    variant="light">
                                    {course.categoryName}
                                </ListGroup.Item>
                            </Link>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;