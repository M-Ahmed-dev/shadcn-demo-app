import { Input } from '@/components/ui/input'

export default function InputField(props: any) {
  const { label, registerValue, register, errors } = props

  return (
    <div className="flex flex-col">
      <label className="label font-bold text-sm text-[#9277FD] pb-[0.75rem]">
        {label}
      </label>

      <Input className="h-[4rem]" {...register(registerValue)} />
      <div>
        {errors && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>
    </div>
  )
}
