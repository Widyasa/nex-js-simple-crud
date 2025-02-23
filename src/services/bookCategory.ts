import prisma from "@/lib/db";

export const getCategories = async () => {
    return prisma.bookCategories.findMany();
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
