import { useAtom } from 'jotai';
import { useState } from 'react';
import { userAtom } from 'src/atoms/user';

export const useNews = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');
  const [responsebody, setResponsebody] = useState<string | null>(null);
  const [responsetitle, setResponsetitle] = useState<string | null>(null);
  const [responsesubtitle, setResponsesubtitle] = useState<string | null>(null);
  const [responsevideo, setResponsevideo] = useState<string | null>(null);

  return {
    user,
    inputValue,
    setInputValue,
    responsebody,
    setResponsebody,
    responsetitle,
    setResponsetitle,
    responsesubtitle,
    setResponsesubtitle,
    responsevideo,
    setResponsevideo,
  };
};
