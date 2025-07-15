import { FC, memo } from "react";
import { PriceEntityProps } from "../model/types";
import InteractiveButton from "../../../shared/InteractiveButton/ui/InteractiveButton";
import Badge from "../../../shared/Badge/ui/Badge";
import { TELEGRAM_LINK } from "../constants/constants";

const PriceEntity: FC<PriceEntityProps> = ({ title, description, price, badges }) => {
    return (
        <>
            <div className='bg-[#0D0D0D] rounded-3xl w-120 h-70 flex flex-col justify-between'>
                <div className='m-5 text-xl'>
                    <div className='font-semibold'>
                        {title}
                    </div>
                    <div className='font-bold flex gap-2 items-baseline'>
                        от <p className='font-extrabold text-3xl'>{price}₽</p>
                    </div>
                    <div className='text-lg mt-10'>
                        {description}
                    </div>
                </div>
                <div className="flex items-center gap-5 px-5 pb-5">
                    <InteractiveButton text='Заказать' onClick={() => window.open(TELEGRAM_LINK, '_blank')} />
                    {badges.map((value, index) => <Badge key={index} title={value}/>) }
                </div>
            </div>
        </>
    )
}

export default memo(PriceEntity);