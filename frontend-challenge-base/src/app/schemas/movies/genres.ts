import * as Yup from "yup";

export const GenreSchema = Yup.object({
  id: Yup.number(),
  name: Yup.string(),
});
