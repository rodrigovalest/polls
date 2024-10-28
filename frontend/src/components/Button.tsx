interface IButtonProps {
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function Button({ 
  text,
  isActive,
  onClick 
}: IButtonProps) {
  if (isActive === false) {
    return (
      <button 
        className="font-MonaSans font-regular text-base text-appWhite bg-appGray py-2 px-6 rounded-full"
        disabled
      >
        {text}
      </button>
    );
  } else {
    return (
      <button 
        className="font-MonaSans font-regular text-base text-appWhite bg-appBlack py-2 px-6 rounded-full"
        onClick={onClick}  
      >
        {text}
      </button>
    );
  }
}
