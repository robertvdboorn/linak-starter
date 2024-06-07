import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Link from "next/link";
import "../components/canvasComponents";
import { RootComponentInstance } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";

export interface PageCompositionProps {
  data: RootComponentInstance;
}

export default function PageComposition({ data }: PageCompositionProps) {
  const composition = data;
  const { pageTitle } = composition?.parameters || {};
  return (
    <>
      <Head>
        <title>{pageTitle?.value as string}</title>
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
        <UniformComposition data={composition}>
          <UniformSlot name="content" />
        </UniformComposition>
        <Footer />
      </main>
    </>
  );
}
