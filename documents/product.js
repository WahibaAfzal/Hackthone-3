import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3, "Product name must be at least 3 characters long.")
          .max(50, "Product name must be at most 50 characters long."),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3, "Name must be at least 3 characters long.")
          .max(30, "Name must be at most 30 characters long."),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1, "Price must be at least 1.")
          .error("Price should be a positive number."),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2, "Brand name must be at least 2 characters long.")
          .max(30, "Brand name must be at most 30 characters long."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10, "Description must be at least 10 characters long.")
          .max(300, "Description must be at most 300 characters long."),
    }),
    defineField({
      name: "categoryId",
      title: "Category ID",
      type: "reference", // Reference to another document (e.g., categories)
      to: [{ type: "category" }], // Links to the category schema
      validation: (Rule) =>
        Rule.required().error("Category ID is required."),
    }),
  ],
});
