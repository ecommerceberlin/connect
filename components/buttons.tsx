import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ButtonProps } from "./ui/button";

type IconButtonProps = {
    variant?: ButtonProps["variant"];
    onClick?: ()=>void;
    href?: string | undefined; 
    icon: React.ReactElement;
    size?: ButtonProps["size"]
}

export function IconButton({onClick, href, size="icon", icon, variant="outline"}: IconButtonProps){
        
        const {push} = useRouter()

        if(!onClick && !href){
            return null
        }

        if(href){
            onClick = () => push(href)
        }

        return ( <Button variant={variant} size={size} onClick={onClick}>
            {React.cloneElement(icon, {className: cn(icon.props.className, "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ")})}
        </Button>
        )
    

}