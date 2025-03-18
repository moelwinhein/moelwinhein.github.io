import { ProfileData as my } from "@/data/profile-data";

export default function Summary() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
      <h2 className="text-xl font-bold">Summary</h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
        {my.summary}
      </div>
    </section>
  );
}
