
import { Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";




const Users=({value})=>{


  const columns = [
      {
        title: "Name",
        dataIndex: "username",
        key: "username",
        render: (text) => <a>{text}</a>,
      },
      
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
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
  
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];
  const [data, setData] = useState([]);

  

  useEffect(()=>{
    const getAllData = async() =>{
      const {data: response} = await axios.get(import.meta.env.VITE_GET_AllADMIN);
    
      setData(response.users)

    }

    getAllData();
    
    

  }, [value])

  return <Table columns={columns} dataSource={data} />

}

export default Users;