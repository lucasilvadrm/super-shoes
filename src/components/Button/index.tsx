import { StyledButton } from "./styles";

interface ButtonProps {
  position: "left" | "right";
  altImage: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ position, altImage, onClick }: ButtonProps) => {
  return (
    <StyledButton position={position} onClick={onClick}>
      <img src="static/images/216151_right_chevron_icon.png" alt={altImage} />
    </StyledButton>
  );
};

export default Button;
