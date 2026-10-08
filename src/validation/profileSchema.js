import * as Yup from 'yup';

export const profileSchema = Yup.object({
  name: Yup.string().trim().min(2, 'Name must contain at least 2 characters.').max(40, 'Name must contain at most 40 characters.').required('Name is required.'),
  bio: Yup.string().max(160, 'Bio must contain at most 160 characters.'),
  avatarUri: Yup.string().trim().test('is-web-url', 'Avatar must be a valid http(s) URL.', (value) => !value || /^https?:\/\/\S+$/i.test(value)),
});
