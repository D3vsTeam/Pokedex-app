import React from "react";
import { CustomText } from "./style";

type TextProps = {
  color: string,
  size: number;
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <CustomText {...props} size={12}>
      {children}
    </CustomText>
  )
}