import React from 'react';

const Payment = () => {
  return (
    <div className="container mx-auto mt-20 p-5 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-5 dark:text-white">Payment Details</h1>
      <h2 className="text-xl font-semibold mb-3 dark:text-white">Krishna Electricals</h2>
      
      <div className="mb-5">
        <h3 className="text-lg font-medium dark:text-white">Bank Details:</h3>
        <p className='dark:text-white'>HDFC Bank</p>
        <p className='dark:text-white'>A/C NO: 50200018262203</p>
        <p className='dark:text-white'>IFSC CODE: HDFC0000733</p>
        <p className='dark:text-white'>BRANCH: DHAMNKAR NAKA, BHIWANDI</p>
      </div>

      {/* <form>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter amount to pay"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Proceed to Payment
        </button>
      </form> */}
    </div>
  );
};

export default Payment;
