"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "antd";
import styles from "@/components/main-header.module.css";
import logo from "@/assets/icons/logo.png";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();

  const getInitialActiveItem = (path) => {
    if (path.includes("/skills&exp")) {
      return "/skills&exp";
    } else if (path.includes("/projects")) {
      return "/projects";
    } else if (path.includes("/contact")) {
      return "/contact";
    } else {
      return "/";
    }
  };

  const [activeItem, setActiveItem] = useState(getInitialActiveItem(path));

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    setActiveItem(getInitialActiveItem(path));
  }, [path]);

  return (
    <header className="h-12 m-4 text-gray-400 border border-blue-200 rounded-xl">
      <ul className="flex items-center justify-around h-full">
        <li>
          <Link
            href="/"
            className="text-xl font-bold text-white"
            onClick={() => handleItemClick("/")}
          >
            <Image src={logo} width={70} height={70} alt="beeIcon"></Image>
          </Link>
        </li>
        <ul className="flex flex-row justify-center space-x-10">
          <li className={activeItem === "/" ? styles.active : ""}>
            <Link href="/" onClick={() => handleItemClick("/")}>
              Home
            </Link>
          </li>
          <li className={activeItem === "/skills&exp" ? styles.active : ""}>
            <Link
              href="/skills&exp"
              onClick={() => handleItemClick("/skills&exp")}
            >
              Skills and Experience
            </Link>
          </li>
          <li className={activeItem === "/projects" ? styles.active : ""}>
            <Link href="/projects" onClick={() => handleItemClick("/projects")}>
              Projects
            </Link>
          </li>
          <li className={activeItem === "/contact" ? styles.active : ""}>
            <Link href="/contact" onClick={() => handleItemClick("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <Switch checkedChildren="En" unCheckedChildren="Vi" defaultChecked />
      </ul>
    </header>
  );
}
