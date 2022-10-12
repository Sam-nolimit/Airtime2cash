import "./Input.css";

const Input = ({
    label,
    childDefaultValue,
    name,
    type,
    childClass,
    placeholder,
    handleChange
}) => {

    return (
        <div className="input-group">
            <div className="input-label">
                {label}
            </div >
            <div >
                <input
                    onChange={handleChange}
                    defaultValue={childDefaultValue}
                    name={name}
                    type={type}
                    className={childClass}
                    placeholder={placeholder}
                />
            </div>
        </div >
    )
}
export default Input