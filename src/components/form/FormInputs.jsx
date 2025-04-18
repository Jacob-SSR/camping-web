import { Input } from "../ui/input";
import { Label } from "../ui/label";

function FormInputs({ register, name, type, placeholder, errors }) {
  const result = 0 || 1 || null;
  const result2 = null || 0 || 1;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && "border-red-500"}`}
      />
      {
        errors[name] && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
      }
    </div>
  );
}
export default FormInputs;
