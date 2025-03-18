import { ProfileData as my } from "@/data/profile-data";

interface SkillItemProps {
  category: string;
  items: typeof my.skills[keyof typeof my.skills];
}

function SkillItem({ category, items } : SkillItemProps) {
  const skills = items.join(', ');
  return (
    <>
      <div className="font-semibold">{category}<span className="float-right">:</span></div>
      <div>{skills}</div>
    </>
  );
}

export default function Skills() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
      <h2 className="text-xl font-bold">Technical Skills</h2>
      <div className="mt-2 text-sm font-mono text-foreground/80 print:mt-1 print:text-[12px] text-pretty">
        <div className="grid grid-cols-[28%_72%] gap-1 print:grid-cols-[25%_75%] print:gap-0.5">
          {Object.keys(my.skills).map((key: string) => (
            <SkillItem key={key} category={key} items={my.skills[key as keyof typeof my.skills]}/>
          ))}
        </div>
      </div>
    </section>
  );
}
