import { IconType } from "react-icons";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon: IconComponent,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-violet-300 dark:border-black px-4 py-2 font-semibold
          uppercase text-violet-300 dark:text-black transition-all duration-500
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-violet-300 dark:before:bg-black
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-neutral-900 dark:hover:text-white
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
    >
      {IconComponent && <IconComponent />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
