export function WeatherWidget() {
  return (
    <div className="border border-black p-2 bg-gray-100 text-xs font-serif">
      <h4 className="font-bold mb-1">TODAY&rsquo;S FORECAST</h4>
      <div className="flex justify-between">
        <span>Development: Sunny ☀️</span>
        <span>82°F</span>
      </div>
      <p className="text-xs mt-1">Perfect coding weather ahead</p>
    </div>
  );
}

export function StockTicker() {
  const stocks = [
    { symbol: 'REACT', price: '19.1.0', change: '+0.2' },
    { symbol: 'NEXT', price: '15.5.2', change: '+1.3' },
    { symbol: 'NODE', price: '22.0.0', change: '+0.8' },
  ];

  return (
    <div className="bg-black text-white p-2 overflow-hidden">
      <div className="flex animate-scroll">
        <span className="font-mono text-xs whitespace-nowrap">
          📈 TECH STACK PRICES: {' '}
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
    <div className="border-2 border-black p-4 bg-white text-center">
      <h3 className="font-heathergreen text-lg font-bold mb-2">
        HIRE A DEVELOPER
      </h3>
      <p className="font-serif text-sm mb-2">
        Quality web solutions at competitive rates
      </p>
      <div className="border border-gray-400 p-2">
        <p className="text-xs font-mono">
          EXPERIENCED • RELIABLE • RESULTS-DRIVEN
        </p>
      </div>
    </div>
  );
}

export function BreakingNews({ message }) {
  return (
    <div className="bg-red-600 text-white py-2 px-4">
      <div className="flex items-center justify-center">
        <span className="font-bold mr-4 animate-pulse">🚨 BREAKING:</span>
        <span className="font-serif text-sm">
          {message || "New portfolio project deployed successfully!"}
        </span>
      </div>
    </div>
  );
}

export function NewspaperAd({ title, content, price }) {
  return (
    <div className="border border-gray-400 p-3 bg-gray-50">
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <p className="font-serif text-xs leading-relaxed mb-2">{content}</p>
      {price && (
        <div className="text-center">
          <span className="bg-black text-white px-2 py-1 text-xs font-mono">
            {price}
          </span>
        </div>
      )}
    </div>
  );
}

export function CrosswordTeaser() {
  return (
    <div className="border-2 border-black p-4 bg-white">
      <h4 className="font-bold text-center mb-3">TODAY&rsquo;S PUZZLE</h4>
      <div className="grid grid-cols-5 gap-px bg-black">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={`w-6 h-6 ${Math.random() > 0.3 ? 'bg-white' : 'bg-black'}`}>
            {Math.random() > 0.7 && (
              <span className="text-xs font-mono p-0.5">
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs font-serif mt-2 text-center">
        1 Across: Framework for React (4)
      </p>
    </div>
  );
}