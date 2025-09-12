let users = [];

export const registerUser = (user) => {
  // Comprobamos si el usuario ya está registrado
  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    return { success: false, message: "El usuario ya está registrado" };
  }
  
  // Guardamos el nuevo usuario
  users.push(user);
  return { success: true, message: "Usuario registrado correctamente" };
};

export const getUsers = () => users;