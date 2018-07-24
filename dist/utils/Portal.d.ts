import React from 'react';
export default class Portal extends React.Component<{
    target?: Element;
}> {
    render(): React.ReactPortal | null;
}
