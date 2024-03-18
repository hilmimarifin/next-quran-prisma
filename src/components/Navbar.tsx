import Link from "next/link"
import SigninButton from "./SigninButton"
import { bookmark } from "@/types/bookmark"
import ListBookmark from "./ListBookmark"
import { getListSurat } from "@/services/quran"
import { getBookmarks } from "@/app/api/bookmarks/services"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const Navbar = async({ className }: { className?: string }) => {
    const session = await getServerSession(authOptions)
    const bookmarks = await getBookmarks({userId : session?.user.id as string})
    const listSurat = await getListSurat()    
    return (
        <section className={`${className}`}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                            {bookmarks.data.map((bookmark : bookmark) => {
                                return (
                                    <li>
                                        <span>{bookmark.name}</span>
                                        <span>{bookmark.</span>
                                    </li>
                                )
                            })}
                        </ul> */}
                        <ListBookmark bookmarks={bookmarks} listSurat={listSurat} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"/>
                    </div>
                </div>
                <div className="navbar-center">
                    <div className="flex-1">
                        <Link href={"/"}>
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