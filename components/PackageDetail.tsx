import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";

type Itinerary = {
  day: string;
  title: string;
  description: string;
};

type Props = {
  title: string;
  location: string;
  duration: string;
  price: string;
  priceNote: string;
  heroImage: string;
  description: string;
  hotel?: string;
  minimumPeople?: string;
  itinerary: Itinerary[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
};

export default function PackageDetail({
  title,
  location,
  duration,
  price,
  priceNote,
  heroImage,
  description,
  hotel,
  minimumPeople,
  itinerary,
  inclusions,
  exclusions,
  gallery,
}: Props) {
  return (
    <main className="package-page">

      {/* ================= HERO ================= */}
      <section className="package-hero">

        <img
          src={heroImage}
          alt={title}
          className="package-hero-image"
          loading="eager"
        />

        <div className="package-hero-overlay" />

        <div className="package-hero-content">
          <div className="package-hero-inner">

            <Link
              href="/destinations"
              className="mb-6 inline-flex items-center gap-2 text-xs text-[#F0F5F7]/75 transition-colors duration-300 hover:text-[#F0F5F7] sm:mb-8"
            >
              <ArrowLeft size={14} />
              All destinations
            </Link>

            <p className="package-eyebrow">
              {location}
            </p>

            <h1 className="package-title">
              {title}
            </h1>

            <p className="package-subtitle">
              {description}
            </p>

          </div>
        </div>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className="luxury-container package-summary">
        <div className="package-summary-card">

          <div className="package-stat">
            <p className="package-stat-label">
              Duration
            </p>

            <p className="package-stat-value">
              {duration}
            </p>
          </div>

          <div className="package-stat">
            <p className="package-stat-label">
              Price
            </p>

            <p className="package-stat-value">
              {price}
            </p>
          </div>

          <div className="package-stat">
            <p className="package-stat-label">
              Hotel
            </p>

            <p className="package-stat-value">
              {hotel || "Custom"}
            </p>
          </div>

          <div className="package-stat">
            <p className="package-stat-label">
              Group
            </p>

            <p className="package-stat-value">
              {minimumPeople || "Custom"}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="luxury-container package-layout">

        <div className="package-main">

          {/* Gallery */}
          <section className="package-section">
            <p className="package-eyebrow">
              VISUAL JOURNEY
            </p>

            <h2 className="package-section-title">
              See the journey.
            </h2>

            <div className="package-grid">

              {gallery.map((image, index) => (
                <div
                  key={image}
                  className="package-media"
                >
                  <img
                    src={image}
                    alt={`${title} gallery ${index + 1}`}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}

            </div>
          </section>

          {/* Itinerary */}
          <section className="package-section">

            <p className="package-eyebrow">
              DAY BY DAY
            </p>

            <h2 className="package-section-title">
              Your itinerary.
            </h2>

            <div className="package-itinerary">

              {itinerary.map((item) => (
                <div
                  key={item.day}
                  className="itinerary-item"
                >

                  <div className="itinerary-day">
                    {item.day}
                  </div>

                  <div>
                    <h3 className="itinerary-title">
                      {item.title}
                    </h3>

                    <p className="itinerary-description">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* Included / Excluded */}
          <section className="package-section">

            <p className="package-eyebrow">
              PACKAGE DETAILS
            </p>

            <h2 className="package-section-title">
              What is included?
            </h2>

            <div className="include-grid">

              <div className="include-card">
                <h3>
                  Included
                </h3>

                <ul>
                  {inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#295255]"
                      />

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="include-card">
                <h3>
                  Not Included
                </h3>

                <ul>
                  {exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <X
                        size={16}
                        className="mt-0.5 shrink-0 text-[#577877]"
                      />

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

        </div>

        {/* Price card */}
        <aside className="package-sidebar">

          <div className="price-card">

            <p className="price-label">
              Package price
            </p>

            <div className="price-value">
              {price}
            </div>

            <p className="price-note">
              {priceNote}
            </p>

            <Link
              href="/contact"
              className="package-button"
            >
              Enquire Now
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="https://wa.me/918073118587"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#577877]/40 px-4 py-3 text-xs font-semibold text-[#F0F5F7] transition-all duration-300 hover:bg-[#295255]"
            >
              WhatsApp
              <ArrowUpRight size={15} />
            </a>

          </div>

        </aside>

      </div>
    </main>
  );
}