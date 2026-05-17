import React from "react";

const FAQ = () => {
    return(
        <>
        <div className="bg-blue-100 flex flex-col gap-4">
        <h2 className="mt-10 mb-4 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
          frequently asked questions
        </h2>

        <div className="px-6 py-2 text-sm w-3xl mx-auto rounded border border-blue-300">
            <span className="font-bold">How do I find my correct shoe size?</span>
            <p>We provide a comprehensive size chart on every product page. For the best fit, measure your foot length from heel to toe and match it with the millimeter or centimeter measurements on our chart.</p>
        </div>
        <div className="px-6 py-2 text-sm w-3xl mx-auto rounded border border-blue-300">
            <span className="font-bold">Do your shoes run true to size?</span>
            <p>Most of our styles fit true to size. However, if a specific model runs larger or smaller, it will be noted in the "Fit & Sizing" description on that product's page.</p>
        </div>
        <div className="px-6 py-2 text-sm w-3xl mx-auto rounded border border-blue-300">
            <span className="font-bold">What if the shoes do not fit?</span>
            <p>We offer easy, hassle-free size exchanges. Simply visit our Returns & Exchanges Portal to request a different size, and we will ship the replacement free of charge.</p>
        </div>
        <div className="px-6 py-2 text-sm w-3xl mx-auto rounded border border-blue-300">
            <span className="font-bold">How do I track my order?</span>
            <p>Once your order ships, you will receive a confirmation email with a tracking link. You can also view your shipment status by logging into your Account Dashboard.</p>
        </div>
        <div className="px-6 py-2 text-sm w-3xl mx-auto rounded border border-blue-300">
            <span className="font-bold">What is your return policy?</span>
            <p>We accept returns within \(30\) days of delivery. Shoes must be unworn, in their original condition, and include the original shoebox and tags.</p>
        </div>
        
        
        
      </div>
        </>
    );
};

export default FAQ;



