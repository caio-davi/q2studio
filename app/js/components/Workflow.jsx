import React from 'react';

const Workflow = ({ flow }) => (
    <button type="button" className="list-group-item">
        <span className="col-md-7">
            { flow.get('name') }
        </span>
        <span className="col-md-5">
            { flow.get('info') }
        </span>
    </button>
);

Workflow.propTypes = {
    flow: React.PropTypes.object
};

export default Workflow;
