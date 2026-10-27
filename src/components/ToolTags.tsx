import { useEffect, useId, useRef, useState } from "react";

/**
 * Tags that open a small note on what each tool was used for.
 * Tags without a note render as plain tags.
 */
function ToolTags({ tags, notes = {} }: { tags: string[]; notes?: Record<string, string> }) {
  const [open, setOpen] = useState<string | null>(null);
  const [alignRight, setAlignRight] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent) {
        if (event.key !== "Escape") return;
        listRef.current?.querySelector<HTMLButtonElement>("[aria-expanded=true]")?.focus();
      } else if (listRef.current?.contains(event.target as Node)) return;
      setOpen(null);
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const toggle = (tag: string, button: HTMLButtonElement) => {
    if (open === tag) return setOpen(null);
    // Open toward whichever side has more room, so the note stays on screen.
    const { left, right } = button.getBoundingClientRect();
    setAlignRight((left + right) / 2 > window.innerWidth / 2);
    setOpen(tag);
  };

  return (
    <ul className="tags tool-tags" ref={listRef}>
      {tags.map((tag, i) => {
        const note = notes[tag];
        if (!note) return <li key={tag}>{tag}</li>;
        const noteId = `${id}-${i}`;
        return (
          <li key={tag} className="tool-tag">
            <button type="button" aria-expanded={open === tag} aria-controls={noteId} onClick={(e) => toggle(tag, e.currentTarget)}>
              {tag}
            </button>
            {open === tag && (
              <div id={noteId} className={`tool-note${alignRight ? " align-right" : ""}`}>
                <p className="tool-note-label">{tag}</p>
                <p>{note}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ToolTags;
