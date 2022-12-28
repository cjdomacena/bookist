import { UserLayout } from "@components/common/layout/UserLayout";
import { MetaHeader } from "@components/common/util/Metaheader";

const Dashboard = () => {
  return (
    <UserLayout title="Dashboard">
      <MetaHeader title="Bookist — Dashboard" />
      <div></div>
    </UserLayout>
  );
};

export default Dashboard;
