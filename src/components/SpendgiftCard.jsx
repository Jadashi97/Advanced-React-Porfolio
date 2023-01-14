import React, { useState } from 'react'

const SpendgiftCard = () => {
    const [giftCard, setGiftCard] = useState(
        {
            firstName: "lokose",
            lastName: "Dan",
            text: "Free Diner for 4 guests",
            valid: true,
            instructions: 'To use this coupon, click btn below'
        }
    );

    function spendGiftCard(){
        setGiftCard(prevState => {
            return{
                ...prevState, 
                text: "Your coupon has been used.",
                valid: false,
                instructions: "Please visit restaurant to renew your gift card"
            }
        })
    }

    return (
        <div style={{padding: '40px'}}>
            <h1>Gift Card Page</h1>
            <h2>
                customer: {giftCard.firstName} {giftCard.lastName}
            </h2>
            <h3>
                {giftCard.text}
            </h3>
            <p>
                {giftCard.instructions}
            </p>
            {
                giftCard.valid && (
                    <button onClick={spendGiftCard} style={{backgroundColor: "black"}}>
                        Spend Gift Card
                    </button>
                )
            }
        </div>
    )
}

export default SpendgiftCard;
