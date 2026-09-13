"use client";


export function CodeTerminal() {
  return (
    <div className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-xs text-muted-foreground select-none">portfolio.js</span>
      </div>

      {/* Code Display */}
      <div className="p-5 text-foreground leading-relaxed overflow-x-auto">
        <p className="text-muted-foreground">
          <span className="text-accent font-semibold">export const</span>{" "}
          <span className="text-foreground">developer</span> = &#123;
        </p>
        
        <p className="pl-4">
          <span className="text-muted-foreground">name:</span>{" "}
          <span className="text-accent">&quot;Job Emmanuel&quot;</span>,
        </p>
        
        <p className="pl-4">
          <span className="text-muted-foreground">alias:</span>{" "}
          <span className="text-accent">&quot;job.exe&quot;</span>,
        </p>
        
        <p className="pl-4">
          <span className="text-muted-foreground">role:</span>{" "}
          <span className="text-accent">&quot;Full-Stack Product Builder&quot;</span>,
        </p>
        
        <p className="pl-4">
          <span className="text-muted-foreground">focus:</span>{" "}
          <span className="text-accent">&quot;Shipping production-ready web software&quot;</span>,
        </p>
        
        <div className="py-2" />

        <p className="pl-4">
          <span className="text-accent font-semibold">create:</span> (idea) =&gt; (idea ?{" "}
          <span className="text-accent">&quot;Reality&quot;</span> : <span className="text-muted-foreground">null</span>),
        </p>

        <p>&#125;;</p>
      </div>
    </div>
  );
}