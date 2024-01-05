import InputField from '../inputfield/page'

export default function AddQuantityFormat(props: any) {
  const {
    register,
    itemNameRegisterValue,
    quantityRegisterValue,
    priceRegisterValue,
    errors
  } = props
  return (
    <>
      <div className="flex ">
        <InputField
          label="Item Name"
          register={register}
          registerValue={itemNameRegisterValue}
        />

        <InputField
          label="Quantity"
          register={register}
          registerValue={quantityRegisterValue}
        />

        <InputField
          label="Price"
          register={register}
          registerValue={priceRegisterValue}
        />
        {errors && (
          <div>
            <span className="text-red-500 text-sm">{errors.message}</span>
          </div>
        )}
      </div>
    </>
  )
}
