import type { NewsModel } from 'commonTypesWithClient/models';
import { useCallback, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

export const useNamelist = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const resetSelectedName = () => {
    setSelectedName(null);
  };

  const [newsData, setNewsData] = useState<NewsModel[]>([]);
  const [sortType, setSortType] = useState<'alphabetical' | 'count' | null>(null);
  const [isAscending, setIsAscending] = useState(true);

  const fetchNews = async () => {
    const fethedAllnews = await apiClient.news.$get();
    return fethedAllnews;
  };

  const countNames = (data: NewsModel[]): Map<string, number> => {
    const counts = new Map<string, number>();
    data.forEach((item) => {
      const currentCount = counts.get(item.name);
      if (typeof currentCount === 'number') {
        counts.set(item.name, currentCount + 1);
      } else {
        counts.set(item.name, 1);
      }
    });
    return counts;
  };

  const nameCounts = countNames(newsData);

  const toggleSort = (type: 'alphabetical' | 'count') => {
    if (sortType === type) {
      setIsAscending(!isAscending);
    } else {
      setSortType(type);
    }
  };

  const toHiragana = (str: string): string => {
    return str.replace(/[\u30a1-\u30f6]/g, (match) => {
      const chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
  };

  const compareNames = (a: string, b: string): number => {
    const hiraganaA = toHiragana(a);
    const hiraganaB = toHiragana(b);
    return hiraganaA.localeCompare(hiraganaB);
  };

  const sortNames = (names: [string, number][]) => {
    if (sortType === 'alphabetical') {
      return names.sort((a, b) =>
        isAscending ? compareNames(a[0], b[0]) : compareNames(b[0], a[0])
      );
    } else if (sortType === 'count') {
      return names.sort((a, b) => (isAscending ? a[1] - b[1] : b[1] - a[1]));
    }
    return names;
  };

  const sortedNames = sortNames(Array.from(nameCounts.entries()));

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [sortOrder, setSortOrder] = useState<'oldest' | 'newest'>('oldest');

  const sortByDate = useCallback(
    (data: NewsModel[]) => {
      if (sortOrder === 'newest') {
        return [...data].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return [...data].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    },
    [sortOrder]
  );

  const toggleSortByDate = () => {
    setSortOrder((prevOrder) => (prevOrder === 'newest' ? 'oldest' : 'newest'));
  };
  return {
    selectedName,
    setSelectedName,
    resetSelectedName,
    newsData,
    setNewsData,
    fetchNews,
    nameCounts,
    toggleSort,
    sortedNames,
    searchTerm,
    handleSearchChange,
    sortOrder,
    sortByDate,
    toggleSortByDate,
  };
};
