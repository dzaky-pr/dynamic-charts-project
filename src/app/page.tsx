import ButtonLink from "@/components/links/ButtonLink";

export default function Home() {
  return (
    <main className="flex flex-row gap-4 justify-center items-center h-screen w-screen">
      <ButtonLink href="/shadcn-dashboard">Shadcn Dashboard</ButtonLink>
      <ButtonLink href="/apex-dashboard">Apex Dashboard</ButtonLink>
    </main>
  );
}
