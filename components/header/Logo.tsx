import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <LogoTitle>
      <Link href={`/`}>OnePlus</Link>
    </LogoTitle>
  );
}

import LogoTitle from "@/styles/header/LogoTitle";
