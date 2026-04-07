import React from "react";

function SearchIcon() {
  return (
    <svg
      className="faq-search__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaqSearchField({ value, onChange, resultCount, totalCount }) {
  return (
    <div className="faq-search">
      <label className="faq-search__label" htmlFor="faq-busqueda">
        Buscar en preguntas y respuestas
      </label>
      <div className="faq-search__input-wrap">
        <SearchIcon />
        <input
          id="faq-busqueda"
          className="faq-search__input"
          type="search"
          autoComplete="off"
          placeholder="Ejemplo: baterías, CFE, cuántos paneles…"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby="faq-busqueda-hint"
        />
      </div>
      <p id="faq-busqueda-hint" className="faq-search__hint">
        Mostrando {resultCount} de {totalCount} preguntas
        {value.trim() ? " (filtrado)" : ""}.
      </p>
    </div>
  );
}
