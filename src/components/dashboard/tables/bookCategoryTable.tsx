"use client";

import { bookCategoryStore } from "@/stores/bookCategoryStore";
import {useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Searchbar from "@/components/dashboard/searchbar";
import {PaginationWithLinks} from "@/components/ui/pagination-with-link";
import {useSearchParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import BookCategoryDialog from "@/components/dashboard/dialogs/bookCategoryDialog";


export default function BookCategoryTable() {
    const params = useSearchParams()
    const { categories, loading, getBookCategory } = bookCategoryStore();
    const currentPage = parseInt((params.get('page') as string) || '1');
    const [open, setOpen] = useState(false)
    const [type, setType] = useState('')
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
    const modalHandler = (type:string) => {
        setOpen(true)
        setType(type)
    }
    return (
        <>
            <div className="mt-5 mb-3 flex w-full gap-3">
                <Searchbar handleChange={handleChange}/>
                <Button onClick={() => modalHandler('create')}>Add New</Button>
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
            <BookCategoryDialog
                open={open}
                setOpen={setOpen}
                type={type}
            />
        </>
    );
}
