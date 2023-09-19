/**
 * @description:
 * @param {*} arr
 * @return {*}
 */
export function formatIteratorsData(arr) {
  if (Array.isArray(arr) && arr.length) {
    return arr;
  } else {
    return [];
  }
}

export const pdf1 = {
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
            title: "CDCC DM & HT Management Optometry",
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
                    value: ["No proliferative", "Mild non-proliferative"],
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

export const pdf2 = {
  watermark: {
    text: "xxxxxxxx",
  },
  content: [
    {
      container: "flex",
      col: 3,
      dataSource: [
        null,
        [
          {
            container: "title",
            type: "h1",
            title: "慢性疾病共同治理先导计划",
          },
          {
            container: "title",
            type: "h2",
            title: "Chronic Disease Co-Care Pilot Schema",
          },
          {
            container: "title",
            type: "h2",
            title: "Consultation Letter",
            style: { paddingTop: 20 },
          },
        ],
        [
          {
            container: "qrCode",
            dataSource: "",
            title: "慢性疾病共同治理先导计划",
          },
          {
            container: "inputText",
            title: "Reference No",
          },
        ],
      ],
    },
  ],
};
