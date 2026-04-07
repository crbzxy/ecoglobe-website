import React from "react";

export function FaqAccordionItem({ item, isOpen, onOpenChange }) {
  const handleToggle = (event) => {
    const element = event.currentTarget;
    if (element.open) {
      onOpenChange(item.id);
    } else {
      onOpenChange(null);
    }
  };

  const panelId = `faq-panel-${item.id}`;
  const summaryId = `faq-summary-${item.id}`;

  return (
    <details
      className="faq-accordion__item"
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary
        className="faq-accordion__summary"
        id={summaryId}
        aria-controls={panelId}
      >
        <span className="faq-accordion__summary-text">{item.question}</span>
        <span className="faq-accordion__chevron" aria-hidden="true" />
      </summary>
      <div
        className="faq-accordion__panel"
        id={panelId}
        role="region"
        aria-labelledby={summaryId}
      >
        <p className="faq-accordion__answer">{item.answer}</p>
      </div>
    </details>
  );
}
