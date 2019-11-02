export function isEmpty(str) {
  return !str || str.length === 0;
}

export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return filter.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function confirmPassword(cPassword, password) {
  return cPassword === password;
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function validate(form) {
  const error = {};
  let success = true;

  const keys = Object.keys(form);
  const { length } = keys;

  keys.slice(0, length).forEach(field => {
    if (field !== 'error') {
      const { type, value } = form[field];
      if (isEmpty(value)) {
        error[field] = `${capitalizeFirstLetter(field)} is required.`;
        success = false;
      } else {
        error[field] = '';
        if (type === 'email' && !validateEmail(value)) {
          error[field] = 'Please enter a valid email address.';
          success = false;
        } else if (type === 'password' && !validatePassword(value)) {
          error[field] = 'Password must be at least 6 characters.';
          success = false;
        } else if (type === 'confirm_password' && !confirmPassword(value, form.password.value)) {
          error[field] = 'Password does not match.';
          success = false;
        }
      }
    }
  });

  return { success, error };
}

export function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    // eslint-disable-next-line no-bitwise, no-mixed-operators
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
