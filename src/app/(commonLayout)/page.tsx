import { Hero } from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialities";
import Steps from "@/components/modules/Home/Step";
import Testimonials from "@/components/modules/Home/Testimonial";
import TopRatedDoctors from "@/components/modules/Home/TopRatedDoctor";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
  <>
     <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <main>
    <Hero />
    <Specialities />
        <TopRatedDoctors />
        <Steps />
        <Testimonials />
  </main>
  </>
  );
}
