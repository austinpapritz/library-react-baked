import { useEffect, useState } from 'react';
import { getBookById } from '../services/books';

import { useHistory } from 'react-router-dom';

export function useBookDetail(id) {
  const history = useHistory();
  const [book, setBook] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        history.push('/404');
      }
    };
    fetchData();
  }, [id, history]);

  return { book, error, loading };
}
