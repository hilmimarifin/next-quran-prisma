import Link from "next/link"
import SigninButton from "./SigninButton"

const Navbar =  ({ className }: { className?: string }) => {
    return (
        <section className={`${className}`}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <Link href={"/modal-bookmark"} >
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center">
                    <div className="flex-1">
                        <Link href={"/"} scroll={false}>
                            <span className="btn btn-ghost text-xl">Quran App</span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <SigninButton />
                </div>
            </div>
        </section>
    )
}

export default Navbar