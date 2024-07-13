import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Avatar } from "../ui/avatar";

function Header() {
  return (
    <div className="flex justify-between items-center border-b-[1px] border shadow-sm p-2 px-8">
      <header className="font-bold">Coordinator</header>
      <div className="flex items-center gap-2">
        <IoNotificationsOutline size={20} />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
