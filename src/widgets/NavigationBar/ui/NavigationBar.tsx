import { FC, memo } from "react";
import NavigationItem from "../../../shared/NavigationItem/ui/NavigationItem";
import SearchBar from "../../../shared/SearchBar/ui/SearchBar";

const NavigationBar: FC = () => {
    return (
        <>
            <div className='flex gap-10 items-center'>
                <NavigationItem destination="logo.png" description="logotype" isImage={true}/>
                <NavigationItem description="Обо мне" destination="about-me"/>
                <NavigationItem description="Скиллы" destination="skills"/>
                <NavigationItem description="Прайс" destination="price"/>
                <NavigationItem description="Проекты" destination="projets"/>
                <SearchBar description="Поиск..."/>
            </div>
        </>
    )
}

export default memo(NavigationBar);