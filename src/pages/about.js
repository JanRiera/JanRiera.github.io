import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/ian_digital_artwork.png";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const About = () => {
    const title = "About | Jan Riera";
    const description = "Background, experience, and education of Jan Riera, a Computer Vision Engineer focused on practical AI solutions.";
    const url = "https://janriera.github.io/about";
    const image = "https://janriera.github.io/images/profile/jan_digital_artwork.png";

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
            <main className="pt-12 flex w-full flex-col items-center justify-center dark:text-light
            ">
                <Layout className="pt-16">
                    <AnimatedText text="Exploring the Potential of AI!" className="mb-16
                    lg:!text-5xl sm:!text-4xl xs:!text-2xl sm:mb-8" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className="col-span-4 flex flex-col items-start justify-stretch
                        md:order-2 md:col-span-8 leading-loose">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75
                            dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hello world, I am Jan. I am a Telecommunications engineer with a strong specialization in Computer Vision and Machine Learning.
                            </p>
                            <p className="my-4 font-medium">
                                I am currently working at <a href="https://coatingai.com/" className="underline hover:text-blue-800">CoatingAI AG</a>, a startup that aims to leverage the power of artificial intelligence
                                to automate coating processes and boost efficiency.
                                My main role includes developing software tools for machine learning solutions,
                                both as standalone applications and packages of the company&apos;s full software pipeline.
                                My responsibilities span the full pipeline: GPU-accelerated dataset generation,
                                development and refinement of in-house deep learning models,
                                evaluation and visualization of training metrics,
                                and deployment of containerized services on GCloud.
                            </p>
                            <p className="font-medium">
                                Whether it is for work or for fun, I love to explore new technologies and learn new skills.
                                From data science to web development, I am always looking for new challenges to tackle. Currently, paying
                                attention to the latest trends in AI, exploring the potential of these tools and how to exploit them in practical applications.
                            </p>
                        </div>

                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                            dark:bg-light"></div>
                            <Image src={profilePic} alt="Jan Riera" className='w-full h-auto rounded-xl'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 35vw"
                                priority
                            />
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
};

export default About;
