import { ImageMenu } from "@/components/menu/ImageMenu";
import React from "react";

export default function LayoutMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Imagen */}
      <ImageMenu />
      {children}
    </div>
  );
}
