import prisma from "@/lib/db";
import {createPaginator} from "prisma-pagination";
import {BookCategory} from "@/interface/BookCategory";
import {Prisma} from "@prisma/client";

export const getCategories = async (request: { search: string | null; page: string }) => {
    const paginate = createPaginator({ perPage: 10 });

    const whereCondition = request.search ? { name: request.search } : {};
    return await paginate<BookCategory, Prisma.BookCategoriesFindManyArgs>(
        prisma.bookCategories,
        {where: whereCondition},
        {page: request.page}
    );
};


export const getCategoryById = async (id:string) => {
    return prisma.bookCategories.findUnique({
        where: { id }
    });
};

export const createCategory = async (name: string) => {
    return prisma.bookCategories.create({
        data: {name}
    });
};

export const updateCategory = async (id: string, name: string) => {
    return prisma.bookCategories.update({
        where: { id },
        data: { name }
    });
};

export const deleteCategory = async (id: string) => {
    return prisma.bookCategories.delete({
        where: { id }
    });
};
