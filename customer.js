import { defineType, defineField } from 'sanity';

export const customerSchema = defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string',
      validation: (Rule) => Rule.required().error('User ID is required'),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(3).max(50).error('Name must be between 3 and 50 characters'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { name: 'email', invert: false }
          )
          .error('Must be a valid email address'),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(8).error('Password must be at least 8 characters long'),
      options: {
        isHighlighted: false, // Ensure passwords are not visible in the Sanity Studio
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.max(200).error('Address can be up to 200 characters long'),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(
            /^\+?[1-9]\d{1,14}$/,
            { name: 'phone number', invert: false }
          )
          .error('Must be a valid phone number with optional country code'),
    }),
  ],
});
