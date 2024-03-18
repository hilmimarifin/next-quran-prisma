"use client"

import { useSearchParams } from "next/navigation"

const ModalBottom = ({ children }: { children: React.ReactNode }) => {
    const qs = useSearchParams()
    const ayat = qs.get("ayat")
    return (
        <>
            {/* <button className="btn" onClick={() => (document?.getElementById('my_modal_1') as HTMLFormElement).showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <span>{children}{"  : "}{ayat}</span>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </>
    )
}

export default ModalBottom