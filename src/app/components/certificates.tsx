import { ProfileData as my } from "@/data/profile-data";

interface CertificateItemProps {
  cert: typeof my.certificates[number];
}

function CertificateItem({ cert }: CertificateItemProps) {
  return (
    <div className="py-1 print:py-1">
      <div className="flex flex-col space-y-1.5 print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <p className="font-mono text-sm inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {cert.name}
          </p>
          <div className="text-sm tabular-nums text-gray-500">
            {cert.start}{cert.end ? " - " + cert.end : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
      <h2 className="text-xl font-bold">Certification</h2>
      <div className="space-y-1 print:space-y-1" role="feed">
        {my.certificates.map((cert) => (
          <article key={`${cert.name}`} role="article">
            <CertificateItem cert={cert}/>
          </article>
        ))}
      </div>
    </section>
  );
}
