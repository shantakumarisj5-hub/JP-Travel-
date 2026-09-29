export default function Footer() {
  return (
    <footer className="bg-[#162623] px-6 py-16 text-[#F0F5F7]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-3xl">
              JP Wings
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#577877]">
              Travel
            </p>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#F0F5F7]/50">
              Thoughtfully planned journeys for travellers who want to
              experience more.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#577877]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[#F0F5F7]/65">
              <a href="/destinations" className="hover:text-white">
                Destinations
              </a>
              <a href="/packages" className="hover:text-white">
                Packages
              </a>
              <a href="/services" className="hover:text-white">
                Services
              </a>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#577877]">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[#F0F5F7]/65">
              <a
                href="tel:+918073118587"
                className="hover:text-white"
              >
                +91 80731 18587
              </a>

              <a
                href="https://wa.me/918073118587"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>

              <a href="/contact" className="hover:text-white">
                Send an enquiry
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#F0F5F7]/10 pt-6 text-xs text-[#F0F5F7]/35">
          © {new Date().getFullYear()} JP Wings Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}