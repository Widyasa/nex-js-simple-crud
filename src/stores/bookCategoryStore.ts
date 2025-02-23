import {create} from "zustand/react";
import {BookCategoryState} from "@/interface/BookCategory";

export const bookCategoryStore = create<BookCategoryState>((set) => ({
    categories: [],
    category: {id: "", name: ""},
    loading: false,
    error: "",
    status: 0,
    id: "",
    getBookCategory: async () => {
        try {
            set({loading:true})
            await fetch(`/api/book-category`)
                .then(res => res.json())
                .then(data => set({categories: data}))
                .catch(e => set({error: e.message}))
        } catch (e) {
            if (e instanceof Error) {
                set({error: e.message})
            } else {
                set({error: "An unexpected error occurred"})
            }
        }
        finally {
            set({loading:false})
        }
    },
    getBookCategoryById: async (id:string) => {
        try {
            set({loading:true})
            await fetch(`/api/book-category/${id}`)
                .then(res => res.json())
                .then(data => set({category: data}))
                .catch(e => set({error: e.message}))
        } catch (e) {
            if (e instanceof Error) {
                set({error: e.message})
            } else {
                set({error: "An unexpected error occurred"})
            }
        } finally {
            set({loading:false})
        }
    },
    createBookCategory: async (name:string) => {
        try {
            set({loading:true})
            await fetch(`/api/book-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name})
            })
                .then(res => res.json())
                .then(data => set({category: data}))
                .catch(e => set({error: e.message}))
        } catch (e) {
            if (e instanceof Error) {
                set({error: e.message})
            } else {
                set({error: "An unexpected error occurred"})
            }
        } finally {
            set({loading:false})
        }
    },
    updateBookCategory: async (id:string, name:string) => {
        try {
            set({loading:true})
            await fetch(`/api/book-category`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, name })
            })
                .then(res => res.json())
                .then(data => set({category: data}))
                .catch(e => set({error: e.message}))
        } catch (e) {
            if (e instanceof Error) {
                set({error: e.message})
            } else {
                set({error: "An unexpected error occurred"})
            }
        } finally {
            set({loading:false})
        }
    },
    deleteBookCategory: async (id:string) => {
        try {
            set({loading:true})
            await fetch(`/api/book-category`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id})
            })
                .then(res => res.json())
                .then(data => set({category: data}))
                .catch(e => set({error: e.message}))
        } catch (e) {
            if (e instanceof Error) {
                set({error: e.message})
            } else {
                set({error: "An unexpected error occurred"})
            }
        } finally {
            set({loading:false})
        }
    }
}))