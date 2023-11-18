import "./globals.scss";
import styles from "./layout.module.scss";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
import Sidebar from "@/features/sidebar";
import { readJsonFile } from "./shared/file-helper";
import { MockFileNames } from "@/constants";
import 'react-loading-skeleton/dist/skeleton.css';

// config.autoAddCss = false;

export const metadata = {
  title: "E-Commerce Dashboard",
  description: "Fictional E-Commerce Platform Dashboard",
};

export default async function RootLayout(
  { children }: { children: React.ReactNode },
) {
  const mockData  = await readJsonFile(MockFileNames.NAVIGATION) as {navItems: any};
  return (
    <html lang="en">
      <meta name="theme-color" content="#ffffff" />
      <body>
        <aside className={styles.aside}>
          <Sidebar navItems={mockData.navItems}/>
        </aside>
        <main className={styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
