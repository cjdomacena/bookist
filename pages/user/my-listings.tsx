import { UserLayout } from "@components/common/layout/UserLayout";
import { MetaHeader } from "@components/common/util/Metaheader";

const MyListings = () => {
  return (
    <UserLayout title="My Listings">
      <MetaHeader title="Bookist — My Listings" />
      <div>
        <h1 className="text-2xl font-semibold text-neutral-800">My Listings</h1>
      </div>
    </UserLayout>
  );
};
export default MyListings;
