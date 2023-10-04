import React from 'react';
import Header from '../component/Header';
import oc from "../img/OC.jpg";
import EmailForm from '../component/EmailForm';

const Contact = () => {
    return (
        <div>
            <Header title="Contacts" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra. Consequat ac felis donec et odio pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. In hendrerit gravida rutrum quisque non. Bibendum ut tristique et egestas. Justo donec enim diam vulputate. Mauris augue neque gravida in fermentum et sollicitudin. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Duis convallis convallis tellus id interdum velit. Phasellus faucibus scelerisque eleifend donec. Urna cursus eget nunc scelerisque viverra mauris. Lacinia at quis risus sed. Aliquam vestibulum morbi blandit cursus risus at." url={oc}/>
            {/* <h1>Contacts</h1> */}
            <section id='contact' className='text-light'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            Tel : 000 000 000
                        </div>
                        <div className="col">
                            Email : nom.prenom@email.com
                        </div>
                    </div>
                </div>
                <EmailForm/>
            </section>
        </div>
    );
};

export default Contact;