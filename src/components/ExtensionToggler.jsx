export default function Switch({ isOn, handleToggle }) {
  return (
    <button
      onClick={handleToggle}
      type="button"
      className={`cursor-pointer relative inline-flex h-7 w-12 items-center 
      rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
        isOn ? 'bg-red-500' : 'bg-slate-700'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full 
        bg-white transition-transform duration-200 ease-in-out ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}