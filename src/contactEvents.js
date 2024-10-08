import { create } from "zustand";

const useContactStore = create((set)=>({contacts : [],
    addContact : (contact)=> set((state) =>({
        contact:[...state.contacts, contact]
    }))
}))

export default useContactStore;