import StyledComponentsRegistry from "./lib/registry";
import "./global.css";

export const metadata = {
  title: "Lilian Peuron - Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
