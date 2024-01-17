import DashboardContent from "@/layouts/DashboardContent";
import DashboardHeader from "@/layouts/headers/DashboardHeader";

const BoardDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <DashboardHeader boardName={""} pathname={`/${params?.slug}/`} />

      <DashboardContent>
        BoardDetailPage {params.slug}
      </DashboardContent>
    </>
  )
}

export default BoardDetailPage;
