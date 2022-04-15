import React, { FC, MouseEventHandler } from 'react';

interface AvatarProps {
    imageSrc: string;
    divClass?: string;
    imageTitle: string;
    handleClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

const Index: FC<AvatarProps> = ({ imageSrc, divClass, imageTitle, handleClick }) => {
    return (
        <div
            className={divClass}
            onClick={handleClick}
        >
            <img
                src={imageSrc}
                title={imageTitle}
                alt={imageTitle}
            />
        </div>
    );
};

export default Index;
