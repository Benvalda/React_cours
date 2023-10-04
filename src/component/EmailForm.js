import React, { useState } from 'react';
import emailjs from 'emailjs-com';
function EmailForm() {
    const [formData, setFormData] = useState({
    sujet: '',
    from_name: '',
    to_name: '',
    message: '',
    });
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value,
    });
    };
    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
    'service_5mv6wyj',
    'template_kp07qr8',
    formData,
    'kjZTGtp_KOBIs5Xet'
    )
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    };
    return (
    <form onSubmit={handleSubmit} className='m-5'>
        <div className="mb-3">
            <label for="nom" className="form-label">Votre nom</label>
            <input type="text" className="form-control" id="nom" name="from_name" onChange={handleInputChange} required></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email du destinataire</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="to_name" onChange={handleInputChange} required></input>
        </div>
        <div className="mb-3">
            <label for="sujet" className="form-label">Sujet</label>
            <input type="text" className="form-control" id="sujet" name='sujet' onChange={handleInputChange} required></input>
        </div>
        <div className='mb-3'>
            <label for="floatingTextarea">Message</label>
            <textarea className="form-control" placeholder="Veuillez écrire votre message ici." id="floatingTextarea" name="message" onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
    );
}
export default EmailForm;