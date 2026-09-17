"use client";

export function CodeTerminal() {
  return (
    <div className="w-full bg-card border border-border rounded-3xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm lg:text-xs xl:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-[11px] text-muted-foreground select-none">portfolio.js</span>
      </div>

      {/* Code Display with Syntax Highlighting */}
      <div className="p-5 text-foreground leading-relaxed overflow-x-hidden whitespace-pre-wrap break-words">
        <p>
          <span className="text-[#c586c0] font-medium">export const</span>{" "}
          <span className="text-[#9cdcfe]">developer</span> = <span className="text-[#ffd700]">&#123;</span>
        </p>
        
        <p className="pl-4 sm:pl-6">
          <span className="text-[#9cdcfe]">name:</span>{" "}
          <span className="text-[#ce9178]">&quot;Job Emmanuel&quot;</span>,
        </p>
        
        <p className="pl-4 sm:pl-6">
          <span className="text-[#9cdcfe]">alias:</span>{" "}
          <span className="text-[#ce9178]">&quot;job.exe&quot;</span>,
        </p>
        
        <p className="pl-4 sm:pl-6">
          <span className="text-[#9cdcfe]">role:</span>{" "}
          <span className="text-[#ce9178]">&quot;Full-Stack Product Builder&quot;</span>,
        </p>
        
        <p className="pl-4 sm:pl-6">
          <span className="text-[#9cdcfe]">focus:</span>{" "}
          <span className="text-[#ce9178]">&quot;Shipping production-ready web software&quot;</span>,
        </p>
        
        <div className="py-1" />

        <p className="pl-4 sm:pl-6">
          <span className="text-[#dcdcaa]">create:</span> <span className="text-[#da70d6]">(</span><span className="text-[#9cdcfe]">idea</span><span className="text-[#da70d6]">)</span> <span className="text-[#c586c0] font-medium">=&gt;</span> <span className="text-[#da70d6]">(</span><span className="text-[#9cdcfe]">idea</span> <span className="text-[#c586c0]">?</span> <span className="text-[#ce9178]">&quot;Reality&quot;</span> <span className="text-[#c586c0]">:</span> <span className="text-[#569cd6]">null</span><span className="text-[#da70d6]">)</span>,
        </p>

        <p><span className="text-[#ffd700]">&#125;</span>;</p>
      </div>
    </div>
  );
}