import React, { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import axios from 'axios'

const Usermodal = ({ setValue }) => {
  const [modal2Open, setModal2Open] = useState(false);
  
const [username, setUsername] = useState("");
const [role, setRole] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
        setUsername(value);
    } else if (name === "role") {
        setRole(value);
    }
    else if (name === "email") {
        setEmail(value);
    } else if (name === "password") {
        setPassword(value);
    }
};

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ username, role, email, password });

    try {
        // console.log("Environment variable USER_PATH:",);
        const response = await axios.post(import.meta.env.VITE_NEW_USER, {  
          username,
          role,
          email,
          password,
        });
        await axios.post(import.meta.env.VITE_GET_SENDMAIL,{
        username: username,
        email: email,
        password: password,

        })
        
        
        console.log('successfull:', response.data);
        setValue((prev) => !prev);
        toast.success("User added successfully!");
        
      } catch (error) {
        console.log("Response is not up to date", error.response.data); 
      } finally {
        setModal2Open(false);
        // window.location.reload();
      }
};

return (
    <div className="flex justify-end mt-4 mr-5">
        <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setModal2Open(true)}
        >
            ADD USER
        </Button>
        <Modal
            title={<h2 className="text-lg font-bold text-gray-800">Add New User</h2>}
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer={null}
            className="p-4"
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label
                        htmlFor="username"
                        className="text-sm font-medium text-gray-700"
                    >
                        User
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                    <label
                        htmlFor="email"
                        className="mt-2 text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                    <label
                        htmlFor="password"
                        className="mt-2 text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="role"
                        className="text-sm font-medium text-gray-700"
                    >
                        Role
                    </label>
                    <select
                        name="role"
                        id="role"
                        value={role}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                </div>
                <div className="flex justify-end space-x-2">
                    <Button
                        type="default"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
                        onClick={() => setModal2Open(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Modal>
    </div>
);
};
export default Usermodal;
