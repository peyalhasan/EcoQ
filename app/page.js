import LocationDetactor from "@/components/LocationDetactor";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="!z-50 w-full">
      <div className="container">
        <Suspense fallback={<div>Loading location Detector...</div>}>
          <LocationDetactor />
        </Suspense>
      </div>
    </main>
  );
}
