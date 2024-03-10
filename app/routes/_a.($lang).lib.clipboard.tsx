// types
import type { MetaFunction } from "@remix-run/node";

// react
import { useState } from "react";

// components
import { Button, Input, Space } from "antd";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import * as _clipboard from "react-copy-to-clipboard";

// remix:meta
export const meta: MetaFunction = () => {
  return [{ title: "lib-clipboard" }];
};

const { CopyToClipboard } = _clipboard;

export default function ClipboardRoute() {
  const [data, setData] = useState({
    value: "",
  });
  return (
    <PageContainer title="Clipboard">
      <ProCard>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            width={500}
            value={data.value}
            onChange={({ target: { value } }) => setData({ ...data, value })}
            placeholder="Input something to copy"
          />

          <CopyToClipboard
            text={data.value}
            onCopy={() => setData({ ...data })}
          >
            <Button>Copy to clipboard with button</Button>
          </CopyToClipboard>
        </Space>
      </ProCard>
    </PageContainer>
  );
}
