import { UserLayout } from "@components/common/layout/UserLayout";
import { MetaHeader } from "@components/common/util/Metaheader";
import { NewListingForm } from "@components/ui/listing/NewListingForm";

const CreateNew = () => {
  return (
    <UserLayout title="Create New Listing">
      <MetaHeader title="Bookist — Create New Listing" />
      <NewListingForm />
    </UserLayout>
  );
};

export default CreateNew;
