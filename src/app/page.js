import Image from "next/image";
import Circle from "@/components/background-circle";
import LogoLink from "@/components/logo-link";

export default function Home() {
  return (
    <main className="flex flex-row justify-around w-full min-h-screen p-5 mt-12 space-x-2 leading-loose">
      <Circle className="h-1/2" />
      <div className="w-1/2">
        <h3 className="text-xl font-light text-gray-400 mb-7">
          FRONTEND DEVELOPER
        </h3>
        <h1 className="mb-10 text-5xl font-bold leading-tight text-white">
          Nguyen Ngoc Anh Thu
        </h1>
        <div className="pl-3 font-light text-justify text-gray-200 introduction">
          <p>
            I am a Frontend developer eager to work in a professional
            environment where I can utilize my skills, knowledge, and passion to
            contribute to the company&apos;s success while gaining valuable
            experience and further enhancing my professional growth.
          </p>
          <p>
            Thank you for visiting my webpage! If you have any questions or need
            more information, feel free to reach out. I appreciate your interest
            and hope you enjoy exploring the content here.
          </p>
        </div>
      </div>

      <div className="w-1/4 mt-20">
        <Image
          className="rounded-lg shadow-2xl"
          src="/images/me3.jpeg"
          alt="my image"
          width={350}
          height={150}
        />
      </div>

      <LogoLink />
    </main>
  );
}
