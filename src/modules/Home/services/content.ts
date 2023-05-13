import httpRequest from '@/libs/httpRequest';

httpRequest.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAllContents() {
  try {
    const res = await httpRequest.get('/contents/1?populate=*');
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}