import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import amgHubImage from "../../public/images/hobbies/AMG_PL_HUB.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const hobbies = [
  {
    id: "mamansi",
    time: "2020-Present",
    title: "Mamansi Basketball Team",
    description:
      "Amateur basketball team I play in and managed between 2020 and 2025. Currently still playing but not managing.",
    mediaType: "video",
    mediaSrc: "/images/hobbies/mamansi.mp4",
  },
  {
    id: "300",
    time: "2021-Present",
    title: "300 Basketball Team",
    description: "Amateur basketball team I play in and manage since 2021.",
    mediaType: "video",
    mediaSrc: "/images/hobbies/300.mp4",
  },
  {
    id: "amg_hub",
    time: "2025-Present",
    title: "AMG Hub",
    description:
      "In 2025, I began managing an AMG enthusiasts hub in Barcelona, where I organize events and community meetups." +
      " The hub operates within the AMG Private Lounge ecosystem but is not legally affiliated with or operated by Mercedes-Benz.",
    mediaType: "image",
    mediaSrc: amgHubImage,
  },
];

const HobbyCard = ({ title, description, mediaType, mediaSrc }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl
      p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      ></div>

      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        {mediaType === "video" ? (
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
            preload="metadata"
            playsInline
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <FramerImage
            src={mediaSrc}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-3xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light">
          {description}
        </p>
      </div>
    </article>
  );
};

const Hobbies = () => {
  const title = "Hobbies | Ian Riera";
  const description = "Basketball teams I capitanize and the car hub I manage.";
  const url = "https://ianriera.github.io/hobbies";
  const image = "https://ianriera.github.io/images/hobbies/AMG_PL_HUB.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <TransitionEffect />

      <main className="pt-12 w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="w-full mb-16 flex flex-col items-center justify-center">
          <AnimatedText
            text="Out Of Office"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid w-full grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {hobbies.map((hobby) => (
              <li key={hobby.id} className="col-span-12 list-none">
                <HobbyCard
                  title={hobby.title}
                  description={hobby.description}
                  mediaType={hobby.mediaType}
                  mediaSrc={hobby.mediaSrc}
                />
              </li>
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Hobbies;