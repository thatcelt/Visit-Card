import { FC, memo, useCallback } from "react";
import NavigationItem from "../../../shared/NavigationItem/ui/NavigationItem";
import SearchBar from "../../../shared/SearchBar/ui/SearchBar";
import NavigationButton from "../../../shared/NavigationButton/ui/NavigationButton";

const NavigationBar: FC = () => {
    const onChangeLanguage = useCallback(() => {
        console.log('lol')
    }, [])

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 items-center'>
                    <NavigationItem destination="logo.png" description="logotype" isImage={true}/>
                    <NavigationItem description="Обо мне" destination="about-me"/>
                    <NavigationItem description="Скиллы" destination="skills"/>
                    <NavigationItem description="Прайс" destination="price"/>
                    <NavigationItem description="Проекты" destination="projets"/>
                    <SearchBar description="Поиск..."/>
                </div>
                <div className='flex items-center gap-5'>
                    <NavigationItem description="RU" destination="language" onClick={onChangeLanguage}/>
                    <NavigationButton path="telegram.svg" alt="telegram" link=""/>
                    <NavigationButton path="spotify.svg" alt="spotify" link=""/>
                    <NavigationButton path="github.svg" alt="github" link=""/>
                </div>
            </div>
        </>
    )
}

export default memo(NavigationBar);