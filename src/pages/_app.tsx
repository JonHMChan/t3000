import { Inter as FontSans } from "next/font/google";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import PlausibleProvider from "next-plausible";
import { env } from "~/env.mjs";

import "~/styles/globals.css";
import { api } from "~/utils/api";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <PlausibleProvider domain={env.NEXT_PUBLIC_DOMAIN}>
      <style jsx global>
        {`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
          }
        `}
      </style>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PlausibleProvider>
  );
};

export default api.withTRPC(MyApp);
