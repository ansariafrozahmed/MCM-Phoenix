import React from "react";

const DonateUsButton = ({ text }) => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="campaign_id" value="N7HTWXEEU6D9S" />
      <button class="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-lg md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
        {text}
      </button>
    </form>
  );
};

export default DonateUsButton;
