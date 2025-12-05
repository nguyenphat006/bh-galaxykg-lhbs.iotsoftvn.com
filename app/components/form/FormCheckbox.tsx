interface FormCheckboxProps {
  label: string | React.ReactNode;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export function FormCheckbox({
  label,
  name,
  checked,
  onChange,
  required = false,
  error,
  disabled = false
}: FormCheckboxProps) {
  const checkboxId = `checkbox-${name}`;
  const errorId = `error-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
          disabled={disabled}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? 'true' : 'false'}
          className="w-5 h-5 mt-0.5 text-[#1a5336] border-[#d0d0d0] focus:ring-2 focus:ring-[#1a5336] cursor-pointer disabled:cursor-not-allowed"
        />
        <label
          htmlFor={checkboxId}
          className={` text-sm text-[#212121] cursor-pointer flex-1 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {label}
          {required && <span className="text-[#d32f2f] ml-1">*</span>}
        </label>
      </div>
      
      {error && (
        <p id={errorId} className=" text-xs text-[#d32f2f] ml-8" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
