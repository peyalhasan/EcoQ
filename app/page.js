import LocationDetactor from "@/components/LocationDetactor";
import Image from "next/image";

export default function Home() {
  return (
    <main className="!z-50 w-full">
      <div className="container">
        <LocationDetactor />
      </div>
    </main>
  );
}
