import { useMutation } from '@tanstack/react-query';
import { request } from '../../../../config/request';

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/category", data).then((res) => res.data),
  });
}
