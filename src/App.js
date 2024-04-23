import { useState } from 'react';

// helper function
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Toggle component
const Toggle = ({ on = false }) => {
  const [checked, setChecked] = useState(on);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={classNames(
        'w-10 h-5 rounded-xl flex items-center cursor-pointer',
        checked
          ? 'justify-end bg-[#4ED164]'
          : 'justify-start bg-[#D9DADC] border border-[#D9DADC] shadow-lg'
      )}
    >
      <div className="w-5 h-5 bg-white rounded-full shadow"></div>
    </div>
  );
};

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200 gap-10">
      <h1 className="text-2xl font-bold text-slate-800">
        iPhone Toggles with Tailwind CSS & Flex
      </h1>
      <Toggle on />
      <Toggle />
    </div>
  );
}

export default App;
