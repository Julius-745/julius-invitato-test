import { useCallback, useState } from "react";
import music from "../music/music.mp3"


export const useOpenInvitation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [audio] = useState(() => {
        const newAudio = new Audio(music);
        newAudio.loop = true;
        return newAudio;
    });

    const handlePlay = useCallback(() => {
        return audio.play().then(() => setIsOpen(true));
    }, [audio]);


    return {isOpen, handlePlay}
}