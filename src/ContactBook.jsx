import { useState } from 'react'
import useContactStore from './contactEvents';

const ContactBook = () =>{
  const[formData, setFormData] = useState({
    FirstName:'',
    LastName : '',
    Email: '',
    PhoneNumber: '',
    image: 'null'

  })

  const addContact = useContactStore((state) =>state.addContact);
  
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleImage = (e)=>{
    setFormData({...formData, image:e.target.files[0]});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addContact(formData);
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>First Name:  </label>
      <input type="text" name='FirstName' value={formData.FirstName}  onChange={handleChange}required />
      </div>
      <div>
      <label>Last Name: </label>
      <input type="text" name='LastName' value={formData.LastName} onChange={handleChange}required />
      </div>
      <div>
      <label>Email Address: </label>
      <input type="email" name='Email' value={formData.Email} onChange={handleChange}required/>
      </div>
      <div>
      <label>Phone Number: </label>
      <input type="number" name='PhoneNumber' value={formData.PhoneNumber} onChange={handleChange}required />
      </div>
      <div>
      <label>Image:  </label>
      <input type="file"accept="image/*" onChange={handleImage} />
      </div>
      <button type="submit">Submit</button>
      
    </form>

  )}

export default ContactBook;
