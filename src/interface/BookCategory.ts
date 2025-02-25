export interface PostCategory {
    body : {
        id: string
        name: string
    }
}

export interface BookCategory {
    id: string
    name: string
}

export interface BookCategoryState {
    categories: BookCategory[]
    category: BookCategory
    loading: boolean
    loadingCrud: boolean
    error: string
    status: number
    id: string
    getBookCategory: () => void
    getBookCategoryById: (id: string) => void
    createBookCategory: (data:PostCategory) => void
    updateBookCategory: (id: string, data:PostCategory) => void
    deleteBookCategory: (id: string) => void
}