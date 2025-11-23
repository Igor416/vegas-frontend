import { AxiosResponse } from 'axios';

import { Review, Search, SearchResults } from '../interfaces';

import { api } from './client';

export async function getReviews() {
  const url = '/news/reviews/'

  const response = await api.get<Review[]>(url);
  return response.data;
}

export async function sendReview(review: Review) {
  const url = '/news/reviews/'

  const response = await api.post<Review>(url, review);
  return response.data;
}

export async function sendSearch(search: string): Promise<SearchResults> {
  const url = '/api/search/'

  const response = await api.post<Search, AxiosResponse<SearchResults>>(url, {search: search});
  return response.data;
}