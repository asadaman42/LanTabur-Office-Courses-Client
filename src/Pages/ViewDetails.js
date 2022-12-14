import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const ViewDetails = () => {
    const details = useLoaderData();
    const { categoryName, description, id, imgURL, price } = details[0];
    return (
        <div className='text-center mx-5 my-5'>
            
            <Card ref={ref} className='h-50'>

                <Card.Header as="h3">{categoryName} <Pdf targetRef={ref} filename={categoryName}>
                    {({ toPdf }) => <Button onClick={toPdf}>PDF</Button>}
                </Pdf></Card.Header>
                <Card.Img variant="top" src={imgURL} className='w-50 mx-auto' />

                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Get the course for only {price}</Card.Title>
                    <Link to={`/checkout/${id}`}>
                        <Button variant="primary" className='w-100'>Get premium access</Button>
                    </Link>

                </Card.Body>

            </Card>
        </div>
    );
};

export default ViewDetails;