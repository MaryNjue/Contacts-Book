import { create } from "zustand";

const useContactStore = create((set)=>({contacts : [],
    addContact : (contact)=> set((state) =>({
        contacts:[...state.contacts, contact]
    })),
    deleteContact: (index) => set((state) => ({
        contacts: state.contacts.filter((_, i) => i !== index), 
      })),
      updateContact: (index, updatedContact) =>
        set((state) => ({
          contacts: state.contacts.map((contact, i) =>
            i === index ? updatedContact : contact
          )
        })),
}));

export default useContactStore;