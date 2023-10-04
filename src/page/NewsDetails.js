import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Spinner } from 'reactstrap';

const NewsDetails = () => {
    const {slug} = useParams();
    let id = slug.split("-")[1]

    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://dummyjson.com/posts/'+id)
        .then(res => {
            // console.log(res.data)
            setPost(res.data)
            setIsLoading(false);
        })
        .then(console.log());
    }, [])

    const [coms, setComs] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true)
    useEffect(() => {
        axios.get("https://dummyjson.com/comments/post/"+id)
        .then(res => {
            // console.log(res.data.comments)
            setComs(res.data.comments)
            setIsLoading2(false);
        })
        .then(console.log());
    }, [])

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => { const { name, value } = event.target; if (name === "username") { setUsername(value); } else if (name === "message") { setMessage(value); } };

    // useEffect(() => { const username = localStorage.getItem("username"); const message = localStorage.getItem("message"); if (username) { setUsername(username); } if (message) { setMessage(message); } }, []);
    // useEffect(() => { localStorage.setItem("username", username); localStorage.setItem("message", message); }, [username, message]);

    const handleSubmit = (event) => { 
        // Empêcher le comportement par défaut du formulaire 
        event.preventDefault(); 
        // Stocker les données du formulaire dans le localStorage 
        localStorage.setItem("username", username);
        localStorage.setItem("message", message);
        localStorage.setItem("id",id)

    }

    return (
        <div className='text-light m-5'>
            <>
                {isLoading ? (
                    <>
                    <div className='d-flex justify-content-center'>
                        <Spinner
                          className="m-5"
                          color="primary"
                          style={{
                            height: '30vw',
                            width: '30vw'
                          }}
                        >
                          Loading...
                        </Spinner>
                    </div>

                    </>
                ) : (
                    <>
                        <h1 className='text-center'>{post.title}</h1>
                        <p className='m-5 text-center'><i>{post.body}</i></p>
                        <h2>H2-1</h2>
                        <p className='m-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit. Elementum curabitur vitae nunc sed. Quis varius quam quisque id diam vel quam elementum. Vitae turpis massa sed elementum tempus. Nulla facilisi etiam dignissim diam quis enim lobortis. Consequat mauris nunc congue nisi. Magna fringilla urna porttitor rhoncus dolor. Dui accumsan sit amet nulla facilisi morbi. Etiam tempor orci eu lobortis. Lorem ipsum dolor sit amet consectetur adipiscing. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Nulla facilisi nullam vehicula ipsum a arcu. Lectus arcu bibendum at varius vel.
                        </p>
                        <h2>H2-2</h2>
                        <h3 className='m-3'>H3-2-1</h3>
                        <p className='m-4'>
                        Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Netus et malesuada fames ac turpis egestas sed tempus. Laoreet id donec ultrices tincidunt arcu. Ultricies tristique nulla aliquet enim tortor. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Blandit libero volutpat sed cras ornare arcu. Eu consequat ac felis donec et odio pellentesque diam volutpat. Dui accumsan sit amet nulla facilisi. Eget arcu dictum varius duis at. Pellentesque diam volutpat commodo sed egestas egestas. Magna sit amet purus gravida quis blandit turpis cursus.
                        </p>
                        <h3 className='m-3'>H3-2-2</h3>
                        <p className='m-4'>
                        Dui ut ornare lectus sit amet est placerat in. At volutpat diam ut venenatis tellus in metus. Nullam non nisi est sit amet facilisis magna etiam tempor. Placerat vestibulum lectus mauris ultrices eros in. Sit amet justo donec enim diam vulputate ut pharetra sit. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Lectus nulla at volutpat diam ut venenatis tellus in metus. Mauris nunc congue nisi vitae. Aliquam faucibus purus in massa tempor. Nisi quis eleifend quam adipiscing vitae proin sagittis.
                        </p>

                        <h5>Commentaire(s)</h5>
                        <section className='grille m-4' id="com">
                        {coms.map((com) => {
                            console.log(com);
                            return (
                            <>
                            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <strong className="me-auto">{com.user.username}</strong>
                                    <small>il y a {Math.round(Math.random()*22)+1} h</small>
                                </div>
                                <div className="toast-body text-dark">
                                    {com.body}
                                </div>
                            </div>
                            </>
                            )
                        })}
                        {localStorage.getItem("username") && localStorage.getItem("message") && localStorage.getItem("id")==id ? 
                        (
                            <>
                            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <strong className="me-auto">{localStorage.getItem("username")}</strong>
                                    <small>il y a {Math.round(Math.random()*22)+1} h</small>
                                </div>
                                <div className="toast-body text-dark">
                                    {localStorage.getItem("message")}
                                </div>
                            </div>
                            </>
                        ) : (
                            ""
                        )}
                        </section>
                        <h6>Ajouter un commentaire</h6>
                        <form className='text-black m-5' method='post' onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPseudo" placeholder="Votre pseudo" name='username' value={username} onChange={handleChange}></input>
                                <label htmlFor="floatingPseudo">Pseudo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Votre message" id="floatingTextarea" name='message' value={message} onChange={handleChange} style={{height: 6.25 + 'rem'}}></textarea>
                                <label htmlFor="floatingTextarea">Message</label>
                            </div>
                            <div className='d-flex mb-3 justify-content-between align-items-center'>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label text-white" htmlFor="exampleCheck1">J'accepte les CGU</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Commenter</button>
                            </div>
                        </form>
                    </>
                )}
            </>
        </div>
    );
};

export default NewsDetails;