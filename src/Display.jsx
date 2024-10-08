import { useState } from "react";
import useContactStore from "./contactEvents";

const ContactList = () => {
  const contacts = useContactStore((state) => state.contacts);
  const deleteContact = useContactStore((state) => state.deleteContact);
  const updateContact = useContactStore((state) => state.updateContact);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null); 
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (index) => {
    const contact = contacts[index];
    setFormData(contact); 
    setCurrentIndex(index); 
    setIsEditing(true); 
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateContact(currentIndex, formData);
    setIsEditing(false); 
    setFormData({ FirstName: "", LastName: "", Email: "", PhoneNumber: "", image: null });
  };

  return (
    <div>
      <h1>Your Contacts</h1>
      {contacts.length === 0 ? (
        <p>No contacts added yet</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <h3>
                {contact.FirstName} {contact.LastName}
              </h3>
              <p>Phone Number: {contact.PhoneNumber}</p>
              <p>Email: {contact.Email}</p>
              {contact.image && (
                <img
                  src={URL.createObjectURL(contact.image)}
                  alt={contact.FirstName}
                  width="100"
                />
              )}
              <button onClick={() => deleteContact(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button> 
            </li>
          ))}
        </ul>
      )}

      
      {isEditing && (
        <form onSubmit={handleUpdate}>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email Address: </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number: </label>
            <input
              type="number"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Image: </label>
            <input type="file" accept="image/*" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default ContactList;
