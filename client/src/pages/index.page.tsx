import type { AxiosError } from 'axios';
import NameListComponent from 'src/components/Namelist/Namelist';
import Header from 'src/components/header/Header';
import NewsComponent from 'src/components/news/Newscomponet';
import { useNamelist } from 'src/hooks/useNamelist';
import { useNews } from 'src/hooks/useNews';
import { apiClient } from 'src/utils/apiClient';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const {
    inputValue,
    setInputValue,
    responsebody,
    setResponsebody,
    responsetitle,
    setResponsetitle,
    responsesubtitle,
    setResponsesubtitle,
    responsevideo,
    handleInputChange,
    handleArticleClick,
    handleOnSubmit,
    setResponsevideo,
    shouldRenderNewsComponent,
    isLoading,
    setIsLoading,
  } = useNews();

  const { selectedName, setSelectedName, resetSelectedName } = useNamelist();

  const Reset = async () => {
    setResponsetitle(null);
    setResponsesubtitle(null);
    setResponsebody(null);
    resetSelectedName();
  };
  const checkValidName = (name: string | null): string => {
    if (name === null || name === '') {
      console.error('Name is not defined or empty');
      throw new Error('Name is not valid');
    }
    return name;
  };

  const postBackend2 = async () => {
    const validName = checkValidName(selectedName);
    setInputValue(validName);
    console.log(selectedName);
    console.log('押した');
    try {
      const res = await apiClient.gpt.$post({ body: { name: validName } });
      setResponsetitle(res.title);
      setResponsesubtitle(res.subtitle);
      setResponsebody(res.body);
      setResponsevideo(res.video);
      console.log(res);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.error('Error data:', axiosError.response.data);
        console.error('Error status:', axiosError.response.status);
      } else if (axiosError.request !== null && axiosError.request !== undefined) {
        console.error('No response from server:', axiosError.request);
      } else {
        console.error('Error:', axiosError.message);
      }
    }
  };

  const handleOnSubmit2 = async () => {
    setIsLoading(true);
    await postBackend2();
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Header
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleOnSubmit}
          onReset={Reset}
          isLoading={isLoading}
        />
        {shouldRenderNewsComponent(responsetitle, responsesubtitle, responsebody, responsevideo) ? (
          <NewsComponent
            title={responsetitle as string}
            subtitle={responsesubtitle as string}
            body={responsebody as string}
            video={responsevideo as string}
          />
        ) : (
          <NameListComponent
            onArticleClick={handleArticleClick}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            onSubmit={handleOnSubmit2}
          />
        )}
      </div>
    </>
  );
};

export default Home;
