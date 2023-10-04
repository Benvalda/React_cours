import React from 'react';
import Header from '../component/Header';
import oc from "../img/OC.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header title="Acceuil" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra. Consequat ac felis donec et odio pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. In hendrerit gravida rutrum quisque non. Bibendum ut tristique et egestas. Justo donec enim diam vulputate. Mauris augue neque gravida in fermentum et sollicitudin. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Duis convallis convallis tellus id interdum velit. Phasellus faucibus scelerisque eleifend donec. Urna cursus eget nunc scelerisque viverra mauris. Lacinia at quis risus sed. Aliquam vestibulum morbi blandit cursus risus at." url={oc} />
            {/* <h1>Acceuil</h1> */}
            <div className='text-light'>
                <section className='d-flex justify-content-around align-items-center m-5 bg-secondary' id='about'>
                    <div className='w-75'><img src='https://picsum.photos/1500/1000' alt='about'></img></div>
                    <div className='w-50 p-5'>
                        <p>At consectetur lorem donec massa sapien faucibus et. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mauris a diam maecenas sed enim ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Integer quis auctor elit sed vulputate mi sit amet mauris. Convallis posuere morbi leo urna molestie. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Phasellus vestibulum lorem sed risus.</p>
                        <Link to="/about"><button type='button' className='btn btn-primary'>A propos</button></Link>
                    </div>
                </section>
                <section className='d-flex justify-content-around align-items-center m-5 bg-secondary' id='news'>
                    <div className='w-50 p-5'>
                        <p>At consectetur lorem donec massa sapien faucibus et. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mauris a diam maecenas sed enim ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Integer quis auctor elit sed vulputate mi sit amet mauris. Convallis posuere morbi leo urna molestie. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Phasellus vestibulum lorem sed risus.</p>
                        <Link to="/news"><button type='button' className='btn btn-primary'>Actualités</button></Link>
                    </div>
                    <div className='w-75'><img src='https://picsum.photos/1500/1000' alt='news'></img></div>
                </section>
                <section className='d-flex justify-content-around align-items-center m-5 bg-secondary' id='faq'>
                    <div className='w-75'><img src='https://picsum.photos/1500/1000' alt='faq'></img></div>
                    <div className='w-50 p-5'>
                        <p>At consectetur lorem donec massa sapien faucibus et. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mauris a diam maecenas sed enim ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Integer quis auctor elit sed vulputate mi sit amet mauris. Convallis posuere morbi leo urna molestie. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Phasellus vestibulum lorem sed risus.</p>
                        <Link to="/faq"><button type='button' className='btn btn-primary'>FAQ</button></Link>
                    </div>
                </section>
                <section className='d-flex justify-content-around align-items-center m-5 bg-secondary' id='contact'>
                    <div className='w-50 p-5'>
                        <p>At consectetur lorem donec massa sapien faucibus et. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus laoreet non curabitur gravida arcu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mauris a diam maecenas sed enim ut. Condimentum lacinia quis vel eros donec ac odio tempor orci. Integer quis auctor elit sed vulputate mi sit amet mauris. Convallis posuere morbi leo urna molestie. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Phasellus vestibulum lorem sed risus.</p>
                        <Link to="/contact"><button type='button' className='btn btn-primary'>Contacts</button></Link>
                    </div>
                    <div className='w-75'><img src='https://picsum.photos/1500/1000' alt='contact'></img></div>
                </section>
            </div>
        </div>
    );
};

export default Home;