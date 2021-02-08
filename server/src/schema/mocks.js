const { MockList } = require("apollo-server");

const mocks = {
  Query: () => ({
    wishes: () =>
      new MockList(10, () => ({
        title: "Sofa",
        desc: "Like the one back at Kolkata",
        budget: { from: 10000, to: 20000, currency: "₹" },
        weblinks: ["https://www.google.com", "https://www.google.com"],
        isAcquired: false,
      })),
  }),
};

module.exports = mocks;
