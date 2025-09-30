// // src/components/PopupForm/MultiStepPopup.jsx
// import { useState } from "react";

// export default function MultiStepPopup({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     occasion: "",
//     guests: "",
//     date: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const occasions = [
//     "Wedding",
//     "Engagement",
//     "Corporate Event",
//     "Birthday Party",
//     "Cocktail Party",
//     "Social Gathering",
//   ];

//   const guestsOptions = [
//     "50", "100", "150", "200", "300", "400", "500", "Still Larger Gathering?",
//   ];

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     onClose(); // close popup
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           ✖
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
//           Call Toll Free: 1800 2578 009
//         </h2>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Occasion
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {occasions.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleChange("occasion", item)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.occasion === item
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Minimum Expected Guests
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {guestsOptions.map((g) => (
//                 <button
//                   key={g}
//                   onClick={() => handleChange("guests", g)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.guests === g
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 3 */}
//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Event Date
//             </h3>
//             <input
//               type="date"
//               value={formData.date}
//               onChange={(e) => handleChange("date", e.target.value)}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         )}

//         {/* Step 4 */}
//         {step === 4 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Enter Your Details
//             </h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 ? (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//             >
//               Back
//             </button>
//           ) : (
//             <span />
//           )}

//           {step < 4 ? (
//             <button
//               onClick={() => setStep(step + 1)}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

export default function MultiStepPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    occasion: "",
    guests: "",
    date: "",
    name: "",
    email: "",
    phone: "",
  });

  const occasions = [
    "Wedding",
    "Engagement",
    "Corporate Event",
    "Birthday Party",
    "Cocktail Party",
    "Social Gathering",
  ];

  const guestsOptions = [
    "50",
    "100",
    "150",
    "200",
    "300",
    "400",
    "500",
    "Still Larger Gathering?",
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    onClose(); // close popup
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
        {/* Close button with react-icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <AiOutlineClose />
        </button>

        <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
          Call Toll Free: 1800 2578 009
        </h2>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Select Occasion
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {occasions.map((item) => (
                <button
                  key={item}
                  onClick={() => handleChange("occasion", item)}
                  className={`border rounded-lg px-4 py-2 text-sm ${
                    formData.occasion === item
                      ? "bg-blue-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Minimum Expected Guests
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {guestsOptions.map((g) => (
                <button
                  key={g}
                  onClick={() => handleChange("guests", g)}
                  className={`border rounded-lg px-4 py-2 text-sm ${
                    formData.guests === g
                      ? "bg-blue-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Select Event Date
            </h3>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Enter Your Details
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
