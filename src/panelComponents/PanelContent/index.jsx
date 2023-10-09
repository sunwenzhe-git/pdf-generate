import { useState } from "react";
import {
  Button,
  Form,
  Radio,
  Select,
  Collapse,
  Divider,
  Input,
  InputNumber,
  Switch,
} from "antd";

const { Panel } = Collapse;
const PanelContent = (props) => {
  const { listName = "content", label = "content" } = props;
  const [select, setSelect] = useState("");
  function getFormItem(type, field) {
    switch (type) {
      case "flex":
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
              label="数据源"
              listName={[field.name, "dataSource"]}
            />
          </>
        );
      case "qrCode":
        return (
          <>
            <Form.Item label="数据源" name={[field.name, "dataSource"]}>
              <Input />
            </Form.Item>
            <Form.Item label="尺寸" name={[field.name, "size"]}>
              <InputNumber min={100} max={300} />
            </Form.Item>
            <PanelContent
              label="描述信息"
              listName={[field.name, "describe"]}
            />
          </>
        );
      case "inputText":
        return (
          <>
            <Form.Item label="标题" name={[field.name, "title"]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="标题是否加粗"
              name={[field.name, "titleBold"]}
              initialValue={true}
            >
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="列数" name={[field.name, "col"]} initialValue={1}>
              <InputNumber min={1} max={3} />
            </Form.Item>
            <Form.Item label="列标题" name={[field.name, "colTitle"]}>
              <Input />
            </Form.Item>
            <Form.Item label="label宽度" name={[field.name, "lableWidth"]}>
              <Input />
            </Form.Item>
            <Collapse>
              <Panel header={"数据源 :"}>
                <Form.List name="dataSource">
                  {(fields, { add, remove }) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          rowGap: 16,
                          flexDirection: "column",
                        }}
                      >
                        {fields.map(({ key, name, ...restField }) => (
                          <>
                            <Form.Item label="label" name={[name, "label"]}>
                              <Input />
                            </Form.Item>
                            <Form.Item label="value" name={[name, "value"]}>
                              <Input />
                            </Form.Item>
                            <Form.Item label="单位" name={[name, "unit"]}>
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label="label是否有下划线"
                              name={[name, "labelTextDecoration"]}
                            >
                              <Switch />
                            </Form.Item>
                            <Form.Item
                              label="label是否加粗"
                              name={[name, "labelBold"]}
                            >
                              <Switch />
                            </Form.Item>
                            <Form.Item
                              label="label是否需要冒号"
                              name={[name, "labelColon"]}
                            >
                              <Switch />
                            </Form.Item>
                            <Form.Item
                              label="value是否有下划线"
                              name={[name, "valueTextDecoration"]}
                            >
                              <Switch />
                            </Form.Item>
                          </>
                        ))}
                        <Button type="dashed" onClick={() => add()} block>
                          + Add Item
                        </Button>
                      </div>
                    );
                  }}
                </Form.List>
              </Panel>
            </Collapse>
          </>
        );
      case "table":
        return (
          <>
            <Collapse>
              <Panel header={"数据源 :"}>
                <Form.List name="dataSource">
                  {(fields, { add, remove }) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          rowGap: 16,
                          flexDirection: "column",
                        }}
                      >
                        {fields.map(({ key, name, ...restField }) => (
                          <PanelContent
                            label="行"
                            listName={[field.name, "describe"]}
                          />
                        ))}
                        <Button type="dashed" onClick={() => add()} block>
                          + Add Item
                        </Button>
                      </div>
                    );
                  }}
                </Form.List>
              </Panel>
            </Collapse>
          </>
        );
      case "title":
        return (
          <>
            <Form.Item
              label="标题"
              rules={[{ required: true }]}
              name={[field.name, "title"]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="标题类型"
              name={[field.name, "type"]}
              initialValue="h4"
            >
              <Select
                options={[
                  { value: "h1", label: "h1" },
                  { value: "h2", label: "h2" },
                  { value: "h3", label: "h3" },
                  { value: "h4", label: "h4" },
                  { value: "h5", label: "h5" },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="对齐方式"
              name={[field.name, "textAlign"]}
              initialValue="center"
            >
              <Radio.Group>
                <Radio value="left">左</Radio>
                <Radio value="center">中</Radio>
                <Radio value="right">右</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="标题宽度" name={[field.name, "titleWidth"]}>
              <Input />
            </Form.Item>
          </>
        );
      case "text":
        return (
          <>
            <Form.Item label="数据源" name={[field.name, "dataSource"]}>
              <Input />
            </Form.Item>
          </>
        );
      default:
        return <></>;
    }
  }
  return (
    <Collapse>
      <Panel header={`${label}`}>
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
                            { value: "flex", label: "Flex" },
                            { value: "title", label: "Title" },
                            { value: "table", label: "Table" },
                            { value: "qrCode", label: "二维码" },
                            { value: "inputText", label: "InputText" },
                            { value: "text", label: "Text" },
                            { value: "blank", label: "空行" },
                            { value: null, label: "空组件" },
                          ]}
                        />
                      </Form.Item>
                      {getFormItem(select, field)}
                      <Divider />
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
      </Panel>
    </Collapse>
  );
};

export default PanelContent;
