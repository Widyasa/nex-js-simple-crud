"use client";

import { bookCategoryStore } from "@/stores/bookCategoryStore";
import { useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BookCategoryTable() {
    const { categories, loading, getBookCategory } = bookCategoryStore();

    useEffect(() => {
        getBookCategory();
    }, [getBookCategory]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <TableRow>
                        <TableCell>Loading...</TableCell>
                    </TableRow>
                ) : (
                    categories.map(({ id, name }) => (
                        <TableRow key={id}>
                            <TableCell>{name}</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}
