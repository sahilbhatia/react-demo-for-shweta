function resolveAfter2Seconds(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export default async function asyncCall(data) {
  return await resolveAfter2Seconds(data);
};
