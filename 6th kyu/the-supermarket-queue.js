// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12


function queueTime(customers, n) {
  const tills = Array.from({ length: n }, _ => 0 );

  customers.forEach(customer => {
    let firstFreeTill = tills.indexOf(Math.min(...tills));
    tills[firstFreeTill] += customer;
  });

  return Math.max(...tills);
}

queueTime([], 1); // 0
queueTime([1,2,3,4], 1); // 10
queueTime([2,2,3,3,4,4], 2); // 9
queueTime([1,2,3,4,5], 100); // 5

queueTime([5,3,4],    1); // 12
queueTime([10,2,3,3], 2); // 10
queueTime([2,3,10,2], 2); // 12