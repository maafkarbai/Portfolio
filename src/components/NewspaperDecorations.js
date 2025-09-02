export function WeatherWidget() {
  return (
    <div className="p-2 font-serif text-xs bg-gray-100 border border-black">
      <h4 className="mb-1 font-bold">TODAY&rsquo;S FORECAST</h4>
      <div className="flex justify-between">
        <span>Development: Sunny ☀️</span>
        <span>82°F</span>
      </div>
      <p className="mt-1 text-xs">Perfect coding weather ahead</p>
    </div>
  );
}

export function StockTicker() {
  const stocks = [
    { symbol: "REACT", price: "19.1.0", change: "+0.2" },
    { symbol: "NEXT", price: "15.5.2", change: "+1.3" },
    { symbol: "NODE", price: "22.0.0", change: "+0.8" },
  ];

  return (
    <div className="p-2 overflow-hidden text-white bg-black">
      <div className="flex animate-scroll">
        <span className="font-mono text-xs whitespace-nowrap">
          📈 TECH STACK PRICES:{" "}
          {stocks.map((stock, i) => (
            <span key={i} className="mr-8">
              {stock.symbol} {stock.price} ({stock.change})
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function Advertisement() {
  return (
    <div className="p-4 text-center bg-white border-2 border-black">
      <h3 className="mb-2 text-lg font-bold font-heathergreen">
        HIRE A DEVELOPER
      </h3>
      <p className="mb-2 font-serif text-sm">
        Quality web solutions at competitive rates
      </p>
      <div className="p-2 border border-gray-400">
        <p className="font-mono text-xs">
          EXPERIENCED • RELIABLE • RESULTS-DRIVEN
        </p>
      </div>
    </div>
  );
}

export function BreakingNews({ message }) {
  return (
    <div className="px-4 py-2 text-white bg-red-600">
      <div className="flex items-center justify-center">
        <span className="mr-4 font-bold animate-pulse">🚨 BREAKING:</span>
        <span className="font-serif text-sm">
          {message || "New portfolio project deployed successfully!"}
        </span>
      </div>
    </div>
  );
}

export function NewspaperAd({ title, content, price }) {
  return (
    <div className="p-3 border border-gray-400 bg-gray-50">
      <h4 className="mb-2 text-sm font-bold">{title}</h4>
      <p className="mb-2 font-serif text-xs leading-relaxed">{content}</p>
      {price && (
        <div className="text-center">
          <span className="px-2 py-1 font-mono text-xs text-white bg-black">
            {price}
          </span>
        </div>
      )}
    </div>
  );
}

export function CrosswordTeaser() {
  return (
    <div className="p-4 bg-white border-2 border-black">
      <h4 className="mb-3 font-bold text-center">TODAY&rsquo;S PUZZLE</h4>
      <div className="grid grid-cols-5 gap-px bg-black">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 ${
              Math.random() > 0.3 ? "bg-white" : "bg-black"
            }`}
          >
            {Math.random() > 0.7 && (
              <span className="text-xs font-mono p-0.5">
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 font-serif text-xs text-center">
        1 Across: Framework for React (4)
      </p>
    </div>
  );
}
