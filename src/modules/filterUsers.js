import { render } from './render';

export const filterUsers = () => {
  const btnIsChildren = document.querySelector('#btn-isChildren');
  const btnisPermissions = document.querySelector('#btn-isPermissions');
  const btnIsAll = document.querySelector('#btn-isAll');

  btnIsChildren.addEventListener('click', () => {
    userService.filterUsers('children').then((users) => {
      render(users);
    });
  });
  btnisPermissions.addEventListener('click', () => {
    userService.filterUsers('permissions').then((users) => {
      render(users);
    });
  });
  btnIsAll.addEventListener('click', () => {
    userService.getUsers().then((users) => {
      render(users);
    });
  });
};
