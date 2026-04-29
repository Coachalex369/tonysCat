import { client } from "../lib/sanity";

export default async function Home() {
  const categories = await client.fetch(`*[_type == "menuCategory"]`);

  return (
    <main className="min-h-screen bg-black text-offwhite">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-crimson-dark bg-black/70 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Tony's logo" className="h-12 w-auto" />
          <span className="text-xl font-bold text-crimson">
            Tony’s Catering
          </span>
        </div>

        <div className="flex gap-6 text-sm text-offwhite-dim">
          <a href="#menus" className="hover:text-crimson-soft transition">
            Menus
          </a>
          <a href="#process" className="hover:text-crimson-soft transition">
            How It Works
          </a>
          <a href="#events" className="hover:text-crimson-soft transition">
            Events
          </a>
          <a href="#contact" className="hover:text-crimson-soft transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex items-center justify-center px-8 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain opacity-40"></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl rounded-3xl border border-white/10 bg-black/40 px-8 py-10 shadow-2xl backdrop-blur-sm">
          <p className="mb-4 font-semibold text-crimson-soft">
            Mountain Pizza. Real Catering.
          </p>

          <h1 className="text-5xl font-bold text-offwhite">
            Catering built for teams, families, and mountain-town events.
          </h1>

          <p className="mt-6 text-offwhite-dim">
            Pizza, pasta, and crowd-friendly catering that shows up hot and
            ready. Simple, reliable, and built for real gatherings.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-crimson px-6 py-3 font-bold text-offwhite hover:bg-crimson-dark transition"
          >
            Start a Catering Request
          </a>
        </div>
      </section>

      {/* MENUS (NOW FROM SANITY) */}
      <section id="menus" className="px-8 py-16 bg-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-4">
          Catering Menu Options
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="rounded-2xl border border-dashed border-crimson-dark bg-neutral-800/60 p-6"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-black/40 text-offwhite-dim">
                {category.image ? "Image added" : "Add photo"}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {category.title}
              </h3>

              <p className="text-offwhite-dim">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="px-8 py-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-4">
          How Catering Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-crimson-dark bg-neutral-900 p-6">
            <h3 className="text-xl font-bold mb-2">Pick Your Menu</h3>
            <p className="text-offwhite-dim">
              Choose from pizza, pasta, sides, or custom options.
            </p>
          </div>

          <div className="rounded-2xl border border-crimson-dark bg-neutral-900 p-6">
            <h3 className="text-xl font-bold mb-2">Tell Us Your Event</h3>
            <p className="text-offwhite-dim">
              Share your date, guest count, and details.
            </p>
          </div>

          <div className="rounded-2xl border border-crimson-dark bg-neutral-900 p-6">
            <h3 className="text-xl font-bold mb-2">We Make It Easy</h3>
            <p className="text-offwhite-dim">
              We help finalize everything so your event runs smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="px-8 py-16 bg-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-4">
          Events We Cater
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Family Parties",
            "School Events",
            "Work Lunches",
            "Custom Gatherings",
          ].map((title) => (
            <div
              key={title}
              className="rounded-2xl bg-black/50 p-6 border border-crimson-dark"
            >
              <h3 className="font-bold text-crimson-soft mb-2">{title}</h3>
              <p className="text-sm text-offwhite-dim">
                Description can be edited later.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT (FORMSPREE WORKING) */}
      <section id="contact" className="px-8 py-16 bg-black">
        <div className="mx-auto max-w-4xl rounded-3xl border border-crimson-dark bg-neutral-900/70 p-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Start a Catering Request
          </h2>

          <form
            action="https://formspree.io/f/mqenzdve"
            method="POST"
            className="grid gap-4"
          >
            <input
              name="name"
              required
              className="rounded-xl bg-black border border-neutral-700 px-4 py-3 text-offwhite"
              placeholder="Name"
            />

            <input
              name="contact"
              required
              className="rounded-xl bg-black border border-neutral-700 px-4 py-3 text-offwhite"
              placeholder="Email or phone"
            />

            <input
              name="date"
              className="rounded-xl bg-black border border-neutral-700 px-4 py-3 text-offwhite"
              placeholder="Event date"
            />

            <input
              name="guests"
              className="rounded-xl bg-black border border-neutral-700 px-4 py-3 text-offwhite"
              placeholder="Guest count"
            />

            <textarea
              name="details"
              required
              className="min-h-32 rounded-xl bg-black border border-neutral-700 px-4 py-3 text-offwhite"
              placeholder="Tell us about your event"
            />

            <button
              type="submit"
              className="rounded-full bg-crimson px-6 py-3 font-bold text-offwhite hover:bg-crimson-dark transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}