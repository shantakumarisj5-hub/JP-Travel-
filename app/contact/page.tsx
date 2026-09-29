import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F0F5F7] pt-24">
        {/* Hero */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#577877]">
                CONTACT JP WINGS
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] text-[#162623] sm:text-6xl lg:text-7xl">
                Let&apos;s plan your
                <br />
                next journey.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#577877]">
                Tell us where you would like to go and we&apos;ll help you take
                the next step.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Form */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
          <div className="luxury-container">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              {/* Contact information */}
              <div className="rounded-[28px] bg-[#162623] p-7 sm:p-9">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#577877]">
                  GET IN TOUCH
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#F0F5F7]">
                  We&apos;re here to help.
                </h2>

                <p className="mt-4 text-sm leading-6 text-[#F0F5F7]/60">
                  For package enquiries, destination planning and travel
                  assistance, reach out directly.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+918073118587"
                    className="flex items-center gap-4 rounded-2xl border border-[#577877]/20 bg-[#295255]/15 p-4 transition hover:bg-[#295255]/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#295255] text-[#F0F5F7]">
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#577877]">
                        Phone
                      </p>
                      <p className="mt-1 text-sm text-[#F0F5F7]">
                        +91 80731 18587
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918073118587"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-[#577877]/20 bg-[#295255]/15 p-4 transition hover:bg-[#295255]/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#295255] text-[#F0F5F7]">
                      <MessageCircle size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#577877]">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-sm text-[#F0F5F7]">
                        Chat with us
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#577877]/20 bg-[#295255]/15 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#295255] text-[#F0F5F7]">
                      <Mail size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#577877]">
                        Email
                      </p>
                      <p className="mt-1 break-all text-sm text-[#F0F5F7]">
                        jpwings24@gmai.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#577877]/20 bg-[#295255]/15 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#295255] text-[#F0F5F7]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#577877]">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-[#F0F5F7]">
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquiry form */}
              <div className="rounded-[28px] border border-[#577877]/20 bg-white p-7 shadow-[0_15px_45px_rgba(22,38,35,0.08)] sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577877]">
                  TRAVEL ENQUIRY
                </p>

                <h2 className="mt-2 font-serif text-3xl text-[#162623]">
                  Tell us about your trip.
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#162623]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#577877]/25 bg-[#F0F5F7] px-4 py-3 text-sm text-[#162623] outline-none transition placeholder:text-[#577877]/60 focus:border-[#295255]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#162623]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-[#577877]/25 bg-[#F0F5F7] px-4 py-3 text-sm text-[#162623] outline-none transition placeholder:text-[#577877]/60 focus:border-[#295255]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#162623]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full rounded-xl border border-[#577877]/25 bg-[#F0F5F7] px-4 py-3 text-sm text-[#162623] outline-none transition placeholder:text-[#577877]/60 focus:border-[#295255]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#162623]">
                      Destination
                    </label>
                    <select
                      className="w-full rounded-xl border border-[#577877]/25 bg-[#F0F5F7] px-4 py-3 text-sm text-[#162623] outline-none focus:border-[#295255]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select destination
                      </option>
                      <option value="vietnam">Vietnam</option>
                      <option value="dubai">Dubai</option>
                      <option value="thailand">Thailand</option>
                      <option value="monaco">Monaco</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-medium text-[#162623]">
                      Tell us about your trip
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Travel dates, number of people, preferences..."
                      className="w-full resize-none rounded-xl border border-[#577877]/25 bg-[#F0F5F7] px-4 py-3 text-sm text-[#162623] outline-none transition placeholder:text-[#577877]/60 focus:border-[#295255]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/918073118587"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#295255] px-6 py-3.5 text-xs font-semibold text-[#F0F5F7] transition hover:bg-[#577877]"
                  >
                    Send Enquiry on WhatsApp
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="tel:+918073118587"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#577877]/30 px-6 py-3.5 text-xs font-semibold text-[#162623] transition hover:bg-[#F0F5F7]"
                  >
                    Call Us
                    <Phone size={14} />
                  </a>
                </div>

                <p className="mt-4 text-center text-[10px] leading-5 text-[#577877]">
                  Your enquiry form is currently prepared for the demo. Direct
                  WhatsApp and phone contact are available above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}