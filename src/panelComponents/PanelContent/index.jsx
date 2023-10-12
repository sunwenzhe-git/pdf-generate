import {
  Button,
  Form,
  Radio,
  Select,
  Collapse,
  InputNumber,
  Switch,
} from "antd";
import {
  ProFormDependency,
  ProFormList,
  ProFormText,
  ProCard,
  ProFormSelect,
} from "@ant-design/pro-components";

const { Panel } = Collapse;
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
          <PanelContent label="数据源" listName={[field.name, "dataSource"]} />
        </>
      );
    case "qrCode":
      return (
        <>
          <ProFormText name="dataSource" label="数据源" />
          <Form.Item label="尺寸" name={[field.name, "size"]}>
            <InputNumber min={100} max={300} />
          </Form.Item>
          <PanelContent label="描述信息" listName={[field.name, "describe"]} />
        </>
      );
    case "inputText":
      return (
        <>
          <ProFormText name="title" label="标题" />
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
          <ProFormText name="colTitle" label="列标题" />
          <ProFormText name="lableWidth" label="label宽度" />
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
                          <ProFormText name="label" label="label" />
                          <ProFormText name="value" label="value" />
                          <ProFormText name="unit" label="单位" />
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
              <ProFormList name="dataSource">
                {(fields, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        rowGap: 16,
                        flexDirection: "column",
                      }}
                    >
                      <PanelContent label="行" listName={"describe"} />
                    </div>
                  );
                }}
              </ProFormList>
            </Panel>
          </Collapse>
        </>
      );
    case "title":
      return (
        <>
          <ProFormText name="title" rules={[{ required: true }]} label="标题" />
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
          <ProFormText name="titleWidth" label="标题宽度" />
        </>
      );
    case "text":
      return <ProFormText name="dataSource" label="数据源" />;
    case "containers":
      return <PanelContent listName="container" />;
    default:
      return <></>;
  }
}
const PanelContent = (props) => {
  const { listName = "content", label = "content" } = props;

  return (
    <Collapse>
      <Panel header={`${label}`}>
        <ProFormList
          name={listName}
          itemRender={({ listDom, action }, { index }) => (
            <ProCard
              bordered
              style={{ marginBlockEnd: 8 }}
              extra={action}
              bodyStyle={{ paddingBlockEnd: 0 }}
            >
              {listDom}
            </ProCard>
          )}
        >
          {(fields, index, action) => {
            return (
              <div
                style={{
                  display: "flex",
                  rowGap: 16,
                  flexDirection: "column",
                }}
              >
                <ProFormSelect
                  label="container"
                  name="container"
                  valueEnum={{
                    flex: "Flex",
                    title: "Title",
                    table: "Table",
                    qrCode: "二维码",
                    inputText: "InputText",
                    text: "Text",
                    blank: "空行",
                    null: "空组件",
                    containers: "组件组",
                  }}
                />
                <ProFormDependency key="remark" name={["container"]}>
                  {({ container }) => {
                    return (
                      <div style={{ paddingBottom: 10 }}>
                        {getFormItem(container, fields)}
                      </div>
                    );
                  }}
                </ProFormDependency>
              </div>
            );
          }}
        </ProFormList>
      </Panel>
    </Collapse>
  );
};

export default PanelContent;
