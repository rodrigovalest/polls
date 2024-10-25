interface IButton {
  text: string;
  onClick: () => void;
}

export default function Button({ 
  text, 
  onClick 
}: IButton) {
  return (
    <button 
      className="font-MonaSans font-regular text-base text-appWhite bg-appBlack py-2 px-6 rounded-full"
      onClick={onClick}  
    >
      {text}
    </button>
  );
}
