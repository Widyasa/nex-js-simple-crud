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
    error: string
    status: number
    id: string
    getBookCategory: () => void
    getBookCategoryById: (id: string) => void
    createBookCategory: (name: string) => void
    updateBookCategory: (id: string, name: string) => void
    deleteBookCategory: (id: string) => void
}