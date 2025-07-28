import { cn } from "@/lib/utils";
import LinearGradientMask from "./linear-gradient-mask";
import LinkButton from "./link-button";
import Heading2AndP from "./heading-2-and-p";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { CREDS_INFO } from "@/lib/creds-info";

interface Props {
  className?: string;
}

export default function CredentialsSlider({ className }: Props) {
  return (
    <section className={cn("space-y-6 relative -mb-6", className)}>
      <Heading2AndP
        h="Credentials"
        p="Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake."
        alignment="left-only"
      />
      <div className="xmd:px-4 mx-auto max-w-6xl px-1">
        <InfiniteMovingCards
          items={CREDS_INFO.map((cert) => ({ ...cert, img: cert.img }))}
        />
      </div>
      <div className="flex px-4">
        <LinkButton href="/credentials" title="See Credential Details" />
      </div>
      <LinearGradientMask className="[mask-image:linear-gradient(transparent,white)]" />
    </section>
  );
}
