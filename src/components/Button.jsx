export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-900 rounded py-1 px-4 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
