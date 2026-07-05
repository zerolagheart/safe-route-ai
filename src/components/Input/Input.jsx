import "./Input.css";

export default function Input({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-box">
      {icon}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}