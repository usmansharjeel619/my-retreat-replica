import { useEffect, useState } from "react";
import { ArrowRight, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  { name: "Couples Retreat", note: "Double bed room · per couple", was: "£3,000", now: "£2,000", saving: "Save £1,000" },
  { name: "Men's Retreat — Private Room", note: "Private en-suite · per person", was: "£1,700", now: "£1,300", saving: "Save £400" },
  { name: "Men's Retreat — Shared Room", note: "En-suite shared · per person", was: "£1,300", now: "£1,000", saving: "Save £300" },
];

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bf-popup-dismissed")) return;
    const t = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem("bf-popup-dismissed", "1");
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Black Friday sale">
      <button aria-label="Close" onClick={close} className="bf-fade absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm" />
      <div className="bf-pop relative w-full max-w-md overflow-hidden rounded-3xl bg-[#17110d] text-center shadow-2xl ring-1 ring-[#e3b959]/30">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#e3b959] to-transparent" />
        <button onClick={close} aria-label="Dismiss" className="absolute right-4 top-4 text-white/50 transition hover:text-white">
          <X className="h-5 w-5" />
        </button>
        <div className="px-8 pb-8 pt-9">
          <div className="mb-4 flex items-center justify-center gap-3 text-[#e3b959]">
            <Zap className="h-4 w-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">Limited Time</span>
            <Zap className="h-4 w-4" />
          </div>
          <h2 className="font-serif text-[42px] font-semibold leading-tight text-[#faf5ec]">
            Black <span className="italic text-[#e3b959]">Friday</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Our once-a-year prices on the Morocco retreats, now live across every package.
          </p>
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e3b959]/50" />
            <span className="text-xs text-[#e3b959]">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#e3b959]/50" />
          </div>
          <ul className="space-y-4 text-left">
            {offers.map((o) => (
              <li key={o.name} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium text-[#faf5ec]">{o.name}</p>
                  <p className="text-xs text-white/50">{o.note}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-white/45 line-through">{o.was}</p>
                  <p className="font-serif text-[22px] font-semibold leading-tight text-[#e3b959]">{o.now}</p>
                  <p className="text-[11px] font-semibold text-green-500">{o.saving}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild className="w-full rounded-full py-6 text-base shadow-warm">
              <a href="#pricing" onClick={close}>
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <button onClick={close} className="mt-4 text-xs text-white/50 underline-offset-4 transition hover:text-white/80 hover:underline">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayPopup;
