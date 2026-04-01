import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import "./ment.css"

interface DataType {
  key: string;
  name: string;
  age: number;
  phoneNumber: string;
  address: string;
  tags: string[];
  category: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'PhoneNumber',
    dataIndex: 'phoneNumber',
    key: 'phonenumber',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'blue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category"
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    phoneNumber: "+998 88 676 4545",
    address: 'New York No. 1 Lake Park',
    tags: ['devoloper'],
    category: "Programming"
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    phoneNumber: "+998 88 676 4545",
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    category: "Web Design"
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    phoneNumber: "+998 88 676 4545",
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    category: "Smm Marketolog"
  },
];

const Ment : React.FC = () => <Table<DataType> columns={columns} dataSource={data}  />;

export default Ment;