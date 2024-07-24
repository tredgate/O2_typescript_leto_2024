type User = {
  id: number;
  name: string;
};

type Order = {
  id: number;
  userId: number;
  amount: number;
};

function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 1000);
  });
}

function fetchOrders(userId: number): Promise<Order[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, amount: 50 },
        { id: 2, userId: userId, amount: 100 },
        { id: 3, userId: userId, amount: 150 },
      ]);
    }, 2000);
  });
}

function calculateTotal(orders: Order[]): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = orders.reduce((sum, order) => sum + order.amount, 0);
      resolve(total);
    }, 500);
  });
}

async function main() {
  let user;
  let order;
  let notAwait;

  await fetchUser(1).then((res) => {
    user = res;
  });
  console.log(user);

  await fetchOrders(1).then((res) => {
    order = res;
  });
  console.log(order);

  fetchOrders(1).then((res) => {
    notAwait = res;
  });
  console.log(notAwait);
}

main();
