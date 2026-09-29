import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F0F5F7] px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="The JP Wings approach"
          title="Travel should feel effortless."
          description="We bring together the planning, details and experiences so you can focus on enjoying the destination."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["01", "Thoughtful Planning"],
            ["02", "Personal Attention"],
            ["03", "Curated Experiences"],
            ["04", "Travel Support"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="glass-light rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:bg-white"
            >
              <span className="text-sm text-[#577877]">
                {number}
              </span>

              <h3 className="mt-10 font-serif text-2xl text-[#162623]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}