interface Options {
  rejects?: boolean;
}

function mockRequest<T>(mock: T, options?: Options): Promise<T> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (options?.rejects) {
        rej();
      } else {
        res(mock);
      }
    }, 500);
  });
}

export default mockRequest;
