interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="text-center mb-[60px] md:mb-[60px]">
          <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
            {title}
          </h2>
          <p className="text-base max-w-[700px] mx-auto text-[#666] leading-[1.9]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}



