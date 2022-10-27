import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/category/')
        .then( res => res.json())
        .then(data => setCategory(data));
    }, []);


    return (
        <div>
            <h4>All Category: {category.length}</h4>
            <div>
                {
                    category.map(
                        course => 
                        <p key={course.id}>
                            <Link to={`/category/${course.id}`}>
                                {course.categoryName}
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;