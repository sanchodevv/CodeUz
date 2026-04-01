import React, { useState } from "react";
import { Table, Tag, Flex, Input, Select, Button, Typography } from "antd";
import type { TableProps } from "antd";

import "./mentors.css";

const { Title } = Typography;
const { Search } = Input;

interface DataType {
  key: string;
  name: string;
  age: number;
  phoneNumber: string;
  address: string;
  tags: string[];
  category: string;
}

const originalData: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    phoneNumber: "+998 88 676 4545",
    address: "New York",
    tags: ["developer"],
    category: "Programming",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    phoneNumber: "+998 88 676 4545",
    address: "London",
    tags: ["teacher"],
    category: "Web Design",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "4",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "5",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "6",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "7",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "8",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "9",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "10",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "11",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "12",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "13",
    name: "toe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "14",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
  {
    key: "15",
    name: "Joe Black",
    age: 28,
    phoneNumber: "+998 88 676 4545",
    address: "Sydney",
    tags: ["mentor"],
    category: "Marketing",
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];

const Mentors: React.FC = () => {
  const [data, setData] = useState(originalData);

  // SEARCH
const handleSearch = (value: string) => {

  const filtered = originalData.filter((mentor) =>
    mentor.name.toLowerCase().includes(value.toLowerCase())
  );

  setData(filtered);

};

  // FILTER
  const onFilterChange = (value: string) => {
    if (!value) {
      setData(originalData);
    } else {
      const filtered = originalData.filter(
        (mentor) => mentor.category === value
      );
      setData(filtered);
    }
  };
const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="mentors">

      {/* HEADER */}
      <Flex className="title" >

        <Title className="h1" level={3}>Mentors</Title>
        <p>Learn From Proffesianals</p>

      </Flex>


      {/* SEARCH + FILTER */}
      <Flex gap={20} style={{ margin: "20px 0" }}>

       <Search
            className="search"
            placeholder="Search mentor"
             onChange={(e) => handleSearch(e.target.value)}
             style={{ width: 250 }}
        />

        <Select
          placeholder="Filter by category"
          style={{ width: 200 }}
          onChange={onFilterChange}
          allowClear
          options={[
            { value: "Programming", label: "Programming" },
            { value: "Web Design", label: "Web Design" },
            { value: "Marketing", label: "Marketing" },
          ]}
        />

      </Flex>


      {/* TABLE */}
      <Table
        pagination={{
        current: currentPage,
        pageSize: 7,
        total: data.length,
        onChange: (page) => setCurrentPage(page),
  }}
        columns={columns}
        dataSource={data}
      />

    </div>
  );
};

export default Mentors;
