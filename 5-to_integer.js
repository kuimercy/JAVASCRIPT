const input = process.argv[2];

if (!isNaN(input)) {
  const number = parseInt(input, 10);
  if (!isNaN(number)) {
    console.log(`My number: ${number}`);
  } else {
    console.log("Not a number");
  }
} else {
  console.log("Not a number");
}
