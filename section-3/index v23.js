/* Buffers */

//const buf = Buffer.from("Hey"); // To get the unique codes that identifies the characters in 'Hey' in the buffer position

const buf = Buffer.alloc(4); // To allocate a specific number characters to buffer

buf.write("Hey!"); // to place characters in the buffer

console.log(buf);
console.log(buf.toString());

console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

buf[1] = 111; // 111 is ASCII code for 'o'

console.log(buf.toString());
