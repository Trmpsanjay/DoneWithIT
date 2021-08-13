import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

const {handleSubmit} = useFormikContext
function SubmitButton({title}) {
    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
          />
    );
}

export default SubmitButton;