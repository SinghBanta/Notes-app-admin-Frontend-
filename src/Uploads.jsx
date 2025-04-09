
import { Space, Table, Tag } from "antd";


const Uploads=()=>{


const columns = [
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Uploader",
      dataIndex: "uploader",
      key: "uploader",
    },
    
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      fileName: "Document.pdf",
      uploader: "Alice",
      status: ["completed"],
    },
    {
      key: "2",
      fileName:"Video.mp4",
      uploader: "Bob",
      status: ["in progress"],
    },
    {
      key: "3",
      fileName: "Image.png",
      uploader: "Charlie",
      status: ["completed"],
    },
    {
        key: "4",
        fileName: "bantasingh.vercel.app",
        uploader: "Banta Singh",
        status: ["completed"],
    }
  ];

  return <Table columns={columns} dataSource={data} />

}

export default Uploads;