export async function wait(
  duration: number,
  innerText: string
): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(innerText);
    }, duration);
  });
}
