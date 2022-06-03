const AUTH_ROUTES = {
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  IS_REGISTERED: '/user/isRegistered',
  GET_ALL_USERS: '/user/users',
  GET_PAGINATED_USERS: '/user/users/paginated',
  GET_SEARCHED_USERS: '/user/search',
  CURRENT_USER_ACTIONS: '/user/me',
  GET_UPDATE_CART: '/user/cart',
  GET_REWARDS: '/user/rewards',
  FOLLOW_ACTION: '/user/toggleFollow/', //pass id
  WISHLIST_ACTIONS: '/user/wishlist',
};

const ITEM = {
  GET_ALL_ITEMS: '/item/all',
  GET_PAGINATED_ITEMS: '/item/all/paginated',
  GET_SEARCHED_ITEMS: '/item/search',
  ITEM_ACTIONS: '/item/',
  GET_SELLER_ITEMS: '/item/seller/',
  LIKE: '/item/toggleLike/', //pass id
  COMMENT: '/item/comment/', //pass id
};

const ORDERS = {
  CREATE_ORDER: '/order/create',
  MY_SOLD_ORDERS: '/order/mySoldOrders',
  MY_PLACED_ORDERS: '/order/myPlacedOrders',
  ORDER_ACTIONS: '/order/', //order id
};

const PAYMENT = {
  GET_TOKEN_BALANCE: '/payment/tokenBalance',
  GET_TRANSACTIONS: '/payment/transactions',
  RAZORPAY_ORDER: '/payment/order',
  RAZORPAY_KEY: '/key',
  RAZORPAY_CAPTURE: '/payment/capture/', //add payment id in url
};

const STORY_ROUTES = {
  GET_STORIES: '/story/following',
  STORY_ACTIONS: '/story',
};

const CHAT = {
  GET_ALL_ROOMS: '/chat',
  ROOM_ACTIONS: '/chat/room',
  GROUP_ACTIONS: '/chat/group',
  DELETE_MSG: '/chat/msg/', //pass id
};

export const ENDPOINTS = {
  ...AUTH_ROUTES,
  ...ITEM,
  ...ORDERS,
  ...PAYMENT,
  ...STORY_ROUTES,
  ...CHAT,
  CATEGORY_ACTIONS: '/category',
  GET_ALERTS: '/alerts/',
  UPLOAD_MEDIA: '/media/upload/ipfs',
  GET_ADS: '/ads',
  CURRENT_VERSION: '/version',
};
