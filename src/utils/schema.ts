import { CSSProperties } from "react";

export interface Schema {
  watermark: {
    // TODO can config style
    text: string;
  };
  __INIT_PDF_CONFIG__?: Config;
  pdfHeader?: PageComponent;
  pdfFooter?: PageComponent;
  content: Content[];
}
interface Config {
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  width_first?: number;
  width_second?: number;
}
interface InputText {
  container: "inputText";
  title?: string;
  titleBold?: boolean;
  col?: number;
  style?: CSSProperties | string;
  colTitle?: string[];
  lableWidth?: string | number;
  dataSource: Array<{
    label: string;
    value: string | string[];
    unit?: string;
    labelTextDecoration?: CSSProperties["textDecoration"];
    valueTextDecoration?: CSSProperties["textDecoration"];
    labelBold?: boolean;
    valueBold?: boolean;
    labelColon?: boolean; // true
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
  dataSource: Content[];
}
type FlexContent = Content & {
  flex?: number
}
interface Flex {
  container: "flex";
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  dataSource: Array<null | FlexContent>;
}
interface Title {
  container: "title";
  title: string;
  type?: string;  // h4
  textAlign?: string;
  style?: CSSProperties;
}
interface Text {
  container: "text" | "blank";
  dataSource?: string;
  style?: CSSProperties;
}
interface Containers {
  container: "containers";
  dataSource: Content[]
}

type Content = Text | InputText | QRCode | Table | Title | Flex | Containers;
interface PageComponent {
  textAlign?: "left" | "center" | "right"; // "left"
  textDecoration?: CSSProperties["textDecoration"]; // 'unset'
  text?: string; // { pageHeader: 'Page 1 of 3', pageFooter: '1 / 3' }
  color?: string; // grey
  style?: CSSProperties;
}
