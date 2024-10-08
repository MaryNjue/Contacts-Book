import { create } from "zustand";

const useContactStore = create((set)=>({contacts : [],
    addContact : (contact)=> set((state) =>({
        contacts:[...state.contacts, contact]
    })),
    deleteContact: (index) => set((state) => ({
        contacts: state.contacts.filter((_, i) => i !== index), 
      })),
}));

export default useContactStore;