import React, { useEffect, useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import camioneta from "../img/camioneta.jpeg";
import { faqItems } from "../features/faq/faqData";
import { FaqAccordionItem } from "../features/faq/FaqAccordionItem";
import { FaqSearchField } from "../features/faq/FaqSearchField";

function normalizeForSearch(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function filterFaqItems(items, rawQuery) {
  const trimmed = rawQuery.trim();
  if (!trimmed) {
    return items;
  }
  const needle = normalizeForSearch(trimmed);
  return items.filter((item) => {
    const haystack = normalizeForSearch(
      `${item.question} ${item.answer} ${(item.keywords || []).join(" ")}`
    );
    return haystack.includes(needle);
  });
}

function Faq() {
  const [openId, setOpenId] = useState(null);
  const [query, setQuery] = useState("");
  const filteredItems = useMemo(() => filterFaqItems(faqItems, query), [query]);

  useEffect(() => {
    if (openId && !filteredItems.some((item) => item.id === openId)) {
      setOpenId(null);
    }
  }, [filteredItems, openId]);

  return (
    <div className="contenedor faq-page">
      <header className="faq-page__intro">
        <h1 className="faq-page__title">Preguntas frecuentes</h1>
        <p className="faq-page__lead">
          Resolvemos las dudas más comunes sobre paneles solares, la red de CFE y
          cómo elegir una instalación adecuada a tu consumo.
        </p>
      </header>

      <div className="faq-page__layout">
        <figure className="faq-page__media">
          <LazyLoadImage
            effect="blur"
            src={camioneta}
            alt="Equipo e instalación de paneles solares Eco Globe"
          />
          <figcaption>
            Asesoría y proyectos a la medida de tu hogar o negocio.
          </figcaption>
        </figure>

        <section
          className="faq-page__main"
          aria-label="Listado de preguntas frecuentes"
        >
          <FaqSearchField
            value={query}
            onChange={setQuery}
            resultCount={filteredItems.length}
            totalCount={faqItems.length}
          />

          {filteredItems.length === 0 ? (
            <div className="faq-empty">
              <p className="faq-empty__title">No hay resultados</p>
              <p className="faq-empty__text">
                Prueba con otras palabras (por ejemplo «baterías», «recibo» o
                «paneles») o borra el filtro para ver todas las preguntas.
              </p>
            </div>
          ) : (
            <div className="faq-accordion">
              {filteredItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onOpenChange={setOpenId}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Faq;
