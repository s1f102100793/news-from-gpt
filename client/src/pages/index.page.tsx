import { Loading } from 'src/components/Loading/Loading';
import Header from 'src/components/header/Header';
import NameListComponent from 'src/components/namelist/Namelist';
import NewsComponent from 'src/components/news/Newscomponet';
import { useNamelist } from 'src/hooks/useNamelist';
import { useNews } from 'src/hooks/useNews';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const {
    user,
    inputValue,
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
    shouldRenderNewsComponent,
    isLoading,
  } = useNews();

  const { selectedName, setSelectedName, resetSelectedName } = useNamelist();
  if (!user) return <Loading visible />;

  const Reset = async () => {
    setResponsetitle(null);
    setResponsesubtitle(null);
    setResponsebody(null);
    resetSelectedName();
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
          />
        )}
      </div>
    </>
  );
};

export default Home;
