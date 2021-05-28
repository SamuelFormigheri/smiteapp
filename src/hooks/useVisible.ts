import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible({
    visible,
    outsideClick,
    escKey
}: {
    visible : boolean,
    outsideClick: boolean;
    escKey: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(visible);

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) 
            setIsVisible(false);    
    };

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') 
            setIsVisible(false);  
    };

    useEffect(() => {
        outsideClick && document.addEventListener('click', handleClickOutside, true);
        escKey && document.addEventListener('keydown', handleHideDropdown, true);
        return () => {
            outsideClick && document.removeEventListener('click', handleClickOutside, true);
            escKey && document.removeEventListener('keydown', handleHideDropdown, true);
        };
    });

    return { ref, isVisible, setIsVisible };
}