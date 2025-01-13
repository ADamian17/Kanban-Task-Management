import Modal from "@/components/ui/Modal";
import React from "react";

const EditTaskPage: React.FC = async (props) => {
  return (
    <Modal show={true}>
      <p>This is the edit task page</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Modal>
  );
};

export default EditTaskPage;
