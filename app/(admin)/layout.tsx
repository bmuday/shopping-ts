/* eslint-disable @next/next/no-head-element */

import { IProps } from "types/interfaces";

export default function RootLayout({ children }: IProps) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
