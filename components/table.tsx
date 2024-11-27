import { ConfigProvider, Table } from "antd"
import styled from 'styled-components';

const StyledTable = styled(Table)`
  .ant-table-column-sorters .ant-table-column-sorter-inner .anticon {
    color: black; /* Replace with your desired color */
  }
`;

const MyTable = (props: any) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: "#727272",
              fontSize: 14,
              fontWeightStrong: 400,
            },
          },
        }}
      >
        <Table {...props} />
      </ConfigProvider>
    </div>
  )
}

const MyBlackTable = (props: any) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: "black",
              fontSize: 14,
              fontWeightStrong: 400,
            },
          },
        }}
      >
        <StyledTable {...props} />
      </ConfigProvider>
    </div>
  )
}

export { MyTable, MyBlackTable }
