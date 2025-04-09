
import { Space, Table, Tag } from "antd";


const Notes=()=>{


const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "important") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      title: "Meeting Notes",
      content: "Discuss project timeline and deliverables.",
      tags: ["important", "work"],
    },
    {
      key: "2",
      title: "Shopping List",
      content: "Milk, Bread, Eggs, Butter.",
      tags: ["personal"],
    },
    {
      key: "3",
      title: "Workout Plan",
      content: "Monday: Cardio, Tuesday: Strength Training.",
      tags: ["fitness", "routine"],
    },
  ];

  return <Table columns={columns} dataSource={data} />

}

export default Notes;