import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import oc from "../img/OC.jpg";
import axios from "axios";
import { Spinner } from 'reactstrap';
import Article from '../component/Article';

const News = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(res => {
            // console.log(res.data.posts)
            setPosts(res.data.posts)
            setIsLoading(false);
        })
        .then(console.log());
    }, [])

    return (
        <div>
            <Header title="Actualités" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra. Consequat ac felis donec et odio pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. In hendrerit gravida rutrum quisque non. Bibendum ut tristique et egestas. Justo donec enim diam vulputate. Mauris augue neque gravida in fermentum et sollicitudin. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Duis convallis convallis tellus id interdum velit. Phasellus faucibus scelerisque eleifend donec. Urna cursus eget nunc scelerisque viverra mauris. Lacinia at quis risus sed. Aliquam vestibulum morbi blandit cursus risus at." url={oc}/>
            {/* <h1>Actualités</h1> */}
            <div className='text-light grille text-center m-5'>
                <>
                    {isLoading ? (
                        <>
                        <Spinner
                          className="m-5"
                          color="primary"
                          style={{
                            height: '30vw',
                            width: '30vw'
                          }}
                        >
                          Loading...
                        </Spinner></>
                    ) : (
                        posts.map((post) => {
                            // console.log(post.body.length);
                            let text;
                            post.body.length >= 75 ? text = post.body.slice(0, 75).concat("...") : text = post.body
                            return <Article alte={post.id} image="https://picsum.photos/300/200" title={post.title} subtitle={post.tags.join(" / ")} body={text} lien={post.id} />
                        })
                    )}
                </>
            </div>

        </div>
    );
};

export default News;