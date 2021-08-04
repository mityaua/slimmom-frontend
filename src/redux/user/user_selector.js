export const getUserId = state => state.user.userInfo._id; // ID юзера
export const getUserNickName = state => state.user.userInfo.name; // Имя юзера
export const getDays = state => state.user.userInfo.days; // Дни юзера
export const getNotAllowedProductsAll = state =>
  state.user.userInfo.userData.notAllowedProductsAll; // Нерекомендуемые юзеру продукты (полный список)
export const getUserBlood = state => state.user.userInfo.userData.bloodType; // Группа крови юзера
