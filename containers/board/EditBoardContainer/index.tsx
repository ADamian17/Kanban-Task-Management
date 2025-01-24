"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import EditBoardForm from "@/components/forms/board-forms/EditBoardForm";
import Modal from "@/components/ui/Modal";

type EditBoardContainerProps = {
  boarData: GetOneBoardByUriQuery["getOneBoard"];
};

const EditBoardContainer: React.FC<EditBoardContainerProps> = ({
  boarData,
}) => {
  const router = useRouter();

  const handleClose = () => router.push(boarData.uri ?? '');

  return (
    <Modal show={true} onClose={handleClose} title="Edit Task">
      <EditBoardForm
        boardId={boarData?.id ?? ""}
        boardName={boarData?.name ?? ""}
        columns={boarData?.columns.nodes ?? []}
      />
    </Modal>
  );
};

export default EditBoardContainer;
