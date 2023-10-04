import React from 'react';
import Header from '../component/Header';
import { Link, Outlet } from 'react-router-dom';
import oc from "../img/OC.jpg";

const About = () => {
    return (
        <div>
            <Header title="A propos" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra. Consequat ac felis donec et odio pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. In hendrerit gravida rutrum quisque non. Bibendum ut tristique et egestas. Justo donec enim diam vulputate. Mauris augue neque gravida in fermentum et sollicitudin. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Duis convallis convallis tellus id interdum velit. Phasellus faucibus scelerisque eleifend donec. Urna cursus eget nunc scelerisque viverra mauris. Lacinia at quis risus sed. Aliquam vestibulum morbi blandit cursus risus at." url={oc}/>
            {/* <h1 className=''>A propos</h1> */}
            <p className='m-5 text-light'>
            Auctor augue mauris augue neque gravida. Integer enim neque volutpat ac. Auctor eu augue ut lectus. Posuere lorem ipsum dolor sit amet. Non curabitur gravida arcu ac. Eget lorem dolor sed viverra ipsum. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Laoreet suspendisse interdum consectetur libero. Tristique senectus et netus et malesuada. Sed libero enim sed faucibus. Elit eget gravida cum sociis natoque penatibus et magnis. Gravida arcu ac tortor dignissim convallis aenean et tortor. Sit amet massa vitae tortor condimentum lacinia. Tortor pretium viverra suspendisse potenti nullam ac. Eu augue ut lectus arcu bibendum at varius. Sed pulvinar proin gravida hendrerit lectus a.
            </p>

            <div className='m-4 text-light'>
                <h2 className='text-center m-4'>Nous connaitre</h2>
                <section className='d-flex justify-content-center align-items-center gap-3'>
                    <Link className="btn btn-primary" to="nos-missions" role="button">Nos missions</Link>
                    <Link className="btn btn-primary" to="nos-valeurs" role="button">Nos valeurs</Link>
                    <Link className="btn btn-primary" to="nos-chiffres" role="button">Nos chiffres</Link>
                </section>
                <p className='text-center m-5 p-3 border border-primary rounded bg-secondary'>
                    <Outlet />
                </p>
            </div>
        </div>
    );
};

export default About;