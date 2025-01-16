import { defineType, defineField } from "sanity";

export const categorySchema = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "categoryId",
      title: "Category ID",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3, "Category ID must be at least 3 characters long.")
          .max(15, "Category ID must be at most 15 characters long.")
          .error("Category ID is required and should be unique."),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2, "Category name must be at least 2 characters long.")
          .max(30, "Category name must be at most 30 characters long.")
          .error("Category name is required."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10, "Description must be at least 10 characters long.")
          .max(200, "Description must be at most 200 characters long.")
          .error("Description is required."),
    }),
  ],
});
