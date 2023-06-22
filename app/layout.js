import Header from "@/components/Header";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Home/Twitter",
  description: "Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-40 relative">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
