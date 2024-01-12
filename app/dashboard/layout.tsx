import DashboardLayout from "@/layouts/Dashboard";

export default function DashboardRootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
