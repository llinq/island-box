export function updateName(name: string): Promise<string | null> {
  return new Promise<string | null>((resolve, reject) => {
    setTimeout(() => {
      if (name.length > 10) {
        reject(new Error('Nick muito grande'));
      }

      if (name == 'llinq') {
        resolve('Nome já existente');
      }

      resolve(null);
    }, 1500);
  });
};