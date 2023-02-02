import React, {useEffect, useState} from 'react';
import Apis from '../../networking/Apis';
import axiosInstance from '../../networking/AxiosInstance';
import HomeScreenView from './HomeScreen.view';

const HomeScreen = (): JSX.Element => {
  const [productsData, setProductsData] = useState({});

  const fetchData = async (): Promise<any> => {
    try {
      const response = await axiosInstance.get(Apis.productsList);
      console.log('Succeeded to fetch data', response.data);
      return response.data;
    } catch (error) {
      console.log('Error fetching data', error);
      return undefined;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData();
      if (response) {
        setProductsData(response);
      }
    };
    fetch();
  }, []);

  return <HomeScreenView productsData={productsData} />;
};

export default HomeScreen;
