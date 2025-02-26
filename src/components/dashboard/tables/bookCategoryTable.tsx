"use client";

import { bookCategoryStore } from "@/stores/bookCategoryStore";
import { useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Searchbar from "@/components/dashboard/searchbar";
import {PaginationWithLinks} from "@/components/ui/pagination-with-link";
import {useSearchParams} from "next/navigation";


export default function BookCategoryTable() {
    const params = useSearchParams()
    const { categories, loading, getBookCategory } = bookCategoryStore();
    const currentPage = parseInt((params.get('page') as string) || '1');
    useEffect(() => {
        getBookCategory('', currentPage);
    }, [currentPage, getBookCategory]);
    const handleChange = (e:string) => {
        if (e) {
            getBookCategory(e)
        } else {
            getBookCategory()
        }
    }
    return (
        <>
            <div className="mt-5 mb-3">
                <Searchbar handleChange={handleChange}/>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Name</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell>Loading...</TableCell>
                        </TableRow>
                    ) : (
                        categories.map(({id, name}) => (
                            <TableRow key={id}>
                                <TableCell>{name}</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <PaginationWithLinks
                totalCount={4}
                pageSize={10}
                page={currentPage}
            />
        </>
    );
}
