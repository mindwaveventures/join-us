const truncateStr = (str, length) => {
    const extraStr = str.length > length ? '...' : '';
    return str.substring(0, length).concat(extraStr);
}

console.log(truncateStr('Absolute victory', 3));