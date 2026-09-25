import { profile } from "@/data/profile";

// Temporary placeholder — replaced by the full section layout in the next
// commit. Kept minimal here just to verify the toolchain/build works.
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="font-mono text-ink">{profile.name} — rebuild in progress</p>
    </main>
  );
}
