import { ChangeEvent } from "react";

interface labelledInputStyle {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Inputbox = ({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputStyle) => {
  return (
    <div className="pt-3">
      <label className="block mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Inputbox;
