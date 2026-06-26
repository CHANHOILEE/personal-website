const projects = [
  {
    title: "Hardware-Aware AI Algorithm Design",
    period: "2026 Summer - Present",
    type: "Undergraduate Research",
    description:
      "Research on AI algorithms and optimization techniques from a hardware implementation perspective.",
    stack: ["Python", "AI Accelerator", "Hardware-Aware Optimization"],
  },
  {
    title: "FPGA-based Onboard AI Inference Subsystem",
    period: "2026 - Present",
    type: "Research Project",
    description:
      "Selective downlink-oriented onboard AI inference subsystem for small satellite applications.",
    stack: ["FPGA", "Verilog", "Vitis", "Vivado"],
  },
  {
    title: "Car Camping Leveling Cushion System",
    period: "Capstone Design",
    type: "Awarded Project",
    description:
      "Implemented tilt sensing, control logic, and power supply circuit design for an indoor leveling cushion system.",
    stack: ["Embedded System", "Control Logic", "Power Circuit"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm underline">
          ← Home
        </a>

        <h1 className="mt-8 text-4xl font-bold tracking-tight">Projects</h1>

        <p className="mt-4 max-w-2xl text-zinc-600">
          Selected projects in digital systems, FPGA implementation, AI hardware,
          embedded systems, and circuit-oriented engineering.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <span>{project.type}</span>
                <span>·</span>
                <span>{project.period}</span>
              </div>

              <h2 className="text-2xl font-semibold">{project.title}</h2>

              <p className="mt-3 leading-7 text-zinc-700">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}