type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: Props) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs uppercase tracking-[0.3em] ${
          light ? "text-[#577877]" : "text-[#295255]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 font-serif text-5xl leading-[1.05] md:text-7xl ${
          light ? "text-[#F0F5F7]" : "text-[#162623]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
            light ? "text-[#F0F5F7]/65" : "text-[#577877]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}