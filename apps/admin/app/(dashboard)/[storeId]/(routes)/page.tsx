import prisma from "@sarvabazaar/database/client";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div>
      <div>Active Store: {store?.name}</div>
    </div>
  );
};

export default DashboardPage;
