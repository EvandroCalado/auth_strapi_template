'use server';

export const registerUserAction = async (
  prevState: any,
  formData: FormData,
) => {
  const fields = Object.fromEntries(formData);

  return {
    ...prevState,
    data: fields,
  };
};
