const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kusum-protfolio.vercel.app";

export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      <meta name="theme-color" content="#1f1a12" />
    </>
  );
}
