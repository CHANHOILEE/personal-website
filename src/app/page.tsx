import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Chanhoi LEE</h1>

        <p className="text-xl text-gray-700">
          Undergraduate student in Electrical and Electronics Engineering at
          Chung-Ang University.
        </p>

        <p className="text-gray-600">
          Interested in Digital IC Design, Computer Architecture, AI
          Accelerators, and SoC.
        </p>

        <div className="flex gap-4">
          <a href="/cv" className="underline">
            CV
          </a>
          <a href="/projects" className="underline">
            Projects
          </a>
          <a href="/blog" className="underline">
            Blog
          </a>
          <a href="mailto:chanhoi2375@gmail.com" className="underline">
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
