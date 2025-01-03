import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>{/* <Navbar /> */}</header>
      {children}
    </>
  );
}
