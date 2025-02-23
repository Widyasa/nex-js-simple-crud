import prisma from "@/lib/db";

export async function GET() {

    const categories = await prisma.bookCategories.createMany({
        data: [
            {name: "Fiction"},
            {name: "Documentary"},
            {name: "Action"},
            {name: "Romance"}
        ]
    })
    return Response.json(categories)
}