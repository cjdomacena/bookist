import { SubmitButton } from "@components/common/button/SubmitButton";
import { Input } from "@components/common/input/Input";

export const NewListingForm = () => {
  return (
    <div className="w-full">
      <form className="mx-auto grid max-w-md grid-cols-1 gap-4">
        <Input
          id={"title"}
          type={"text"}
          label={"Book Title*"}
          placeholder="Harry Potter"
          required
        />
        <Input
          id={"isbn"}
          type={"text"}
          label={"ISBN (10-digit or 13-digit)"}
          placeholder="xxx-xxx-xxxx"
        />
        <Input
          id={"description"}
          type={"text"}
          label={"Description"}
          placeholder="Kid with scar on forehead goes to a boarding school"
        />
        <Input
          id={"price"}
          type={"number"}
          label={"Price"}
          placeholder="0.00"
          required
        />
        <SubmitButton type="submit" buttonText="Submit" />
      </form>
    </div>
  );
};
