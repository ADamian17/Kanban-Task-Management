const BoardDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      BoardDetailPage {params.slug}
    </div>
  )
}

export default BoardDetailPage;
