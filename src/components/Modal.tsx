"use client"

import { useRouter } from "next/navigation"
import { type ElementRef, useEffect, useRef } from "react"

const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, [])

    return (
        <dialog id="select_modal" className="modal" ref={dialogRef}>
            <div className="modal-box">
                <button onClick={() => router.back()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {children}
            </div>
        </dialog>

    )
}

export default Modal