const featuredProjects = [
  {
    title: "Hardware-Aware AI Algorithm Design",
    description:
      "Undergraduate research on efficient AI inference and hardware-aware optimization for accelerator-friendly algorithms.",
    tags: ["AI Accelerator", "Hardware-Aware ML", "Research"],
    status: "Ongoing",
  },
  {
    title: "FPGA-based Onboard AI Inference Subsystem",
    description:
      "FPGA implementation of a selective downlink-oriented onboard AI inference subsystem for small satellites.",
    tags: ["FPGA", "Verilog", "Onboard AI", "Satellite"],
    status: "Ongoing",
  },
  {
    title: "Car Camping Leveling Cushion System",
    description:
      "Capstone project involving tilt measurement, control logic, and power supply circuit design. Awarded Excellence Prize.",
    tags: ["Embedded System", "Control Logic", "Power Circuit"],
    status: "Awarded",
  },
];

const interests = [
  "Digital IC Design",
  "Computer Architecture",
  "AI Accelerators",
  "RTL Design",
  "FPGA Prototyping",
  "SoC",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <nav className="mb-20 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Chanhoi Lee
          </a>

          <div className="flex gap-5 text-sm text-zinc-600">
            <a href="/projects" className="hover:text-zinc-950">
              Projects
            </a>
            <a href="/blog" className="hover:text-zinc-950">
              Blog
            </a>
            <a href="/cv" className="hover:text-zinc-950">
              CV
            </a>
            <a href="mailto:chanhoi2375@gmail.com" className="hover:text-zinc-950">
              Email
            </a>
          </div>
        </nav>

        <section className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Undergraduate Researcher · Electrical Engineering
          </p>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Digital IC, Computer Architecture, and AI Accelerator Design.
          </h1>

          <p className="max-w-3xl text-xl leading-8 text-zinc-700">
            I am an undergraduate student in Electrical and Electronics Engineering
            at Chung-Ang University. My current interests lie in hardware-oriented
            AI systems, including RTL design, computer architecture,
            and System on Chip(SoC).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-700"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
            >
              Download CV
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-2 text-zinc-600">
                Selected research and engineering projects related to AI hardware,
                FPGA systems, and embedded design.
              </p>
            </div>

            <a href="/projects" className="text-sm font-medium underline">
              All projects
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-zinc-200 p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold">{project.title}</h3>

                <p className="mb-4 text-sm leading-6 text-zinc-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 pt-10">
          <h2 className="text-2xl font-bold tracking-tight">Current Focus</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Research</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Hardware-aware AI inference, accelerator-friendly optimization,
                and FPGA-based prototyping.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Engineering</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                RTL design, digital systems, embedded platforms, and SoC-oriented
                implementation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Long-term Direction</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                SoC design for edge AI, aerospace, robotics,
                and mobility systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}