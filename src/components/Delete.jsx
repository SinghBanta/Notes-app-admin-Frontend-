import { Button } from "antd";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Delete = ({ id }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log({ id });

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}api/admin/deleteuser/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("successfull:", response.data);
      toast.success("User deleted successfully!");
    } catch (error) {
      console.log("Response is not up to date", error.response.data);
    } finally {
      window.location.reload();
    }
  };

  return (
    <div>
      <Button onClick={handleDelete} type="dashed">
        DELETE
      </Button>
    </div>
  );
};

export default Delete;
