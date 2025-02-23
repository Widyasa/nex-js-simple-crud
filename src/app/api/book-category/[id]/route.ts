import {NextRequest, NextResponse} from "next/server";
import {getCategoryById} from "@/services/bookCategory";

export async function GET(_:NextRequest, { params }: { params: { id: string } }) {
    const {id} = params
    try {
        const categories = await getCategoryById(id)
        return NextResponse.json(categories)
    } catch (e) {
        if (e instanceof Error) {
            return NextResponse.json(e.message, {status: 500});
        }
        return NextResponse.json("An unexpected error occurred", {status: 500});
    }
}
