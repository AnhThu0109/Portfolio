import styles from "@/app/skills&exp/page.module.css";
import Image from "next/image";
import { SmileOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

export default function SkillsExp() {
  const skills = [
    {
      skill: "HTML",
      icon: "/icon/html.png",
    },
    {
      skill: "CSS",
      icon: "/icon/css.png",
    },
    {
      skill: "JavaScript",
      icon: "/icon/js.png",
    },
    {
      skill: "Bootstrap v5",
      icon: "/icon/bootstrap.png",
    },
    {
      skill: "Tailwind CSS",
      icon: "/icon/tailwind.png",
    },
    {
      skill: "Ant Design",
      icon: "/icon/antd.png",
    },
    {
      skill: "Material UI",
      icon: "/icon/mui.png",
    },
    {
      skill: "ReactJS",
      icon: "/icon/reactjs.png",
    },
    {
      skill: "NextJS",
      icon: "/icon/nextjs.svg",
    },
    {
      skill: "Redux",
      icon: "/icon/redux.png",
    },
    {
      skill: "Figma",
      icon: "/icon/figma.png",
    },
  ];
  return (
    <div className="text-white">
      <div>
        <h1 className="m-10 text-5xl text-center">Skills</h1>
        <div className="flex flex-row flex-wrap justify-center m-10 space-x-5">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`w-40 h-40 p-2 flex flex-col space-y-2 items-center justify-center ${styles.back}`}
            >
              <div className={`w-full h-full ${styles.container}`}></div>
              <p className="text-2xl font-semibold text-center">{item.skill}</p>
              <Image src={item.icon} width={50} height={50} alt={item.skill} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="m-10 text-5xl">Experience</h1>
        <Timeline
          className="m-10 font-light text-white"
          items={[
            {
              dot: (
                <Image
                  src="/icon/flower.gif"
                  alt="Custom Icon"
                  width={80}
                  height={80}
                  unoptimized
                />
              ),
              children: (
                <div className="mb-20 ml-10">
                  <h1 className="text-xl font-light">
                    The Gioi Di Dong Corporation, Ho Chi Minh city
                  </h1>
                  <p className="italic">
                    MWG Fresher/September 2022 - November 2022
                  </p>
                  <ul className="ml-5 list-disc">
                    <li>
                      Analyze business process and customer requirements of
                      topic &quot;Online Approval Management&quot;
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              dot: (
                <Image
                  src="/icon/flower.gif"
                  alt="Custom Icon"
                  width={80}
                  height={80}
                  unoptimized
                />
              ),
              children: (
                <div className="ml-10">
                  <h1 className="text-xl font-light">
                    Shinhan DS Vietnam, Ho Chi Minh city
                  </h1>
                  <p className="italic">
                    SoLware Developer/December 2022 - August 2023
                  </p>
                  <ul className="ml-5 list-disc">
                    <li>
                      Join in developing HRM web applica8on using ReactJS.
                    </li>
                    <li>
                      Join in developing banking app for Shinhan Cambodia using
                      Javascript ES6 in Websquare5 studio.
                    </li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
