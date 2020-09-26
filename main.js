const Stack = require("./Stack");

function peek(stack) {
  let value = stack.pop();
  stack.push(value);
  return value;
}

function isEmpty(stack) {
  let value = stack.pop();
  if (!value) {
    return true;
  }
  stack.push(value);
  return false;
}

function display(stack) {
  let value;
  let stackString = "";
  const stackTemp = new Stack();
  while (true) {
    value = stack.pop();
    if (!value) {
      break;
    }
    stackString += value;
    stackString += " ";
    stackTemp.push(value);
  }
  while (true) {
    value = stackTemp.pop();
    if (!value) {
      break;
    }
    stack.push(value);
  }
  return stackString;
}

// const starTrek = new Stack();

// starTrek.push('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');

// //console.log(peek(starTrek));
// //console.log(isEmpty(starTrek));

// starTrek.pop();
// starTrek.pop();

// console.log(display(starTrek));

//QUESTION 3

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack1 = new Stack();
  const stack2 = new Stack();
  let newLength = 0;
  if (s.length % 2 != 0) {
    newLength = s.length - 1;
  } else {
    newLength = s.length;
  }
  for (i = 0; i < newLength / 2; i++) {
    stack1.push(s.charAt(i));
    stack2.push(s.charAt(s.length - 1 - i));
  }
  console.log(display(stack1));
  console.log(display(stack2));

  for (i = 0; i < newLength / 2; i++) {
    if (stack1.pop() !== stack2.pop()) {
      return false;
    }
  }
  return true;
}

//amanaplana c analpanama

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//QUESTION 4 MATCHING PARAENTHESES

function matchingParantheses(s) {
  let parStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      parStack.push(s[i]);
    }
    if (s[i] === ")") {
      if (!parStack.pop()) {
        console.log("You are missing an open (");
        return false;
      }
    }
  }
  if (parStack.pop()) {
    console.log("You are missing a closing )");
    return false;
  }
  return true;
}

//console.log(matchingParantheses( '(1*2))' ))

function stackLength() {}

// Problem 5
// function sortStack(stackA) {
//   const stackB = new Stack();
//   while (stackA.length) {
//     while
//   }
// }

function sortStack(stackA) {
  const stackB = new Stack();
  while (stackA.top) {
    let value = stackA.pop();
    while (stackB.top && stackB.top.data > value) {
      stackA.push(stackB.pop());
    }
    stackB.push(value);
  }
  while (stackB.length) {
    stackA.push(stackB.pop());
  }
  return stackA;
}

const testStack = new Stack();
testStack.push(4);
testStack.push(5);
testStack.push(3);
testStack.push(1);
testStack.push(2);
sortStack(testStack);
console.log(display(testStack));

function sortStackOldBroken(stackA) {
  const stackB = new Stack();
  while (stackA.length) {
    console.log(stackA.length);
    let tmpA = stackA.pop();
    let tmpB = stackB.pop();
    stackB.push(tmpB);
    while (tmpA > tmpB && tmpB !== null) {
      tmpB = stackB.pop();
      stackA.push(tmpB);
    }
    stackB.push(tmpA);
  }
  while (stackB.length) {
    stackA.push(stackB.pop());
  }
  return stackA;
}
