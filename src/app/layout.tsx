import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Homepage",
  description: "A movie app to save and bookmark your favorite movies."
}

const RootLayout = ({ children }: {
  children: Readonly<{children: React.ReactNode}>
}) => {
  return (
    <div>layout</div>
  )
}
export default RootLayout;