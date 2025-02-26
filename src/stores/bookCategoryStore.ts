import {create} from "zustand/react";
import {BookCategoryState, PostCategory} from "@/interface/BookCategory";
import {AxiosInstance} from "@/utils/axios";

type SetState = (state: Partial<BookCategoryState>) => void;
const handleError = (set: SetState, error: unknown) => {
    const message = error instanceof Error ? error.message : "An unexpected error occurred";
    set({ error: message });
};
export const bookCategoryStore = create<BookCategoryState>((set, get) => ({
    categories: [],
    category: {id: "", name: ""},
    search: "",
    page: 1,
    totalPage: 0,
    loading: false,
    loadingCrud: false,
    error: "",
    status: 0,
    id: "",
    getBookCategory: async (searchData?:string, pageSelected?:number) => {
        try {
            set ({
                loading:true,
                search: searchData || '',
                page: pageSelected || 1
            })
            const {search, page} = get()
            const params = { page, ...(search && { search }) };
            const res = await AxiosInstance.get(`/api/book-category`, { params });
            set({categories: res.data.data})
        } catch (e) {
            handleError(set, e)
        }
        finally {
            set({
                search: '',
                page: 1,
                loading: false
            })
        }
    },
    getBookCategoryById: async (id:string) => {
        try {
            set({loadingCrud:true})
            const res = await AxiosInstance.get(`/api/book-category/${id}`)
            set({category: res.data})
        } catch (e) {
            handleError(set, e)
        } finally {
            set({loadingCrud:false})
        }
    },
    createBookCategory: async (data:PostCategory) => {
        try {
            set({loadingCrud:true})
            await AxiosInstance.post(`/api/book-category`, {
                ...data
            })
        } catch (e) {
            handleError(set, e)
        } finally {
            set({loadingCrud:false})
        }
    },
    updateBookCategory: async (id:string, data:PostCategory) => {
        try {
            set({loadingCrud:true})
            await AxiosInstance.patch(`/api/book-category`, {
                ...data
            })
        } catch (e) {
            handleError(set, e)
        } finally {
            set({loadingCrud:false})
        }
    },
    deleteBookCategory: async (id:string) => {
        try {
            set({loadingCrud:true})
            await AxiosInstance.delete(`/api/book-category`, {
                data:{
                    id:id
                }
            })
        } catch (e) {
            handleError(set, e)
        } finally {
            set({loadingCrud:false})
        }
    }
}))