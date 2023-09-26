import { CSSProperties } from "react";

export interface Schema {
  watermark: {
    text: string;
  };
  __INIT_PDF_CONFIG__?: Config;
  pdfHeader?: PageComponent;
  pdfFooter?: PageComponent;
  content: Content[];
}
interface Config {

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
  dataSource: Content[][];
}
interface Flex {
  container: "flex";
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  dataSource: Array<null | {
    flex?: number;
    container: Content[];
  }>;
}
interface Title {
  container: "title";
  title: string;
  type?: string;
  textAlign?: string;
  style?: CSSProperties;
}
interface Text {
  container: "text" | "blank";
  dataSource?: string;
}
interface ContentArr {
  container: Content[];
}
type Content = Text | InputText | QRCode | Table | Title | Flex | ContentArr;
interface PageComponent {
  textAlign?: "left" | "center" | "right"; // "left"
  textDecoration?: CSSProperties["textDecoration"]; // 'unset'
  text?: string; // { pageHeader: 'Page 1 of 3', pageFooter: '1 / 3' }
  color?: string; // grey
  style?: CSSProperties;
}
