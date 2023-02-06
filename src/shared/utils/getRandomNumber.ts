interface GetRandomArbitraryParams {
  min?: number;
  max?: number;
  toFixed?: number;
}

export default function getRandomNumber({
  min,
  max,
  toFixed,
}: GetRandomArbitraryParams) {
  let randomNumber = Math.random();

  if (typeof min === 'number' && typeof max === 'number') {
    randomNumber = randomNumber * (max - min) + min;
  }

  if (toFixed) {
    randomNumber = Number(randomNumber.toFixed(toFixed));
  }

  return randomNumber;
}
