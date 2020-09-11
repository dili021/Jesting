const capitalize = ([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`;

export default capitalize;