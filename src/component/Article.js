import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const Article = ({alte, image, title, subtitle, body, lien}) => {
    return (
            <Card
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt={alte}
                    src={image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {title}
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {subtitle}
                    </CardSubtitle>
                    <CardText>
                    {body}
                    </CardText>
                    <Link to={"article-"+lien}>
                    <Button color='primary'>
                        Read
                    </Button>
                    </Link>

                </CardBody>
            </Card>
    );
};

export default Article;