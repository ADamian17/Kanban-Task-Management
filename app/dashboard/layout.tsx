import HandleTheme from "@/components/HandleTheme";
import DashboardLayout from "@/layouts/Dashboard";

export default function DashboardRootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayout>
        {props.children}
        {props.modal}
      </DashboardLayout>
    </>
  );
}
