const value = 42;
const dataType = typeof value;

const output = `"${dataType}" isn't "string" data type.
Typeof를 boolean이나 null에 사용하면 "object" 결과를 얻을 수 있습니다.`;

console.log(output);
