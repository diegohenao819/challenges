const Stack = () => {
    let items = [];
  
    return {
      push: (element) => items.push(element),
      pop: () => (items.length ? items.pop() : null),
      peek: () => (items.length ? items[items.length - 1] : null),
      isEmpty: () => items.length === 0,
      size: () => items.length,
      clear: () => (items = []),
      print: () => console.log(items),
    };
  };
  
  // Uso
  const stack = Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // 30
  console.log(stack.pop());  // 30
  console.log(stack.size()); // 2
  stack.print();             // 10,20
  