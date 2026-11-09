import { tickerItems } from "../data/ticker";

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ticker-group" aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <li key={item.tag}>
          <a className="ticker-item" href={item.href} tabIndex={hidden ? -1 : undefined}>
            <span className="ticker-tag">
              {item.live && <span className="ticker-live" aria-hidden="true" />}
              {item.tag}
            </span>
            <span className="ticker-value">
              {item.value}
              {item.up && <span className="ticker-up" aria-hidden="true">▲</span>}
            </span>
            {item.note && <span className="ticker-note">{item.note}</span>}
            <span className="ticker-arrow" aria-hidden="true">→</span>
          </a>
          <span className="ticker-divider" aria-hidden="true">~</span>
        </li>
      ))}
    </ul>
  );
}

/** A market-tape strip of quick facts and shortcuts. Pauses on hover or keyboard focus. */
function TopTicker() {
  return (
    <nav className="ticker" aria-label="Quick links">
      <div className="ticker-track">
        <TickerGroup />
        {/* Second copy makes the loop seamless; screen readers and the Tab key skip it. */}
        <TickerGroup hidden />
      </div>
    </nav>
  );
}

export default TopTicker;
