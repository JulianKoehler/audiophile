import { ReactNode } from "react";
import { Button, ButtonProps, ChakraComponent } from "@chakra-ui/react";
import buttonStyleConfig from "../../styles/CustomButton";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: "orange" | "black" | "outline" | "link";
}

const CustomButton = ({ children, variant, ...rest }: CustomButtonProps) => {
  return (
    <Button
      styleConfig={buttonStyleConfig}
      variant={variant}
      {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
