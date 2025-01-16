export default {
    name: 'orderItem',
    title: 'Order Item',
    type: 'document',
    fields: [
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'reference',
        to: [{ type: 'order' }],
        description: 'Reference to the order this item belongs to',
      },
      {
        name: 'productId',
        title: 'Product ID',
        type: 'reference',
        to: [{ type: 'product' }],
        description: 'Reference to the product being ordered',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        validation: (Rule) => Rule.required().min(1).error('Quantity must be at least 1'),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) =>
          Rule.required()
            .min(0)
            .error('Price must be a non-negative number'),
        description: 'Price of the product at the time of order',
      },
      {
        name: 'userId',
        title: 'User ID',
        type: 'reference',
        to: [{ type: 'user' }],
        description: 'Reference to the user who placed the order',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          calendarTodayLabel: 'Today',
        },
        description: 'Timestamp for when the order item was created',
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          calendarTodayLabel: 'Today',
        },
        description: 'Timestamp for when the order item was last updated',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  