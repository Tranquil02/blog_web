function Section({ title, subtitle, children }) {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-playfair italic text-white">
          {title}
        </h2>
        <p className="mt-2 text-zinc-500">
          {subtitle}
        </p>
      </div>

      {children}
    </section>
  );
}
export default Section;