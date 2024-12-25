/* eslint-disable react/prop-types */
const Alert = ({ type, text, onClose }) => {
  return (
    <div className="absolute top-20 left-0 right-0 flex justify-center items-center">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } flex items-center justify-center text-indigo-100 leading-none rounded-full lg:inline-flex`}
        role="alert"
      >
        <button onClick={onClose}>ⓧ</button>
        <p className="mx-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
