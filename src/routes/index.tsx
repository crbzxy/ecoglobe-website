import { createFileRoute } from "@tanstack/react-router";
import { HomeAbout } from "../components/home/HomeAbout";
import { HomeBenefits } from "../components/home/HomeBenefits";
import { HomeHero } from "../components/home/HomeHero";
import { HomePromo } from "../components/home/HomePromo";
import { HomeServices } from "../components/home/HomeServices";
import { BrandLogos } from "../components/marketing/BrandLogos";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "EcoGlobe | Energía solar en Baja California",
      description:
        "Paneles solares, sistemas autónomos y soluciones eléctricas en Baja California con más de 10 años de experiencia.",
      path: "/"
    }),
  component: HomePage
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeBenefits />
      <HomePromo />
      <BrandLogos />
    </>
  );
}
