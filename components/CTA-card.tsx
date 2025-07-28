import CTABtn from "./CTA-btn";

export default function CTACard() {
  return (
    <section className="bg-tertiary/20 mb-1 space-y-8">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-16 text-center">
        <h2 className="text-tertiary text-4xl font-bold">
          Ready to Build Your Vision?
        </h2>
        <p className="text-muted-foreground">
          Let&apos;s discuss your next construction project and bring your ideas
          to life with our expertise and dedication.
        </p>
        <CTABtn href="/contact-us" wShadow noGlow variant="tertiary">
          Contact Us
        </CTABtn>
      </div>
    </section>
  );
}
