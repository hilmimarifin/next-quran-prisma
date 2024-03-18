"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src={session.user.image ?? ""}
                alt={session.user.name ?? ""}
                className=" rounded-full"
                width={32}
                height={32}
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li className="border-b">
              <p className="text-sky-600">{session.user.name}</p>
            </li>
            <li><a>Settings</a></li>
            <li>
              <button onClick={() => signOut()} className="text-red-600">
                Sign Out
              </button>
            </li>
          </ul>
        </div>

      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
