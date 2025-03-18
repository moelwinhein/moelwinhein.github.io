import { ProfileData as my } from "@/data/profile-data";
import { DotIcon, MailIcon, PhoneIcon } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export default function ProfileDetail() {
  return (
    <div className="flex flex-col items-center space-y-1.5">
      <h1 className="text-2xl font-bold">{my.name}</h1>
      <p className="max-w-screen-lg text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
        {my.about}
      </p>
      <div className="gap-x-2 font-mono text-sm text-foreground/80 flex items-center print:text-[12px]">
        <a className="inline-flex gap-x-1.5 align-baseline leading-none underline hover:text-foreground/70" href={`mailto:${my.contact.email}`}>
          <MailIcon className="size-4" aria-hidden="true"/>
          {my.contact.email}
        </a>
        <DotIcon className="size-6" aria-hidden="true"/>
        <a className="inline-flex gap-x-1.5 align-baseline leading-none underline hover:text-foreground/70" href={`tel:${my.contact.tel}`}>
          <PhoneIcon className="size-4" aria-hidden="true"/>
          {my.contact.tel}
        </a>
        <DotIcon className="size-6" aria-hidden="true"/>
        <a className="inline-flex gap-x-1.5 align-baseline leading-none underline hover:text-foreground/70" href={`${my.contact.social.linkedin.url}`}>
          <LinkedInIcon className="size-4" aria-hidden="true"/>
          {my.contact.social.linkedin.name}
        </a>
      </div>
    </div>
  );
}
