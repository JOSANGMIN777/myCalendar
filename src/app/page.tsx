'use client'

import { TEXTS } from "@/styles/common";
import { InitialPage } from "@/styles/styles";

export default function Home() {
  
  return (
   <>
   <InitialPage>
   <h1>{TEXTS.INITIAL_PAGE_TITE}</h1>
   </InitialPage>
   <InitialPage>
   <h3>{TEXTS.INITIAL_PAGE_DESCRIPTION}</h3>
   </InitialPage>
   </>
  );
}

