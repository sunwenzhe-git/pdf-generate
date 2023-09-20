import { CSSProperties } from "react";

export interface Schema {
  watermark: {
    text: string;
  };
  pdfHeader?: PageComponent;
  pdfFooter?: PageComponent;
  content: Content[];
}

interface InputText {
  container: "inputText";
  title?: string;
  titleBold?: boolean;
  col?: number;
  colTitle?: string[];
  titleWidth?: string | number;
  dataSource: Array<{
    label: string;
    value: string | string[];
    unit?: string;
    labelTextDecoration?: string;
    valueTextDecoration?: string;
    labelBold?: boolean;
  }>;
}
interface QRCode {
  container: "qrCode";
  dataSource: string;
  describe: Array<InputText>;
  size: number;
}
interface Table {
  container: "table";
  dataSource: Content[][];
}
type Content =
  | {
      container: "text" | "flex" | "title" | "blank" | Content[];
      dataSource?:
        | Array<
            | null
            | Content[]
            | {
                label: string;
                value: string | string[];
                unit?: string;
                labelTextDecoration?: string;
                valueTextDecoration?: string;
                labelBold?: boolean;
              }
          >
        | string;
      type?: string;
      textAlign?: string;
      style?: Record<string, any>;
      title?: string;
      titleBold?: boolean;
    }
  | InputText
  | QRCode
  | Table;
interface PageComponent {
  textAlign?: "left" | "center" | "right"; // "left"
  textDecoration?: CSSProperties["textDecoration"]; // 'unset'
  text?: string; // { pageHeader: 'Page 1 of 3', pageFooter: '1 / 3' }
}
