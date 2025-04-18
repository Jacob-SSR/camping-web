import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function TextAreaInput({
  register,
  name,
  type,
  placeholder,
  errors,
  height = "h-32",
}) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Textarea
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full ${height} resize-y  
        ${errors[name] && "border-red-500"}`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
export default TextAreaInput;
