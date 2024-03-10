// types
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

// remix
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// components
import { Alert, Card, List, Space } from "antd";
import { PageContainer } from "@ant-design/pro-components";

// libs
import { lastValueFrom } from "rxjs";

// db
import { getSleepData$ } from "~/db/health-disease/sleep";

// config
import { antdGrid } from "~/config/antd-grid";

// remix:meta
export const meta: MetaFunction = () => {
  return [{ title: "disease-sleep" }];
};

// remix:loader
export const loader: LoaderFunction = async () => {
  const data = await lastValueFrom(getSleepData$());
  return json(data);
};

export default function HealthSleepRoute() {
  const { data, op_data } = useLoaderData<typeof loader>();
  return (
    <PageContainer title="sleep">
      <Space direction="vertical">
        <Alert
          description="作为程序员，长时间进行电脑工作和缺乏身体活动可能导致一些与睡眠相关的常见问题。以下是一些与睡眠相关的常见问题："
          type="warning"
          showIcon
        />
        <List
          grid={antdGrid}
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item>
              <Card title={item.title} style={{ minHeight: "200px" }}>
                {item.content}
              </Card>
            </List.Item>
          )}
        />
        <Alert
          description="为了改善睡眠质量和预防睡眠相关问题，程序员可以尝试以下策略："
          type="warning"
          showIcon
        />
        <List
          grid={antdGrid}
          dataSource={op_data}
          renderItem={(item: any) => (
            <List.Item>
              <Card title={false} style={{ minHeight: "130px" }}>
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </Space>
    </PageContainer>
  );
}
