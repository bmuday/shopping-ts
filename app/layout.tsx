"use client";

import "public/globals.css";
import { IProps } from "types/interfaces";
import Providers from "components/Providers";
import Header from "components/Header";
import AppBar from "components/AppBar";

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <AppBar />
          <div className={"  h-screen "}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
