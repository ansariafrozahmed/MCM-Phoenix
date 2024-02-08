import { NextResponse } from "next/server";

async function fetchCartData(currentMonth) {
  try {
    if (!currentMonth) return;

    const url = `https://demo-web.live/mcm/wp-json/wp/v2/${currentMonth}?acf_format=standard&_fields=acf`;

    // Send the PUT request and await the response
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error! Status:", response.status);
    }

    // Parse the response data as JSON
    const eventData = await response.json();
    // console.log(cartData, "cartData");

    return eventData;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching cart data:", error);
  }
}

export async function PUT(request, { params }) {
  const { month } = params;
  // console.log(month, "uygihojpk[]");
  const eventData = await fetchCartData(month);

  return NextResponse.json({ eventData });
}
