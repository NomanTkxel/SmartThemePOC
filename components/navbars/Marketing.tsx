import React from "react";
import Link from "next/link";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className="navbar bg-teal-600 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src="/logo.png" alt="me" width="128" height="128" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/app">Application</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Marketing;
