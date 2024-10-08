import useContactStore from "./contactEvents";

const ContactList =() =>{
    const contacts = useContactStore((state) =>state.contacts);
    return(
        <div>
            <h1>Your Contacts</h1>
            {contacts.length === 0 ? (
                <p>No contatcts added yet</p>) :
                (
                    <ul>
                        {contacts.map((contacts,index) =>(
                        <li key = {index}>
                            <h3>{contacts.FirstName} {contacts.LastName}</h3>
                            <p>Phone Number : {contacts.PhoneNumber}</p>
                            <p>Email : {contacts.Email}</p>
                            {contacts.image && (
                                <img src={URL.createObjectURL(contacts.image)} alt={contacts.FirstName} width="100" />
                            )}

                        </li>
                        ))}
                    </ul>
                )

            }

        </div>
    )
}
export default ContactList;
