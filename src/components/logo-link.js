'use client';
import Image from "next/image";
import DownloadButton from "./download-button";
import githubIcon from "@/assets/icons/github-logo.png";
import linkedIcon from "@/assets/icons/linked-logo.png";
import mailIcon from "@/assets/icons/mail-logo.png";
import styles from "@/components/logo-link.module.css"

export default function LogoLink() {
  return (
    <div className={`flex flex-col mt-20 space-y-10 ${styles.logoLink}`}>
      <a
        href="https://github.com/AnhThu0109"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={githubIcon} alt="github logo" width={40} height={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/th%C6%B0-nguy%E1%BB%85n-15a734191/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={linkedIcon} alt="linked logo" width={40} height={40} />
      </a>
      <a
        href="mailto:thuthuanh19@gmail.com?subject=Subject%20Here&body=Message%20body%20here"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={mailIcon} alt="mail logo" width={40} height={40} />
      </a>
      <DownloadButton />
    </div>
  );
}
