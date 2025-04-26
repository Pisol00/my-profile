'use client';

import { AppProviders } from "@/contexts";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProviders>{children}</AppProviders>;
}