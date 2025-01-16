import { defineType, defineField } from "sanity";

export const brandSchema = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "brandId",
      title: "Brand ID",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3, "Brand ID must be at least 3 characters long.")
          .max(15, "Brand ID must be at most 15 characters long.")
          .error("Brand ID is required and should be unique."),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2, "Brand name must be at least 2 characters long.")
          .max(50, "Brand name must be at most 50 characters long.")
          .error("Brand name is required."),
    }),
  ],
});
