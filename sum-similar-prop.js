//  would like to end up with this, which is the sum of each similar property in the array of objects. I tried a lot. Doing a forEach whith a forIn inside. But I am stuck. Please help :)
// [7, 10] result

// one liner solution
  const data = [
    { item1: 3, item40: 2 },
    { item1: 4, item40: 8 },
  ];
  const ret = data.reduce(
    (p, c) => (Object.values(c).forEach((x, i) => (p[i] = (p[i] ?? 0) + x)), p),
    []
  );
  console.log(ret);