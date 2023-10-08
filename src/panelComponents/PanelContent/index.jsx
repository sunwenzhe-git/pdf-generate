import { useState } from "react";
import { Button, Form, Radio, Select, Space } from "antd";

const PanelContent = (props) => {
  const { listName = "content", label = "content" } = props;
  const [select, setSelect] = useState("");
  function getFormItem(type, field) {
    switch (type) {
      case "Flex":
        return (
          <>
            <Form.Item
              label="主轴方向"
              name={[field.name, "flexDirection"]}
              initialValue="row"
            >
              <Radio.Group>
                <Radio value="row">从左到右</Radio>
                <Radio value="row-reverse">从右到左</Radio>
                <Radio value="column">从上到下</Radio>
                <Radio value="column-reverse">从下到上</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="对齐方式"
              name={[field.name, "justifyContent"]}
              initialValue="flex-start"
            >
              <Radio.Group>
                <Radio value="flex-start">左对齐</Radio>
                <Radio value="center">居中</Radio>
                <Radio value="space-between">两端对齐</Radio>
              </Radio.Group>
            </Form.Item>
            <PanelContent
              label="dataSource"
              listName={[field.name, "dataSource"]}
            />
          </>
        );
      default:
        break;
    }
  }
  return (
    <div style={{ marginLeft: 15 }}>
      <div>{label} :</div>
      <div style={{ marginLeft: 15 }}>
        <Form.List name={listName}>
          {(fields, { add, remove }) => {
            return (
              <div
                style={{
                  display: "flex",
                  rowGap: 16,
                  flexDirection: "column",
                }}
              >
                {fields.map((field, index) => {
                  return (
                    <>
                      <Form.Item
                        label="container"
                        name={[field.name, "container"]}
                      >
                        <Select
                          placeholder="Please select components"
                          onChange={(value) => {
                            setSelect(value);
                          }}
                          options={[
                            { value: "Flex", label: "Flex" },
                            { value: "Title", label: "Title" },
                            { value: "Table", label: "Table" },
                            { value: "QRCode", label: "QRCode" },
                            { value: "InputText", label: "InputText" },
                            { value: "Text", label: "Text" },
                            { value: null, label: "空" },
                          ]}
                        />
                      </Form.Item>
                      {getFormItem(select, field)}
                    </>
                  );
                })}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            );
          }}
        </Form.List>
      </div>
    </div>
  );
};

export default PanelContent;
