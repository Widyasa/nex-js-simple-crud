import {createCategory, deleteCategory, getCategories, updateCategory} from "@/services/bookCategory";
import {PostCategory} from "@/interface/BookCategory";
import {NextRequest, NextResponse} from "next/server";

export async function GET (req:NextRequest) {
    try {
        const {searchParams} = req.nextUrl
        const search = searchParams.get('search')
        const page = searchParams.get('page')!
        const categories = await getCategories({search, page})
        return NextResponse.json(categories)
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message)
            return NextResponse.json(e.message, {status: 500});
        }
        return NextResponse.json("An unexpected error occurred", {status: 500});
    }

}

export async function POST (req:PostCategory) {
    const {name} = req.body
    try {
        const category = await createCategory(name)
        return NextResponse.json(category)
    } catch (e) {
        if (e instanceof Error) {
            return NextResponse.json(e.message, {status: 500});
        }
        return NextResponse.json("An unexpected error occurred", {status: 500});
    }
}

export async function PATCH (req:PostCategory) {
    const {id, name} = req.body
    try {
        const category = await updateCategory(id, name)
        return NextResponse.json(category)
    } catch (e) {
        if (e instanceof Error) {
            return NextResponse.json(e.message, {status: 500});
        }
        return NextResponse.json("An unexpected error occurred", {status: 500});
    }
}

export async function DELETE (req:PostCategory) {
    const {id} = req.body
    try {
        const category = await deleteCategory(id)
        return Response.json(category)
    } catch (e) {
        if (e instanceof Error) {
            return Response.json(e.message, {status: 500});
        }
        return Response.json("An unexpected error occurred", {status: 500});
    }
}