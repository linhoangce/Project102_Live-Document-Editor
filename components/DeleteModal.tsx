"use client";

import Image from "next/image";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { deleteDocument } from "@/lib/actions/room.actions";

const DeleteModal = ({ roomId }: DeleteModalProps) => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const deleteDocumentHandler = async () => {
		setLoading(true);

		try {
			await deleteDocument(roomId);
			setOpen(false);
		} catch (error) {
			console.log("Error deleting document: ", error);
		}

		setLoading(false);
	};
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
					<Image
						src="/assets/icons/delete.svg"
						alt="delete"
						width={20}
						height={20}
						className="mt-1"
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className="shad-dialog">
				<DialogHeader>
					<Image
						src="/assets/icons/delete-modal.svg"
						alt="delete"
						width={48}
						height={48}
						className="mb-4"
					/>
					<DialogTitle>Delete document</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this document? This action cannot be reversed.
					</DialogDescription>
				</DialogHeader>

        <DialogFooter className="mt-5">
          <DialogClose asChild className="w-full bg-dark-499 text-white">
            Cancel
          </DialogClose>

          <Button variant="destructive"
          onClick={deleteDocumentHandler}
          className="gradient-red w-full">
            {loading ? 'Deleteing...' : 'Delete'}
          </Button>

        </DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteModal;
