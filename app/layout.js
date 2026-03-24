import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next"


const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "HezTec",
  description: "Electronics Component Hub.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider unsafe_disableDevelopmentModeConsoleWarning={true}>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
