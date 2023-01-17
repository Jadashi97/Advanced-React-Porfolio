import React, { useState } from 'react';
import { RadioGroup, RadioOption } from '../Radio';

const RadioCompo = () => {
    const [selected, setSelected] = useState("");

    return (
        <div>
            <h2>How did you hear about Mama's Restaurant?</h2>
            <RadioGroup>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>
        </div>
    );
}

export default RadioCompo;
