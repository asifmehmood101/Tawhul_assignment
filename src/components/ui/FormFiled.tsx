import type {TextareaHTMLAttributes, InputHTMLAttributes} from "react";

type BaseProps = {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: "text" | "email" | "password" | "number";
    as?: "input";
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type FormFieldProps = InputProps | TextareaProps;

export const FormField = (props: FormFieldProps) => {
  const {
    label,
    error,
    helperText,
    className = "",
    ...rest
  } = props;

  const baseStyles = `
    w-full
    bg-white
    border
    rounded-xl
    px-4 py-3
    text-sm
    text-[#1E293B]
    focus:outline-none
    focus:ring-2
    focus:ring-[#1E293B]/20
    transition
  `;

  const errorStyles = error
    ? "border-red-400 focus:ring-red-200"
    : "border-[#E2E8F0]";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#334155]">
          {label}
        </label>
      )}

      {"as" in props && props.as === "textarea" ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${baseStyles} ${errorStyles} resize-none min-h-[120px]`}
        />
      ) : (
        <input
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          className={`${baseStyles} ${errorStyles}`}
        />
      )}

      {error ? (
        <span className="text-xs text-red-500 mt-1">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-xs text-[#94A3B8] mt-1">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};
