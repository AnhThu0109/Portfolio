import React from "react";
import styles from "@/components/download-button.module.css";
import downloadIcon from "@/assets/icons/download.png";
import Image from "next/image";

export default function DownloadButton() {
  return (
    <div className={styles.wrap}>
      <a href="https://drive.google.com/file/d/1wKMZJkgSprcTkt9NPxou00h3xXohB9rN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>
          <Image src={downloadIcon} alt="download" width={30} height={30} />
          CV
        </button>
      </a>
    </div>
  );
}
