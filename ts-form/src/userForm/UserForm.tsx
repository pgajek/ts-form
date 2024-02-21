import FormWrapper from "../FormWrapper/FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        type="number"
        min={1}
        value={age}
        onChange={(e) => updateFields({ age: Number(e.target.value) })}
      />
    </FormWrapper>
  );
};

export default UserForm;
