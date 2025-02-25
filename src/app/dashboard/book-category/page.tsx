import Head from "next/head";
import BookCategoryTable from "@/components/dashboard/tables/bookCategoryTable";

export default function BookCategory(){

    return (
        <>
            <Head>
                <title>tes page title</title>
            </Head>
            <div className="p-10 bg-white rounded-xl">
                <h1 className="text-2xl font-semibold">Book Category Page</h1>
                <BookCategoryTable />
            </div>
        </>
    )
}