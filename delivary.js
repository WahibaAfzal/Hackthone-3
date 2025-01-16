export default {
    name: 'delivery',
    title: 'Delivery',
    type: 'document',
    fields: [
      {
        name: 'deliveryId',
        title: 'Delivery ID',
        type: 'string',
        description: 'Unique identifier for the delivery',
        validation: (Rule) =>
          Rule.required()
            .min(5)
            .error('Delivery ID must be at least 5 characters long'),
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the delivery method',
        validation: (Rule) =>
          Rule.required().error('Delivery name is required'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A brief description of the delivery method',
        validation: (Rule) =>
          Rule.max(300).warning('Descriptions should be concise and under 300 characters'),
      },
      {
        name: 'deliveryTime',
        title: 'Delivery Time',
        type: 'string',
        description: 'Estimated delivery time (e.g., "2-3 business days")',
        validation: (Rule) =>
          Rule.required().error('Delivery time is required'),
      },
      {
        name: 'cost',
        title: 'Cost',
        type: 'number',
        description: 'Cost of the delivery',
        validation: (Rule) =>
          Rule.required()
            .min(0)
            .error('Cost must be a non-negative number'),
      },
    ],
  };
  