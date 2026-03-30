export const AnalyticsEvents = {
  AUTH: {
    LOGIN: 'auth.login',
    OTP_REQUEST: 'auth.otp_request',
    OTP_VERIFY: 'auth.otp_verify',
  },
  PRODUCT: {
    VIEW: 'product.view',
    ADD_TO_CART: 'product.add_to_cart',
  },
  ORDER: {
    PLACE: 'order.place',
    CONFIRM: 'order.confirm',
    CANCEL: 'order.cancel',
    DELIVERED: 'order.delivered',
  },
  PAYMENT: {
    SELECT_METHOD: 'payment.select_method',
    UPI_SHARED: 'payment.upi_shared',
  },
  DELIVERY: {
    ASSIGNED: 'delivery.assigned',
    ACCEPTED: 'delivery.accepted',
    DELIVERED: 'delivery.delivered',
  },
  CHAT: {
    MESSAGE_SENT: 'chat.message_sent',
  },
};