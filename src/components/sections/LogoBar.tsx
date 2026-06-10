import { AnimateIn } from "@/components/ui/AnimateIn";

export function LogoBar() {
  return (
    <section className="py-12 border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-text-muted text-sm font-medium mb-8">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40">
            {["TechCorp", "InnovateCo", "DataFlow", "ScaleUp", "NexGen"].map(
              (name) => (
                <div
                  key={name}
                  className="text-text-primary font-bold text-xl tracking-tight"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
