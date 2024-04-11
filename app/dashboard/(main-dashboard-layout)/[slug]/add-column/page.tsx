import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/UI/Modal"), { ssr: false });

const AddColumnPage = () => {
  return (
    <Modal>
      Add New Column
    </Modal>
  );
}

export default AddColumnPage;
