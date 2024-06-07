import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Link from "next/link";
import Hero from "./Hero";

export default function PageComposition() {
  
  return (
    <>
      <Head>
        <title>Welcome to the demo</title>
      </Head>
      <main className="main">
        <div className="navigation">
          <span key="en-US">
            <Link href="/" locale="en-US">
              English
            </Link>
          </span>
          <span key="de-DE">
            <Link href="/de-DE" locale="de-DE">
              Deutsch
            </Link>
          </span>
        </div>
        <Hero
          title={"This is an example title"}
          description={"and this is the description <br> with a new line"}
        />
        <Footer />
      </main>
    </>
  );
}
