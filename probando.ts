type User = {
    name: string;
    age: number;
  };
  
  function isAdult(user: User): boolean {
    return user.age >= 18;
  }
  
  const justine = {
    name: 'Justine',
    age: 16,
  } satisfies User;
  
  const isJustineAnAdult = console.log(isAdult(justine));
  