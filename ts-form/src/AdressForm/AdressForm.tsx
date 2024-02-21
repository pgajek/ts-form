import FormWrapper from "../FormWrapper/FormWrapper";
type AdressData = {
  street: string;
  city: string;
  postalCode: string;
};
type AdressFormProps = AdressData & {
  updateFields: (fields: Partial<AdressData>) => void;
};
const AdressForm = ({
  street,
  city,
  postalCode,
  updateFields,
}: AdressFormProps) => {
  return (
    <FormWrapper title="Adress">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Postal Code</label>
      <input
        required
        type="string"
        value={postalCode}
        onChange={(e) => updateFields({ postalCode: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AdressForm;
