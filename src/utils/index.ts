import { Schema } from "./schema";
/**
 * @description:
 * @param {*} arr
 * @return {*}
 */
export function formatIteratorsData(arr: any) {
  if (Array.isArray(arr) && arr.length) {
    return arr;
  } else {
    return [];
  }
}

export const pdf1: Schema = {
  watermark: {
    // can config style
    text: "WatermarkWatermark",
  },
  content: [
    {
      container: "table",
      dataSource: [
        [
          {
            container: "title",
            title: "中文CDCC DM & HT Management Optometry",
            type: "h3", // 默认最小的
            textAlign: "center", // 默认left
          },
          {
            container: "inputText",
            titleBold: true,
            titleWidth: "width_first",
            dataSource: [
              {
                label: "HKIC No",
                value: "s230024(0)",
              },
              {
                label: "Name",
                value:
                  "zhangsanxxxxxxdddddddhhhhhhlllllllzzzzzzmmmmmmmmmdddddda",
              },
              {
                label: "DOB",
                value: "01-Jan-1960",
              },
              {
                label: "Age",
                value: "63",
                unit: "years",
              },
              {
                label: "Sex",
                value: "Male",
              },
            ],
          },
        ],
        [
          {
            container: "inputText",
            title: "Consultation Summary",
            titleWidth: "width_second",
            dataSource: [
              {
                label: "Prof Service",
                value: "Optomertry Service",
              },
              {
                label: "Programme",
                value: "Chonic Disease Co-Care Pilot Scheme",
              },
              {
                label: "Create Centre",
                value:
                  "VHC4 HOSPITALmkmkmkmkmkmkmkmkmmkmkmkmkmmlkdsdsppoeiwoeijijioqjodioeiie",
              },
              {
                label: "Create by",
                value: "Doctor TASHSOP, DOCTOR001",
              },
            ],
          },
        ],
        [
          {
            container: [
              {
                container: "inputText",
                titleWidth: "width_second",
                dataSource: [
                  {
                    label: "Consultation Date",
                    value: "07-Sep-2023",
                  },
                  {
                    label: "Consultation Type",
                    value: "F to F Consultation",
                  },
                ],
              },
              {
                container: "inputText",
                title: "Optometry Assessment",
                col: 2, // 默认1
                colTitle: ["Right Eye", "Left Eye"],
                titleWidth: "width_second",
                dataSource: [
                  {
                    label: "Visual Acutiy",
                    value: ["6/3(without pinhole)", "6/4(with pinhole)"],
                  },
                  {
                    label: "",
                    value: ["6/5(without pinhole)", "6/6(with pinhole)"],
                  },
                  {
                    label: "Retinal phatography done",
                    value: ["No", "Yes"],
                  },
                  {
                    label: "Diabetic Retinopathy",
                    value: [
                      "No proliferative-ccccclllllkkkkkkoooooooopppppiiiiuuu",
                      "Mild non-proliferative",
                    ],
                  },
                ],
              },
              {
                container: "text",
                dataSource: "本文件只适用于xxxxxxxxxxxxxx",
              },
            ],
          },
        ],
      ],
    },
    {
      container: "text",
      dataSource: "这里只是一些文本ccccc",
    },
  ],
};

export const pdf2: Schema = {
  watermark: {
    text: "5491143518",
  },
  pdfHeader: {
    textAlign: "center",
    // textDecoration: ""
  },
  content: [
    {
      container: "flex",
      dataSource: [
        null,
        [
          {
            container: "title",
            type: "h3",
            title: "慢性疾病共同治理先导计划",
            textAlign: "center",
          },
          {
            container: "title",
            type: "h4",
            title: "Chronic Disease Co-Care Pilot Schema",
            textAlign: "center",
          },
          {
            container: "title",
            type: "h4",
            title: "Consultation Letter",
            textAlign: "center",
            style: { paddingTop: 20 },
          },
        ],
        [
          {
            container: "qrCode",
            dataSource: "https://example.com",
            describe: [
              {
                container: "inputText",
                title: "Reference No.:",
                dataSource: [
                  {
                    label: "",
                    value: "23830003230000252595",
                  },
                ],
              },
            ],
            size: 100,
          },
        ],
      ],
    },
    {
      container: "title",
      title: "服務使用者資料",
    },
    {
      container: "inputText",
      title: "Participant Particulars",
      titleWidth: "width_second",
      dataSource: [
        { label: "姓名", value: "陳大文二二零" },
        {
          label: "Name",
          value: "zhangsanxxxxxxdddddddhhhhhhlllllllzzzzzzmmmmmmmmmdddddda",
        },
        {
          label: "香港身分證HKIC No.",
          value: "s230024(0)",
        },
        {
          label: "性別Sex",
          value: "男M",
        },
        {
          label: "地區District",
          value: "香港管理區HA",
        },
        {
          label: "",
          value: "HA Hospital",
        },
        {
          label: "",
          value: "Cheshire Home, Chung Hom Kok",
        },
        {
          label: "",
          value: "Cc: DHC/DHCE",
        },
      ],
    },
    {
      container: "inputText",
      titleBold: true,
      dataSource: [
        {
          label: "Reason for Consultation",
          value: "For HA designated Medicine & Geriatrics Specialist",
          labelTextDecoration: "underline",
          valueTextDecoration: "underline",
          labelBold: true,
        },
      ],
    },
    { container: "blank" },
    {
      container: "inputText",
      titleWidth: 250,
      dataSource: [
        {
          label: "Thank you for seeing the participant",
          value: "CHAN, TAI MAN 220",
          valueTextDecoration: "underline",
          labelBold: true,
        },
      ],
    },
    { container: "blank" },
    {
      container: "text",
      dataSource:
        "Participant has enrolled in CDCC Pilot Scheme and was diagnosed with Diabetes mellitus (DM), Hypertension (HT)",
    },
  ],
};
