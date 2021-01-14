var array = [
    {
    name: "foo1",
    value: ["val1","val2"]
  }, 
  {
    name: "foo1",
    value: ["val2", "val3"]
  }, 
  {
    name: "foo2",
    value: ["val4"]
  },
   {
    name: "foo2",
    value: ["val4","val5"]
  },
  ];
  
  res = array.reduce((prev, curr) => {
    let index = prev.findIndex(item => item.name === curr.name);
   
    if(index > -1) {
      s = new Set([...prev[index].value, ...curr.value]);
      prev[index].value = Array.from(s);
    } else {
      prev.push(curr);
    }
    return prev;
  },[]);
  
  console.log(res);