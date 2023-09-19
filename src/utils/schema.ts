import { CSSProperties } from "react";

interface Schema {
  watermark: {
    text: string;
  };
  pageHeader?: PageComponent;
  pageFooter?: PageComponent;
  content: Content[];
}

interface Content {
  container: "table" | "text" | "flex" | "title" | "qrCode" | "inputText";
}
interface PageComponent {
  textAlign?: "left" | "center" | "right"; // "left"
  textDecoration: CSSProperties["textDecoration"]; // 'unset'
  text?: string; // { pageHeader: 'Page 1 of 3', pageFooter: '1 / 3' }
}
