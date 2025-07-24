// components/BackgroundWrapper.jsx
export default function BackgroundWrapper({ children }) {
    const backgroundImage = "/BG_Cropped.png";
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative overflow-hidden -mt-3"
      style={{ backgroundImage: `url(${backgroundImage})`,transform: 'scaleX(1.11)', }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
