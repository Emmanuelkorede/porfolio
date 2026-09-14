"use client";

import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stackItems } from "@/src/data/stackData";
import { TechIcon } from "@/src/data/stackIcons";
import { Layout, Server, Wrench } from "lucide-react";

const CATEGORIES = [
  {
    key: "Backend + Database",
    title: "Backend & Database",
    icon: Server,
  },
  {
    key: "Frontend",
    title: "Frontend Development",
    icon: Layout,
  },
  {
    key: "Tools and design",
    title: "Tools & Design",
    icon: Wrench,
  },
];

export function InteractiveStackCards() {
  const [cards, setCards] = useState(CATEGORIES);

  const cycleCard = () => {
    setCards((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) next.push(top);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight italic font-sans">
          Technical skill
        </h3>
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
          Tap card to cycle
        </span>
      </div>

      {/* Stacked Cards Container */}
      <div
        onClick={cycleCard}
        className="relative h-[290px] sm:h-[280px] w-full cursor-pointer select-none group"
      >
        <AnimatePresence initial={false}>
          {cards.map((category, index) => {
            const isTop = index === 0;
            const items = stackItems.filter((item) => item.category === category.key);
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.key}
                layout
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{
                  scale: 1 - index * 0.04,
                  y: index * 14,
                  zIndex: cards.length - index,
                  opacity: 1 - index * 0.25,
                }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute inset-x-0 top-0 p-5 sm:p-6 rounded-3xl border bg-card/95 backdrop-blur-md shadow-xl transition-colors duration-300 ${
                  isTop
                    ? "border-accent/60 shadow-accent/10 hover:border-accent"
                    : "border-border/60"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    {category.title}
                  </h4>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                  {items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-2 sm:p-2.5 rounded-xl bg-background/80 border border-border/40 flex flex-col items-center justify-center gap-1.5 text-center group-hover:border-accent/30 transition-colors"
                    >
                      <TechIcon name={item.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-[10px] sm:text-xs font-mono font-medium text-muted-foreground uppercase tracking-tight truncate w-full">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}