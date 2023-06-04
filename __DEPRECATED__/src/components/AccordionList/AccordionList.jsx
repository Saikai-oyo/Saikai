import React from 'react';

const AccordionList = ({ component: Component, ...rest }) => {
    if (isAccordion) {
        return (
            <Accordion>
                <Component {...props} />
            </Accordion>
        );
    }
    return <Component {...props} />;
};

export default AccordionList;
