import { Zap } from "lucide-react";

const offers = [
  "Couples Retreat — was £3,000, now £2,000",
  "Men's Private Room — was £1,700, now £1,300",
  "Men's Shared Room — was £1,300, now £1,000",
];

const TickerRow = () => (
  <div className="flex shrink-0 items-center" aria-hidden="true">
    <span className="flex items-center gap-2 px-6 font-serif text-[13px] font-semibold uppercase tracking-[0.25em] text-[#e3b959]">
      <Zap className="h-3.5 w-3.5 text-yellow-400" />
      Black Friday
    </span>
    {offers.map((offer) => (
      <span key={offer} className="flex items-center text-[13px] tracking-wide text-white/85">
        <span className="px-2">{offer}</span>
        <span className="pl-4 text-[#e3b959]">✦</span>
      </span>
    ))}
    <span className="px-6 font-serif text-[13px] italic text-white/55">Limited-time prices</span>
    <span className="text-[#e3b959]">✦</span>
  </div>
);

const BlackFridayBanner = ({ collapsed }: { collapsed: boolean }) => (
  <div
    className={`overflow-hidden bg-[#0d0a08] transition-all duration-500 ${collapsed ? "max-h-0" : "max-h-10"}`}
  >
    <a
      href="#pricing"
      className="bf-marquee flex h-10 items-center overflow-hidden"
      aria-label="Black Friday offers — view packages"
    >
      <div className="bf-marquee-track flex w-max">
        <TickerRow />
        <TickerRow />
      </div>
    </a>
  </div>
);

export default BlackFridayBanner;
