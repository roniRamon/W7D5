export const signup = (formUser) => {
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user: formUser },
    dataType: 'json'
  });
};

export const login = (formUser) => {
  $.ajax({
      url: '/api/session',
      method: "POST",
      data: { user: formUser },
      dataType: 'json'
  });
};

export const logout = () => {
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
    dataType: 'json'
  });
};
