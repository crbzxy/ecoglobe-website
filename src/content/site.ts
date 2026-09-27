export const siteContact = {
  phoneDisplay: "(664) 382-4379",
  phoneHref: "tel:+526643824379",
  emailMailto: "mailto:info@ecoglobe.com.mx",
  address: "Rtno. de la Brisa #2011, Altabrisa, Tijuana, B.C.",
  mapsHref:
    "https://www.google.com/maps/place/Eco+Globe/@32.5309138,-116.9704432,15z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13455.286035201218!2d-116.9704432!3d32.5309138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca32e0dd79ca0262!2sEco%20Globe!5e0!3m2!1ses-419!2smx!4v1623997584112!5m2!1ses-419!2smx"
} as const;

export const navItems = [
  { to: "/servicios" as const, label: "Servicios" },
  { to: "/nosotros" as const, label: "Nosotros" },
  { to: "/preguntas-frecuentes" as const, label: "Preguntas frecuentes" },
  { to: "/contacto" as const, label: "Contacto" }
];

export const socialItems = [
  { href: "https://www.facebook.com/ecoglobe.mx", label: "Facebook" },
  { href: "https://www.instagram.com/ecoglobe.mx/", label: "Instagram" },
  {
    href: "https://www.linkedin.com/company/eco-globe-energ%C3%ADa-solar/",
    label: "LinkedIn"
  },
  {
    href: "https://www.youtube.com/channel/UC6ELBU5BJ2_yAAJRtj9iSBg",
    label: "YouTube"
  }
] as const;
