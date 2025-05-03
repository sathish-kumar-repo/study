import "./Switch.css";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <div className="sort-toggle">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round" />
      </label>
      <span className="sort-label">
        {checked ? "Recently Added" : "Default"}
      </span>
    </div>
  );
};

export default Switch;
