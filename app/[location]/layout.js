import Image from "next/image";
import "../globals.css";

export const metadata = {
    title: "EcoVista-locaion",
    description: "One Place Dashboard for Eco Information",
};

export default function Layout({ children, aqi, weather, wind, temperature }) {
    return (
        <div className="wrapper">
            <div className="overlay"></div>
            <Image width={700} height={1200} src="/background.png" className="bg-img object-cover" alt="Background Image" />
            <main className="!z-50 w-full">
                <div className="container">
                    <div
                        className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20"
                    >
                        {children}
                        {aqi}
                        {weather}
                        {wind}
                        {temperature}
                    </div>
                </div>
            </main>
        </div>
    );
}
