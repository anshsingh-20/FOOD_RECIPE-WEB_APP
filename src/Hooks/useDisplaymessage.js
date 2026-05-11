export default function useDisplaymessage() {
  function displaymessage() {
    console.log("This is a custom hook");
    return "Hello from custom hook";
  }
  return [displaymessage];
}
