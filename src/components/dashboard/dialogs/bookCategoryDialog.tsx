'use client'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
interface BookCategoryDialogProps {
    open: boolean
    setOpen: (value: boolean) => void
    type: string
}
export default function BookCategoryDialog(props:BookCategoryDialogProps) {
    return (
        <>
            <Dialog open={props.open} onOpenChange={props.setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'capitalize'}>{props.type} Book Category</DialogTitle>
                    </DialogHeader>
                    {props.type === 'delete' ?
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                        : props.type === 'create' ?
                            <DialogDescription>
                                create
                            </DialogDescription>
                        : props.type === 'update' ?
                            <DialogDescription>
                                update
                            </DialogDescription>
                            : props.type === 'detail' ?
                            <DialogDescription>
                                detail
                            </DialogDescription>
                            : null
                    }

                </DialogContent>
            </Dialog>
        </>
    )
}