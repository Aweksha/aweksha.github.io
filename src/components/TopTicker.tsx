const tickerItems = [
  {
    label: "Graduation",
    value: "December 2026",
  },
  {
    label: "Degree",
    value: "B.S. in Computer Science",
  },
  {
    label: "GPA",
    value: "4.0",
  },
  {
    label: "Currently",
    value: "Instructional Assistant · UTA Bug House",
  },
  {
    label: "Open to",
    value: "Full Time Opportunities",
  },
];

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ticker-group" aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <li className="ticker-item" key={item.label}>
          <span className="ticker-label">{item.label}:</span>
          <span className="ticker-value">{item.value}</span>

          <span className="ticker-divider" aria-hidden="true">~</span>
        </li>
      ))}
    </ul>
  );
}

function TopTicker() {
  return (
    <div className="ticker" role="region" aria-label="Quick facts">
      <div className="ticker-track">

        <TickerGroup />

        {/* Second copy makes the loop seamless; screen readers skip it. */}
        <TickerGroup hidden />

      </div>
    </div>
  );
}

export default TopTicker;
