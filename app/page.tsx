"use client";

import Layout from "@/components/layouts/Layout";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Button onClick={() => router.push("/settings")}>Click me</Button>
        </main>
      </Layout>
    </>
  );
}
