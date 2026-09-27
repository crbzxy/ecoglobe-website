export const WHATSAPP_NUMBER = "5216643642748";

export const whatsappMessages = {
  general:
    "Hola EcoGlobe, me gustaría recibir asesoría sobre sus servicios de energía solar en Baja California.",
  panelesCfe:
    "Hola EcoGlobe, me interesa cotizar paneles solares interconectados a la red de CFE para mi casa o negocio.",
  autonomos:
    "Hola EcoGlobe, me gustaría información y cotización sobre un sistema solar autónomo con baterías.",
  electricidad:
    "Hola EcoGlobe, requiero asesoría técnica sobre sus soluciones y proyectos eléctricos.",
  combo:
    "Hola EcoGlobe, me interesa conocer más sobre la promoción de aire acondicionado con paneles solares.",
  contacto:
    "Hola EcoGlobe, encontré su sitio web y me gustaría hablar con un asesor sobre mi proyecto energético."
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export function whatsappLink(message: string = whatsappMessages.general) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
