import React, { useTransition, forwardRef } from "react";
import { Tabs, Input, Radio, Collapse, Switch } from "antd";
import { ProForm } from "@ant-design/pro-components";
import PanelContent from "../PanelContent";
import AceEditor from "react-ace";
import "brace/mode/json";
import "brace/theme/tomorrow";
import { MyFormItem, MyFormItemGroup } from "../FormGroup";

const { Panel } = Collapse;
const PanelContainer = ({ setConfig, config, formRef }) => {
  const [isPending, startTransition] = useTransition();
  const onValuesChange = (values, allValues) => {
    startTransition(() => setConfig(allValues));
  };

  console.log(formRef, "config");
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "表单",
            children: (
              <ProForm
                name="validate_other"
                formRef={formRef}
                // {...formItemLayout}
                // layout={"horizontal"}
                onValuesChange={onValuesChange}
              >
                <div style={{ paddingBottom: 10 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingBottom: 10,
                    }}
                  >
                    内容
                  </div>
                  <PanelContent />
                </div>
                <div style={{ paddingBottom: 10 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingBottom: 10,
                    }}
                  >
                    水印
                  </div>
                  <Collapse>
                    <Panel>
                      <MyFormItemGroup prefix={["watermark"]}>
                        <MyFormItem name="text" label="文本">
                          <Input />
                        </MyFormItem>
                      </MyFormItemGroup>
                    </Panel>
                  </Collapse>
                </div>
                <div style={{ paddingBottom: 10 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      paddingBottom: 10,
                    }}
                  >
                    页眉/页脚
                  </div>
                  <Collapse>
                    <Panel>
                      <Tabs
                        defaultActiveKey="1"
                        items={[
                          {
                            key: "1",
                            label: "页眉",
                            children: (
                              <MyFormItemGroup prefix={["pdfHeader"]}>
                                <MyFormItem
                                  name="textAlign"
                                  label="对齐方式"
                                  initialValue="left"
                                >
                                  <Radio.Group>
                                    <Radio value="left">左</Radio>
                                    <Radio value="center">中</Radio>
                                    <Radio value="right">右</Radio>
                                  </Radio.Group>
                                </MyFormItem>
                                <MyFormItem
                                  name="textDecoration"
                                  label="文本装饰"
                                  initialValue="underline"
                                >
                                  <Radio.Group>
                                    <Radio value="underline">下划线</Radio>
                                    <Radio value="">无</Radio>
                                  </Radio.Group>
                                </MyFormItem>
                                <MyFormItem name="text" label="文本">
                                  <Input />
                                </MyFormItem>
                              </MyFormItemGroup>
                            ),
                          },
                          {
                            key: "2",
                            label: "页脚",
                            children: (
                              <MyFormItemGroup prefix={["pdfFooter"]}>
                                <MyFormItem
                                  name="textAlign"
                                  label="对齐方式"
                                  initialValue="left"
                                >
                                  <Radio.Group>
                                    <Radio value="left">左</Radio>
                                    <Radio value="center">中</Radio>
                                    <Radio value="right">右</Radio>
                                  </Radio.Group>
                                </MyFormItem>
                                <MyFormItem
                                  name="textDecoration"
                                  label="是否有下划线"
                                >
                                  <Switch />
                                </MyFormItem>
                                <MyFormItem name="text" label="文本">
                                  <Input />
                                </MyFormItem>
                              </MyFormItemGroup>
                            ),
                          },
                        ]}
                      />
                    </Panel>
                  </Collapse>
                </div>
              </ProForm>
            ),
          },
          {
            key: "2",
            label: "JSON Schema",
            children: (
              <AceEditor
                mode="json"
                width={"100%"}
                theme="tomorrow"
                name="editor"
                highlightActiveLine
                wrapEnabled
                onChange={(value) => {
                  formRef?.current?.setFieldsValue(JSON.parse(value));
                  setConfig(JSON.parse(value));
                }}
                value={JSON.stringify(config, null, 2)}
                fontSize={14}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                }}
                editorProps={{ $blockScrolling: true }}
              />
            ),
          },
        ]}
      />
    </>
  );
};

export default PanelContainer;
