import { FC, memo } from "react";
import { NavigationItemProps } from "../model/types";
import NavigationText from "../../NavigationText/ui/NavigationText";
import NavigationImage from "../../NavigationImage/ui/NavigationImage";

const NavigationItem: FC<NavigationItemProps> = ({ description, destination, isImage, onClick }) => {
    return (
        <>
        {isImage ? <NavigationImage path={destination} alt={description} /> : <NavigationText description={description} destination={destination} onClick={onClick}/>}
        </>
    )
}

export default memo(NavigationItem)